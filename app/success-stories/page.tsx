import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Star, Quote } from "lucide-react"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"

export default function SuccessStoriesPage() {
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

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read inspiring stories from our clients who have successfully immigrated to Canada with our expert guidance
            and support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <Quote className="w-8 h-8 text-red-600 mb-4" />
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 text-lg">
                "TrustedVisaHelp made my Express Entry journey incredibly smooth. Their team was professional,
                knowledgeable, and always available to answer my questions. I received my PR within 8 months!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  SJ
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Sarah Johnson</h3>
                  <p className="text-gray-600">Software Engineer from UK</p>
                  <p className="text-sm text-gray-500">Express Entry - 2024</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <Quote className="w-8 h-8 text-red-600 mb-4" />
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 text-lg">
                "The PNP process seemed overwhelming until I found TrustedVisaHelp. They guided me through Ontario's
                nomination process and helped me secure my PR. Excellent service!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  MC
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Michael Chen</h3>
                  <p className="text-gray-600">Healthcare Professional from Philippines</p>
                  <p className="text-sm text-gray-500">Ontario PNP - 2024</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <Quote className="w-8 h-8 text-red-600 mb-4" />
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 text-lg">
                "Family sponsorship can be complex, but TrustedVisaHelp made it simple. They helped me sponsor my
                parents successfully. The whole family is now together in Canada!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  PP
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Priya Patel</h3>
                  <p className="text-gray-600">Business Owner from India</p>
                  <p className="text-sm text-gray-500">Family Sponsorship - 2023</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <Quote className="w-8 h-8 text-red-600 mb-4" />
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 text-lg">
                "As an international student, getting my study permit was crucial. TrustedVisaHelp handled everything
                perfectly. Now I'm studying at University of Toronto!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  AR
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Ahmed Rahman</h3>
                  <p className="text-gray-600">Student from Bangladesh</p>
                  <p className="text-sm text-gray-500">Study Permit - 2024</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12 bg-red-600 text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-xl mb-6 opacity-90">
            Join thousands of satisfied clients who have achieved their Canadian dream with our help.
          </p>
          <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
            <Link href="/apply">Start Your Journey Today</Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  )
}
