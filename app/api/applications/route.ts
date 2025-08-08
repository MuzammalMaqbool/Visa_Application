import { type NextRequest, NextResponse } from "next/server"
import { insertApplication, getAllApplications, type ApplicationData } from "@/lib/db-utils"

export async function POST(request: NextRequest) {
  try {
    const data: ApplicationData = await request.json()

    // Insert application into database
    const result = await insertApplication(data)

    console.log("New application submitted:", result)

    return NextResponse.json({
      success: true,
      trackingId: result.trackingId,
      message: "Application submitted successfully",
    })
  } catch (error) {
    console.error("Error submitting application:", error)
    return NextResponse.json({ error: "Failed to submit application" }, { status: 500 })
  }
}

export async function GET() {
  try {
    const applications = await getAllApplications()
    return NextResponse.json(applications)
  } catch (error) {
    console.error("Error fetching applications:", error)
    return NextResponse.json({ error: "Failed to fetch applications" }, { status: 500 })
  }
}
