import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, GraduationCap, BookOpen, Clock } from "lucide-react"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"

export default function StudyPermitPage() {
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

        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Study Permit</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Study at world-class Canadian institutions and gain valuable international education experience.
          </p>
        </div>

        <Card className="mb-12 animate-fade-in-up delay-100">
          <CardHeader>
            <CardTitle className="text-2xl">Why Study in Canada?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <GraduationCap className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold">World-Class Education</h3>
                <p className="text-sm text-gray-600">Top-ranked universities and colleges</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <BookOpen className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold">Work While Studying</h3>
                <p className="text-sm text-gray-600">Work up to 20 hours per week</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <Clock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold">Post-Graduation Work</h3>
                <p className="text-sm text-gray-600">Work permit after graduation</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="animate-fade-in-up delay-200">
            <CardHeader>
              <CardTitle>Study Permit Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <span>Letter of acceptance from a DLI</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <span>Proof of financial support</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <span>No criminal record</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <span>Medical exam (if required)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <span>Ties to home country</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="animate-fade-in-up delay-300">
            <CardHeader>
              <CardTitle>Financial Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-gray-50 rounded">
                  <h4 className="font-semibold mb-2">Tuition Fees</h4>
                  <p className="text-sm text-gray-600">$15,000 - $50,000 CAD per year</p>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <h4 className="font-semibold mb-2">Living Expenses</h4>
                  <p className="text-sm text-gray-600">$12,000 - $15,000 CAD per year</p>
                </div>
                <div className="p-3 bg-blue-50 rounded">
                  <h4 className="font-semibold mb-2">Additional for Family</h4>
                  <p className="text-sm text-gray-600">$4,000 CAD per family member</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-12 animate-fade-in-up delay-400">
          <CardHeader>
            <CardTitle>Application Process</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold mb-2">Choose Program</h3>
                <p className="text-sm text-gray-600">Select school and program</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold mb-2">Get Acceptance</h3>
                <p className="text-sm text-gray-600">Receive letter of acceptance</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold mb-2">Apply for Permit</h3>
                <p className="text-sm text-gray-600">Submit study permit application</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-semibold mb-2">Arrive in Canada</h3>
                <p className="text-sm text-gray-600">Start your studies</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center bg-purple-600 text-white p-8 rounded-lg animate-fade-in-up delay-500">
          <h2 className="text-3xl font-bold mb-4">Start Your Canadian Education Journey</h2>
          <p className="text-xl mb-6 opacity-90">
            Let us help you navigate the study permit process and achieve your academic goals in Canada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
              <Link href="/apply">Get Free Assessment</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
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
