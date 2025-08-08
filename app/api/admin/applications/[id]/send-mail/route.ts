import { type NextRequest, NextResponse } from "next/server"
import { getApplicationById } from "@/lib/db-utils"
import { sendStatusMail } from "@/lib/mail"

export async function POST(
  request: NextRequest,
  context: { params: { id: string } } // ✅ Rename second param to `context`
) {
  const { params } = context; // ✅ Extract params from context

  const authHeader = request.headers.get("authorization")
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const { status, notes } = await request.json()
    const application = await getApplicationById(Number(params.id))
    if (!application) {
      return NextResponse.json({ error: "Application not found" }, { status: 404 })
    }

    await sendStatusMail({
      to: application.email,
      applicantName: application.firstName + ' ' + application.lastName,
      status: status || application.status,
      notes: notes || application.notes,
      trackingId: application.trackingId,
    })

    return NextResponse.json({ success: true, message: "Mail sent successfully" })
  } catch (error) {
    console.error("Error sending mail:", error)
    return NextResponse.json({ error: "Failed to send mail" }, { status: 500 })
  }
}
