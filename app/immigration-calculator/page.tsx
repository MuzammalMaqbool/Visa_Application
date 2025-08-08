"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Calculator, TrendingUp } from "lucide-react"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"

export default function CRSCalculatorPage() {
  const [formData, setFormData] = useState({
    age: "",
    education: "",
    language1: "",
    language2: "",
    workExperience: "",
    canadianExperience: "",
    jobOffer: "",
    nomination: "",
    sibling: "",
    frenchProficiency: "",
    canadianEducation: "",
  })
  const [score, setScore] = useState<number | null>(null)

  const calculateScore = () => {

    if (!formData.age || Number(formData.age) <= 0) {
      alert("Please enter a valid positive age.")
      return
    }
    
    let totalScore = 0

    // Age points
    const age = Number.parseInt(formData.age)
    if (age >= 18 && age <= 35) totalScore += 110
    else if (age === 36) totalScore += 105
    else if (age === 37) totalScore += 100
    else if (age === 38) totalScore += 95
    else if (age === 39) totalScore += 90
    else if (age === 40) totalScore += 85
    else if (age === 41) totalScore += 80
    else if (age === 42) totalScore += 75
    else if (age === 43) totalScore += 70
    else if (age === 44) totalScore += 65
    else if (age === 45) totalScore += 60

    // Education points
    switch (formData.education) {
      case "phd":
        totalScore += 150
        break
      case "masters":
        totalScore += 135
        break
      case "bachelors":
        totalScore += 120
        break
      case "diploma":
        totalScore += 98
        break
      case "secondary":
        totalScore += 30
        break
    }

    // Language points (simplified)
    switch (formData.language1) {
      case "clb9":
        totalScore += 136
        break
      case "clb8":
        totalScore += 124
        break
      case "clb7":
        totalScore += 110
        break
      case "clb6":
        totalScore += 94
        break
    }

    // Work experience
    switch (formData.workExperience) {
      case "6+":
        totalScore += 80
        break
      case "4-5":
        totalScore += 70
        break
      case "2-3":
        totalScore += 55
        break
      case "1":
        totalScore += 40
        break
    }

    // Additional factors
    if (formData.jobOffer === "yes") totalScore += 50
    if (formData.nomination === "yes") totalScore += 600
    if (formData.sibling === "yes") totalScore += 15
    if (formData.canadianEducation === "yes") totalScore += 30

    setScore(totalScore)
  }

  const getScoreColor = (score: number) => {
    if (score >= 470) return "text-green-600"
    if (score >= 400) return "text-yellow-600"
    return "text-red-600"
  }

  const getScoreMessage = (score: number) => {
    if (score >= 470) return "Excellent! You have a very high chance of receiving an ITA."
    if (score >= 400) return "Good score! You may receive an ITA in upcoming draws."
    return "Your score needs improvement. Consider enhancing your profile."
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">CRS Score Calculator</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your Comprehensive Ranking System (CRS) score for Express Entry
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="animate-fade-in-up delay-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-6 h-6" />
                CRS Calculator
              </CardTitle>
              <CardDescription>Enter your information to calculate your Express Entry CRS score</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="age">Age</Label>
                <Input
  id="age"
  type="number"
  min={18}
  placeholder="Enter your age"
  value={formData.age}
  onChange={(e) => {
    const val = Number(e.target.value)
    if (val >= 0) {
      setFormData((prev) => ({ ...prev, age: e.target.value }))
    }
  }}
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
                    <SelectItem value="phd">PhD</SelectItem>
                    <SelectItem value="masters">Master's Degree</SelectItem>
                    <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                    <SelectItem value="diploma">Diploma/Certificate</SelectItem>
                    <SelectItem value="secondary">Secondary School</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="language1">First Official Language (English/French)</Label>
                <Select
                  value={formData.language1}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, language1: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select language level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="clb9">CLB 9+ (IELTS 8+)</SelectItem>
                    <SelectItem value="clb8">CLB 8 (IELTS 7.5)</SelectItem>
                    <SelectItem value="clb7">CLB 7 (IELTS 6.0)</SelectItem>
                    <SelectItem value="clb6">CLB 6 (IELTS 5.5)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="workExperience">Foreign Work Experience</Label>
                <Select
                  value={formData.workExperience}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, workExperience: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select work experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="6+">6+ years</SelectItem>
                    <SelectItem value="4-5">4-5 years</SelectItem>
                    <SelectItem value="2-3">2-3 years</SelectItem>
                    <SelectItem value="1">1 year</SelectItem>
                    <SelectItem value="0">No experience</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="jobOffer">Valid Job Offer in Canada?</Label>
                <Select
                  value={formData.jobOffer}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, jobOffer: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="nomination">Provincial Nomination?</Label>
                <Select
                  value={formData.nomination}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, nomination: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="sibling">Sibling in Canada?</Label>
                <Select
                  value={formData.sibling}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, sibling: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="canadianEducation">Canadian Education?</Label>
                <Select
                  value={formData.canadianEducation}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, canadianEducation: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={calculateScore} className="w-full bg-red-600 hover:bg-red-700">
                Calculate CRS Score
              </Button>
            </CardContent>
          </Card>

          <Card className="animate-fade-in-up delay-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-6 h-6" />
                Your CRS Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              {score !== null ? (
                <div className="text-center">
                  <div className={`text-6xl font-bold mb-4 ${getScoreColor(score)}`}>{score}</div>
                  <p className="text-lg mb-6">{getScoreMessage(score)}</p>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Recent Draw Scores</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Latest Draw:</span>
                          <span className="font-semibold">481</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Average (2024):</span>
                          <span className="font-semibold">475</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Lowest (2024):</span>
                          <span className="font-semibold">435</span>
                        </div>
                      </div>
                    </div>
                    <Button asChild className="w-full">
                      <Link href="/apply">Get Professional Assessment</Link>
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-500 py-12">
                  <Calculator className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Fill out the form to calculate your CRS score</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Tips Section */}
        <Card className="mt-8 animate-fade-in-up delay-300">
          <CardHeader>
            <CardTitle>Tips to Improve Your CRS Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Language Improvement</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Retake IELTS/CELPIP to improve scores</li>
                  <li>• Learn French as a second language</li>
                  <li>• Aim for CLB 9+ in all abilities</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Education Enhancement</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Get Educational Credential Assessment (ECA)</li>
                  <li>• Consider additional Canadian education</li>
                  <li>• Pursue higher education if possible</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Work Experience</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Gain Canadian work experience</li>
                  <li>• Ensure NOC skill level A, B, or 0</li>
                  <li>• Document all relevant experience</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Additional Points</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Apply for Provincial Nomination (600 points)</li>
                  <li>• Secure valid job offer (50-200 points)</li>
                  <li>• Check if you have a Canadian sibling</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  )
}
