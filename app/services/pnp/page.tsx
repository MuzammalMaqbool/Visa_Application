import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, MapPin, Users, Award } from "lucide-react"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"

export default function PNPPage() {
  const provinces = [
    { name: "Ontario", program: "OINP", streams: 9, color: "bg-blue-500" },
    { name: "British Columbia", program: "BC PNP", streams: 5, color: "bg-green-500" },
    { name: "Alberta", program: "AINP", streams: 4, color: "bg-red-500" },
    { name: "Saskatchewan", program: "SINP", streams: 6, color: "bg-yellow-500" },
    { name: "Manitoba", program: "MPNP", streams: 4, color: "bg-purple-500" },
    { name: "Nova Scotia", program: "NSNP", streams: 8, color: "bg-indigo-500" },
  ]

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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Provincial Nominee Program</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get nominated by a Canadian province and receive 600 additional CRS points for Express Entry.
          </p>
        </div>

        {/* Overview */}
        <Card className="mb-12 animate-fade-in-up delay-100">
          <CardHeader>
            <CardTitle className="text-2xl">What is PNP?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-6">
              The Provincial Nominee Program (PNP) allows Canadian provinces and territories to nominate individuals who
              wish to immigrate to Canada and who are interested in settling in a particular province.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold">600 CRS Points</h3>
                <p className="text-sm text-gray-600">Guaranteed Express Entry invitation</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <MapPin className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold">Province-Specific</h3>
                <p className="text-sm text-gray-600">Tailored to local economic needs</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold">Multiple Streams</h3>
                <p className="text-sm text-gray-600">Various pathways available</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Provinces */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 animate-fade-in-up delay-200">Provincial Programs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {provinces.map((province, index) => (
              <Card
                key={province.name}
                className={`hover:shadow-lg transition-all duration-300 animate-fade-in-up delay-${300 + index * 100}`}
              >
                <CardHeader>
                  <div className={`w-12 h-12 ${province.color} rounded-lg flex items-center justify-center mb-4`}>
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>{province.name}</CardTitle>
                  <CardDescription>{province.program}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{province.streams} immigration streams available</p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <Card className="mb-12 animate-fade-in-up delay-400">
          <CardHeader>
            <CardTitle>General PNP Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Basic Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Meet province-specific criteria</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Intention to live in nominating province</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Meet federal immigration requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Language proficiency</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Common Streams</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                    <span>Skilled Worker streams</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                    <span>International Graduate streams</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                    <span>Entrepreneur/Investor streams</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                    <span>In-demand occupation streams</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center bg-blue-600 text-white p-8 rounded-lg animate-fade-in-up delay-500">
          <h2 className="text-3xl font-bold mb-4">Find Your Perfect Province</h2>
          <p className="text-xl mb-6 opacity-90">
            Let us help you identify the best provincial program for your profile and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
              <Link href="/apply">Get Free Assessment</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
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
