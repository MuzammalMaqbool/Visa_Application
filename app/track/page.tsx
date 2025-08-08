"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { ArrowLeft, Search, CheckCircle, Clock, XCircle, FileText } from "lucide-react"
import Link from "next/link"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"

interface Application {
  id: string
  trackingId: string
  firstName: string
  lastName: string
  email: string
  visaType: string
  status: string
  submittedAt: string
  updatedAt: string
  notes?: string
}

export default function TrackPage() {
  const { toast } = useToast()
  const [trackingId, setTrackingId] = useState("")
  const [application, setApplication] = useState<Application | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!trackingId.trim()) {
      toast({
        title: "Error",
        description: "Please enter a tracking ID",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch(`/api/applications/track?trackingId=${trackingId}`)
      if (response.ok) {
        const data = await response.json()
        setApplication(data)
      } else {
        toast({
          title: "Not Found",
          description: "No application found with this tracking ID",
          variant: "destructive",
        })
        setApplication(null)
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to track application. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "approved":
        return <CheckCircle className="w-5 h-5 text-green-600" />
      case "rejected":
        return <XCircle className="w-5 h-5 text-red-600" />
      case "under_review":
        return <Clock className="w-5 h-5 text-yellow-600" />
      default:
        return <FileText className="w-5 h-5 text-blue-600" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "approved":
        return "bg-green-100 text-green-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      case "under_review":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-blue-100 text-blue-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="mb-6">
          <Button asChild variant="ghost">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Track Your Case Status</CardTitle>
            <CardDescription>
              Enter your case tracking ID to check the current status of your immigration application
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleTrack} className="space-y-4">
              <div>
                <Label htmlFor="trackingId">Tracking ID</Label>
                <Input
                  id="trackingId"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  placeholder="Enter your case ID (e.g., TVH-2024-001234)"
                  required
                />
              </div>
              <Button type="submit" disabled={isLoading} className="w-full">
                <Search className="w-4 h-4 mr-2" />
                {isLoading ? "Searching..." : "Check Status"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {application && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {getStatusIcon(application.status)}
                Application Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium text-gray-500">Tracking ID</Label>
                  <p className="font-mono">{application.trackingId}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-500">Status</Label>
                  <div className="flex items-center gap-2">
                    <Badge className={getStatusColor(application.status)}>
                      {application.status.replace("_", " ").toUpperCase()}
                    </Badge>
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-500">Applicant</Label>
                  <p>
                    {application.firstName} {application.lastName}
                  </p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-500">Visa Type</Label>
                  <p className="capitalize">{application.visaType.replace("_", " ")}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-500">Submitted</Label>
                  <p>{new Date(application.submittedAt).toLocaleDateString()}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-500">Last Updated</Label>
                  <p>{new Date(application.updatedAt).toLocaleDateString()}</p>
                </div>
              </div>

              {application.notes && (
                <div>
                  <Label className="text-sm font-medium text-gray-500">Notes</Label>
                  <p className="mt-1 p-3 bg-gray-50 rounded-md">{application.notes}</p>
                </div>
              )}

              <div className="border-t pt-4">
                <h4 className="font-medium mb-2">Application Timeline</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm">Application submitted</span>
                    <span className="text-xs text-gray-500 ml-auto">
                      {new Date(application.submittedAt).toLocaleDateString()}
                    </span>
                  </div>
                  {application.status !== "pending" && (
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                      <span className="text-sm">Under review</span>
                    </div>
                  )}
                  {(application.status === "approved" || application.status === "rejected") && (
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          application.status === "approved" ? "bg-green-600" : "bg-red-600"
                        }`}
                      ></div>
                      <span className="text-sm">Application {application.status}</span>
                      <span className="text-xs text-gray-500 ml-auto">
                        {new Date(application.updatedAt).toLocaleDateString()}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <Footer />
    </div>
  )
}
