import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, Briefcase, Users } from "lucide-react"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"

export default function WorkPermitPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Work Permit</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Gain valuable Canadian work experience and advance your immigration goals with a work permit.
          </p>
        </div>

        <Card className="mb-12 animate-fade-in-up delay-100">
          <CardHeader>
            <CardTitle className="text-2xl">Types of Work Permits</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <Briefcase className="w-8 h-8 text-blue-600 mb-2" />
                <h3 className="font-semibold mb-2">Employer-Specific</h3>
                <p className="text-sm text-gray-600">Work for a specific employer in a specific location</p>
                <ul className="text-xs text-gray-500 mt-2 space-y-1">
                  <li>• Requires LMIA (usually)</li>
                  <li>• Tied to one employer</li>
                  <li>• Most common type</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <Users className="w-8 h-8 text-green-600 mb-2" />
                <h3 className="font-semibold mb-2">Open Work Permit</h3>
                <p className="text-sm text-gray-600">Work for any employer anywhere in Canada</p>
                <ul className="text-xs text-gray-500 mt-2 space-y-1">
                  <li>• No LMIA required</li>
                  <li>• Work for any employer</li>
                  <li>• Limited eligibility</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="animate-fade-in-up delay-200">
            <CardHeader>
              <CardTitle>Work Permit Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <span>Valid job offer (for employer-specific)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <span>LMIA or LMIA exemption</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <span>Proof you'll leave Canada when permit expires</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <span>Sufficient funds for stay</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <span>No criminal record</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <span>Medical exam (if required)</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="animate-fade-in-up delay-300">
            <CardHeader>
              <CardTitle>LMIA Exemptions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded">
                  <h4 className="font-semibold text-sm">NAFTA/CUSMA</h4>
                  <p className="text-xs text-gray-600">US and Mexican citizens</p>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <h4 className="font-semibold text-sm">Intra-company Transfer</h4>
                  <p className="text-xs text-gray-600">Executives, managers, specialized knowledge</p>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <h4 className="font-semibold text-sm">International Agreements</h4>
                  <p className="text-xs text-gray-600">CETA, CPTPP, etc.</p>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <h4 className="font-semibold text-sm">Provincial Nominees</h4>
                  <p className="text-xs text-gray-600">With job offer component</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-12 animate-fade-in-up delay-400">
          <CardHeader>
            <CardTitle>Processing Times & Fees</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Processing Times</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-sm">Outside Canada</span>
                    <span className="text-sm font-semibold">2-12 weeks</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-sm">Inside Canada</span>
                    <span className="text-sm font-semibold">4-6 months</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-sm">Extension</span>
                    <span className="text-sm font-semibold">4-6 months</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Government Fees</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-sm">Work Permit</span>
                    <span className="text-sm font-semibold">$155 CAD</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-sm">Open Work Permit</span>
                    <span className="text-sm font-semibold">$100 CAD</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-sm">Biometrics</span>
                    <span className="text-sm font-semibold">$85 CAD</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center bg-orange-600 text-white p-8 rounded-lg animate-fade-in-up delay-500">
          <h2 className="text-3xl font-bold mb-4">Ready to Work in Canada?</h2>
          <p className="text-xl mb-6 opacity-90">
            Let us help you secure your work permit and start your Canadian career journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
              <Link href="/apply">Get Free Assessment</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
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
