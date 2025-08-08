import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Award, Users, Globe } from "lucide-react"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"

export default function OurTeamPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      title: "Senior Immigration Consultant",
      credentials: "RCIC, ICCRC Member",
      experience: "12+ years",
      specialization: "Express Entry, PNP",
      image: "SJ",
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "Michael Chen",
      title: "Immigration Consultant",
      credentials: "RCIC, ICCRC Member",
      experience: "8+ years",
      specialization: "Family Sponsorship, Study Permits",
      image: "MC",
      color: "from-green-400 to-green-600",
    },
    {
      name: "Priya Patel",
      title: "Immigration Consultant",
      credentials: "RCIC, ICCRC Member",
      experience: "10+ years",
      specialization: "Business Immigration, Work Permits",
      image: "PP",
      color: "from-purple-400 to-purple-600",
    },
    {
      name: "David Rodriguez",
      title: "Immigration Consultant",
      credentials: "RCIC, ICCRC Member",
      experience: "6+ years",
      specialization: "Quebec Immigration, French Programs",
      image: "DR",
      color: "from-orange-400 to-orange-600",
    },
  ]

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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Expert Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our team of licensed immigration consultants dedicated to helping you achieve your Canadian dream.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card
              key={member.name}
              className={`hover:shadow-lg transition-shadow animate-fade-in-up delay-${100 + index * 100}`}
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`w-24 h-24 bg-gradient-to-r ${member.color} rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4`}
                >
                  {member.image}
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-red-600 font-medium mb-2">{member.title}</p>
                <p className="text-sm text-gray-600 mb-2">{member.credentials}</p>
                <p className="text-sm text-gray-600 mb-2">{member.experience} experience</p>
                <p className="text-xs text-gray-500">{member.specialization}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center animate-fade-in-up delay-500">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Licensed Professionals</h3>
              <p className="text-gray-600">
                All our consultants are licensed by the Immigration Consultants of Canada Regulatory Council (ICCRC).
              </p>
            </CardContent>
          </Card>

          <Card className="text-center animate-fade-in-up delay-600">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Diverse Expertise</h3>
              <p className="text-gray-600">
                Our team covers all immigration programs and speaks multiple languages to serve clients worldwide.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center animate-fade-in-up delay-700">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Experience</h3>
              <p className="text-gray-600">
                Combined experience helping clients from over 100 countries successfully immigrate to Canada.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-12 animate-fade-in-up delay-800">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-center mb-6">Why Choose Our Team?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Professional Excellence</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• RCIC licensed immigration consultants</li>
                  <li>• Continuous professional development</li>
                  <li>• Up-to-date with latest immigration policies</li>
                  <li>• Ethical and transparent practices</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Client-Focused Approach</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Personalized immigration strategies</li>
                  <li>• Regular communication and updates</li>
                  <li>• Multilingual support services</li>
                  <li>• Post-landing settlement assistance</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center bg-red-600 text-white p-8 rounded-lg animate-fade-in-up delay-900">
          <h2 className="text-3xl font-bold mb-4">Ready to Work with Our Expert Team?</h2>
          <p className="text-xl mb-6 opacity-90">
            Schedule a consultation with one of our licensed immigration consultants today.
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
