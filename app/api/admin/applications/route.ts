import { type NextRequest, NextResponse } from "next/server"
import { getAllApplications } from "@/lib/db-utils"

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization")

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const applications = await getAllApplications()
    console.log("Admin fetching applications:", applications.length)
    return NextResponse.json(applications)
  } catch (error) {
    console.error("Error fetching applications for admin:", error)
    return NextResponse.json({ error: "Failed to fetch applications" }, { status: 500 })
  }
}
