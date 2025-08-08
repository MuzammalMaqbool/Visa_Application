"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, CheckCircle, XCircle, AlertCircle } from "lucide-react"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"

export default function EligibilityCheckerPage() {
  const [formData, setFormData] = useState({
    age: "",
    education: "",
    language: "",
    workExperience: "",
    jobOffer: "",
    funds: "",
  })
  const [result, setResult] = useState<string | null>(null)

  const checkEligibility = () => {
    const age = Number.parseInt(formData.age)
    let score = 0

    // Simple eligibility logic
    if (age >= 18 && age <= 35) score += 3
    else if (age >= 36 && age <= 45) score += 2
    else if (age >= 46 && age <= 55) score += 1

    if (formData.education === "bachelors" || formData.education === "masters" || formData.education === "phd")
      score += 2
    if (formData.language === "advanced") score += 2
    if (formData.workExperience === "3+" || formData.workExperience === "5+") score += 2
    if (formData.jobOffer === "yes") score += 2
    if (formData.funds === "sufficient") score += 1

    if (score >= 8) setResult("excellent")
    else if (score >= 6) setResult("good")
    else if (score >= 4) setResult("fair")
    else setResult("poor")
  }

  const getResultIcon = (result: string) => {
    switch (result) {
      case "excellent":
        return <CheckCircle className="w-8 h-8 text-green-600" />
      case "good":
        return <CheckCircle className="w-8 h-8 text-blue-600" />
      case "fair":
        return <AlertCircle className="w-8 h-8 text-yellow-600" />
      case "poor":
        return <XCircle className="w-8 h-8 text-red-600" />
      default:
        return null
    }
  }

  const getResultMessage = (result: string) => {
    switch (result) {
      case "excellent":
        return "Excellent! You have strong eligibility for multiple immigration programs."
      case "good":
        return "Good! You may be eligible for several immigration programs."
      case "fair":
        return "Fair. You may need to improve some factors to increase your chances."
      case "poor":
        return "Limited eligibility. Consider improving your qualifications."
      default:
        return ""
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button asChild variant="ghost">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>

        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Immigration Eligibility Checker</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get a quick assessment of your eligibility for Canadian immigration programs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="animate-fade-in-up delay-100">
            <CardHeader>
              <CardTitle>Quick Eligibility Assessment</CardTitle>
              <CardDescription>Answer a few questions to check your immigration eligibility</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="Enter your age"
                  value={formData.age}
                  onChange={(e) => setFormData((prev) => ({ ...prev, age: e.target.value }))}
                />
              </div>

              <div>
                <Label htmlFor="education">Highest Education</Label>
                <Select
                  value={formData.education}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, education: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select education level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="secondary">High School</SelectItem>
                    <SelectItem value="diploma">Diploma/Certificate</SelectItem>
                    <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                    <SelectItem value="masters">Master's Degree</SelectItem>
                    <SelectItem value="phd">PhD</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="language">English/French Proficiency</Label>
                <Select
                  value={formData.language}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, language: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select language level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                    <SelectItem value="native">Native/Near Native</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="workExperience">Work Experience</Label>
                <Select
                  value={formData.workExperience}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, workExperience: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select work experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">No experience</SelectItem>
                    <SelectItem value="1-2">1-2 years</SelectItem>
                    <SelectItem value="3+">3+ years</SelectItem>
                    <SelectItem value="5+">5+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="jobOffer">Canadian Job Offer</Label>
                <Select
                  value={formData.jobOffer}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, jobOffer: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Do you have a job offer?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="funds">Settlement Funds</Label>
                <Select
                  value={formData.funds}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, funds: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Do you have sufficient funds?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sufficient">Yes, sufficient funds</SelectItem>
                    <SelectItem value="insufficient">No, insufficient funds</SelectItem>
                    <SelectItem value="unsure">Not sure</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={checkEligibility} className="w-full bg-red-600 hover:bg-red-700">
                Check Eligibility
              </Button>
            </CardContent>
          </Card>

          <Card className="animate-fade-in-up delay-200">
            <CardHeader>
              <CardTitle>Your Eligibility Result</CardTitle>
            </CardHeader>
            <CardContent>
              {result ? (
                <div className="text-center">
                  <div className="mb-4">{getResultIcon(result)}</div>
                  <h3 className="text-xl font-semibold mb-4 capitalize">{result} Eligibility</h3>
                  <p className="text-gray-600 mb-6">{getResultMessage(result)}</p>

                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Recommended Programs</h4>
                      <div className="text-sm space-y-1">
                        {result === "excellent" && (
                          <>
                            <p>• Express Entry</p>
                            <p>• Provincial Nominee Program</p>
                            <p>• Quebec Immigration</p>
                          </>
                        )}
                        {result === "good" && (
                          <>
                            <p>• Express Entry</p>
                            <p>• Provincial Nominee Program</p>
                          </>
                        )}
                        {result === "fair" && (
                          <>
                            <p>• Provincial Nominee Program</p>
                            <p>• Study Permit (pathway to PR)</p>
                          </>
                        )}
                        {result === "poor" && (
                          <>
                            <p>• Study Permit</p>
                            <p>• Work Permit</p>
                          </>
                        )}
                      </div>
                    </div>

                    <Button asChild className="w-full">
                      <Link href="/apply">Get Detailed Assessment</Link>
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-500 py-12">
                  <AlertCircle className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Complete the form to check your eligibility</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 animate-fade-in-up delay-300">
          <CardHeader>
            <CardTitle>Important Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Disclaimer:</strong> This is a preliminary assessment tool. Your actual eligibility may vary
                based on many factors not covered in this quick check. For a comprehensive evaluation, please consult
                with our licensed immigration consultants.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  )
}
