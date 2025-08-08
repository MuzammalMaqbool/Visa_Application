import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()

    // Simple authentication for demo
    // In production, use proper authentication with hashed passwords
    if (username === "admin" && password === "admin123") {
      // Generate a simple token (in production, use JWT)
      const token = "admin-token-" + Date.now()

      return NextResponse.json({
        success: true,
        token,
        message: "Login successful",
      })
    } else {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }
  } catch (error) {
    return NextResponse.json({ error: "Login failed" }, { status: 500 })
  }
}
