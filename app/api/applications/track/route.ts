import { type NextRequest, NextResponse } from "next/server"
import { getApplicationByTrackingId } from "@/lib/db-utils"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const trackingId = searchParams.get("trackingId")

  console.log("Tracking request for ID:", trackingId)

  if (!trackingId) {
    return NextResponse.json({ error: "Tracking ID is required" }, { status: 400 })
  }

  try {
    // Find application by tracking ID from database
    const application = await getApplicationByTrackingId(trackingId)

    if (!application) {
      console.log("Application not found for tracking ID:", trackingId)
      return NextResponse.json({ error: "Application not found" }, { status: 404 })
    }

    console.log("Application found:", application)
    return NextResponse.json(application)
  } catch (error) {
    console.error("Error fetching application:", error)
    return NextResponse.json({ error: "Failed to fetch application" }, { status: 500 })
  }
}
