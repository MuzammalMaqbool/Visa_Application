import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, Camera, Briefcase, Users } from "lucide-react"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"

export default function VisitorVisaPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Visitor Visa</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visit Canada for tourism, business, or to visit family and friends with our visitor visa services.
          </p>
        </div>

        <Card className="mb-12 animate-fade-in-up delay-100">
          <CardHeader>
            <CardTitle className="text-2xl">Types of Visitor Visas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Camera className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold">Tourism</h3>
                <p className="text-sm text-gray-600">Sightseeing and leisure travel</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Briefcase className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold">Business</h3>
                <p className="text-sm text-gray-600">Meetings, conferences, training</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold">Family Visit</h3>
                <p className="text-sm text-gray-600">Visit family and friends</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="animate-fade-in-up delay-200">
            <CardHeader>
              <CardTitle>Visitor Visa Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <span>Valid passport or travel document</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <span>Proof of financial support</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <span>Ties to home country</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <span>Purpose of visit documentation</span>
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
              <CardTitle>Required Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded">
                  <h4 className="font-semibold text-sm">Travel Documents</h4>
                  <p className="text-xs text-gray-600">Passport, travel history</p>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <h4 className="font-semibold text-sm">Financial Proof</h4>
                  <p className="text-xs text-gray-600">Bank statements, employment letter</p>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <h4 className="font-semibold text-sm">Purpose of Visit</h4>
                  <p className="text-xs text-gray-600">Invitation letter, itinerary</p>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <h4 className="font-semibold text-sm">Ties to Home Country</h4>
                  <p className="text-xs text-gray-600">Property, employment, family</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-12 animate-fade-in-up delay-400">
          <CardHeader>
            <CardTitle>Processing Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="font-semibold mb-2">Processing Time</h3>
                <p className="text-2xl font-bold text-blue-600">2-4 weeks</p>
                <p className="text-sm text-gray-600">Varies by country</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Government Fee</h3>
                <p className="text-2xl font-bold text-green-600">$100 CAD</p>
                <p className="text-sm text-gray-600">Per person</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Validity</h3>
                <p className="text-2xl font-bold text-purple-600">Up to 10 years</p>
                <p className="text-sm text-gray-600">Multiple entry</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-12 animate-fade-in-up delay-500">
          <CardHeader>
            <CardTitle>Tips for Success</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-green-600">Do's</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Apply well in advance</li>
                  <li>• Provide complete documentation</li>
                  <li>• Show strong ties to home country</li>
                  <li>• Be honest in your application</li>
                  <li>• Include detailed travel itinerary</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-red-600">Don'ts</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Don't provide false information</li>
                  <li>• Don't apply too close to travel date</li>
                  <li>• Don't submit incomplete applications</li>
                  <li>• Don't ignore financial requirements</li>
                  <li>• Don't forget to show intent to return</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center bg-indigo-600 text-white p-8 rounded-lg animate-fade-in-up delay-600">
          <h2 className="text-3xl font-bold mb-4">Ready to Visit Canada?</h2>
          <p className="text-xl mb-6 opacity-90">
            Let us help you secure your visitor visa and plan your perfect Canadian experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
              <Link href="/apply">Get Free Assessment</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-indigo-600 bg-transparent"
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
