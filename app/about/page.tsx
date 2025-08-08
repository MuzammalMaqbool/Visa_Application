import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Award, Users, Globe, Shield } from "lucide-react"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"

export default function AboutPage() {
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

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About TrustedVisaHelp</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in Canadian immigration with over 15 years of experience helping individuals and
            families achieve their Canadian dream.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To provide exceptional immigration services that simplify the complex process of moving to Canada. We
                are committed to delivering personalized, professional, and reliable guidance to help our clients
                achieve their immigration goals.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To be the leading immigration consultancy firm, recognized for our expertise, integrity, and success in
                helping people build new lives in Canada. We envision a world where immigration is accessible and
                stress-free for everyone.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-red-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">50,000+</div>
            <div className="text-gray-600">Successful Applications</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">98%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">100+</div>
            <div className="text-gray-600">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Why Choose TrustedVisaHelp?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Licensed Professionals</h3>
              <p className="text-gray-600">
                Our team consists of RCIC licensed immigration consultants with extensive knowledge of Canadian
                immigration law and procedures.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personalized Service</h3>
              <p className="text-gray-600">
                We understand that every case is unique. Our consultants provide personalized strategies tailored to
                your specific situation and goals.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparent Process</h3>
              <p className="text-gray-600">
                We maintain complete transparency throughout the process, keeping you informed at every step with
                regular updates and clear communication.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-red-600 text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-6 opacity-90">
            Let our experienced team guide you through your Canadian immigration process.
          </p>
          <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
            <Link href="/apply">Get Free Assessment</Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  )
}
