import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, Heart, Users, Clock } from "lucide-react"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"

export default function FamilySponsorshipPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Family Sponsorship</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reunite with your loved ones in Canada. Sponsor your spouse, children, parents, or grandparents.
          </p>
        </div>

        <Card className="mb-12 animate-fade-in-up delay-100">
          <CardHeader>
            <CardTitle className="text-2xl">Who Can You Sponsor?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-pink-50 rounded-lg">
                <Heart className="w-8 h-8 text-pink-600 mx-auto mb-2" />
                <h3 className="font-semibold">Spouse/Partner</h3>
                <p className="text-sm text-gray-600">Married or common-law partner</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold">Children</h3>
                <p className="text-sm text-gray-600">Dependent children under 22</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold">Parents</h3>
                <p className="text-sm text-gray-600">Your biological or adoptive parents</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold">Grandparents</h3>
                <p className="text-sm text-gray-600">Your biological or adoptive grandparents</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="animate-fade-in-up delay-200">
            <CardHeader>
              <CardTitle>Sponsorship Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <span>Be 18 years or older</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <span>Be a Canadian citizen or permanent resident</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <span>Meet income requirements (for parents/grandparents)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <span>Sign an undertaking to support the person</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <span>Not be in default of previous undertaking</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="animate-fade-in-up delay-300">
            <CardHeader>
              <CardTitle>Processing Times</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span>Spouse/Partner</span>
                  <span className="font-semibold flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    12 months
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span>Dependent Children</span>
                  <span className="font-semibold flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    12 months
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span>Parents/Grandparents</span>
                  <span className="font-semibold flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    20-24 months
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-12 animate-fade-in-up delay-400">
          <CardHeader>
            <CardTitle>Income Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-yellow-50 p-4 rounded-lg mb-4">
              <p className="text-sm text-yellow-800">
                <strong>Note:</strong> No income requirement for sponsoring spouse, partner, or dependent children.
              </p>
            </div>
            <h3 className="font-semibold mb-3">For Parents and Grandparents (2024):</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 p-2 text-left">Family Size</th>
                    <th className="border border-gray-300 p-2 text-left">Minimum Income Required</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2">2 persons</td>
                    <td className="border border-gray-300 p-2">$32,270</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">3 persons</td>
                    <td className="border border-gray-300 p-2">$39,672</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">4 persons</td>
                    <td className="border border-gray-300 p-2">$48,167</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">5 persons</td>
                    <td className="border border-gray-300 p-2">$54,630</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="text-center bg-green-600 text-white p-8 rounded-lg animate-fade-in-up delay-500">
          <h2 className="text-3xl font-bold mb-4">Ready to Reunite Your Family?</h2>
          <p className="text-xl mb-6 opacity-90">
            Let us help you navigate the family sponsorship process and bring your loved ones to Canada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
              <Link href="/apply">Get Free Assessment</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
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
