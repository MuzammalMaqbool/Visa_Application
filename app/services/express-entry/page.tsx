import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, Users, Award, FileText } from "lucide-react"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"

export default function ExpressEntryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button asChild variant="ghost">
            <Link href="/services">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
          </Button>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Express Entry Program</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The fastest pathway to Canadian permanent residence for skilled workers. Get your PR in as little as 6
            months.
          </p>
        </div>

        {/* Overview */}
        <Card className="mb-12 animate-fade-in-up delay-100">
          <CardHeader>
            <CardTitle className="text-2xl">What is Express Entry?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Express Entry is Canada's flagship immigration system for skilled workers. It manages applications for
              three federal economic immigration programs:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold">Federal Skilled Worker</h3>
                <p className="text-sm text-gray-600">For skilled workers with foreign work experience</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Award className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold">Canadian Experience Class</h3>
                <p className="text-sm text-gray-600">For those with Canadian work experience</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <FileText className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold">Federal Skilled Trades</h3>
                <p className="text-sm text-gray-600">For skilled tradespeople</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Requirements */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="animate-fade-in-up delay-200">
            <CardHeader>
              <CardTitle>Eligibility Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <strong>Language Proficiency:</strong> Minimum CLB 7 in English or French
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <strong>Education:</strong> Canadian secondary or post-secondary credential, or foreign equivalent
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <strong>Work Experience:</strong> At least 1 year of continuous full-time skilled work experience
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <strong>Proof of Funds:</strong> Show you have enough money to support yourself and family
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <strong>Admissibility:</strong> Pass medical exams and security/criminal background checks
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="animate-fade-in-up delay-300">
            <CardHeader>
              <CardTitle>CRS Score Factors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span>Age</span>
                  <span className="font-semibold">Up to 110 points</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span>Education</span>
                  <span className="font-semibold">Up to 150 points</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span>Language</span>
                  <span className="font-semibold">Up to 160 points</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span>Work Experience</span>
                  <span className="font-semibold">Up to 80 points</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                  <span>Additional Factors</span>
                  <span className="font-semibold text-blue-600">Up to 600 points</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Process */}
        <Card className="mb-12 animate-fade-in-up delay-400">
          <CardHeader>
            <CardTitle>Express Entry Process</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold mb-2">Create Profile</h3>
                <p className="text-sm text-gray-600">Submit your Express Entry profile online</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold mb-2">Enter Pool</h3>
                <p className="text-sm text-gray-600">Your profile enters the candidate pool</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold mb-2">Receive ITA</h3>
                <p className="text-sm text-gray-600">Get Invitation to Apply if selected</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-semibold mb-2">Submit Application</h3>
                <p className="text-sm text-gray-600">Complete application within 60 days</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center bg-red-600 text-white p-8 rounded-lg animate-fade-in-up delay-500">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Express Entry Journey?</h2>
          <p className="text-xl mb-6 opacity-90">
            Let our experts help you maximize your CRS score and navigate the Express Entry process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
              <Link href="/apply">Get Free Assessment</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
            >
              <Link href="/contact">Book Consultation</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
