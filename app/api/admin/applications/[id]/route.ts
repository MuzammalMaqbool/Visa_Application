import { type NextRequest, NextResponse } from "next/server"
import { updateApplicationStatus, getApplicationById } from "@/lib/db-utils"
import { sendStatusMail } from "@/lib/mail"

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const authHeader = request.headers.get("authorization")

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const { status, notes } = await request.json()
    // Update the application status in database
    await updateApplicationStatus(params.id, status, notes)

    // Fetch the updated application
    const application = await getApplicationById(Number(params.id))
    if (application) {
      // Send status update email
      await sendStatusMail({
        to: application.email,
        applicantName: application.firstName + ' ' + application.lastName,
        status,
        notes,
        trackingId: application.trackingId,
      })
    }

    console.log("Application updated and mail sent:", { id: params.id, status, notes })

    return NextResponse.json({
      success: true,
      message: "Application updated and mail sent successfully",
    })
  } catch (error) {
    console.error("Error updating application or sending mail:", error)
    return NextResponse.json({ error: "Failed to update application or send mail" }, { status: 500 })
  }
}
