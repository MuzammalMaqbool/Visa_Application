import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, FileText, Shield, Users, Award, Globe, CheckCircle, Star, ArrowRight, TrendingUp } from "lucide-react"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Your Trusted Partner for <br />
              <span className="text-yellow-300 animate-pulse">Canada Immigration</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
              Get expert guidance from licensed immigration consultants. We've helped over 50,000+ clients achieve their
              Canadian dream with a 98% success rate.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up delay-300">
            <Button
              asChild
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Link href="/apply">
                Start Free Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Link href="/contact">Book Consultation</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center animate-fade-in-up delay-500">
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-2xl md:text-3xl font-bold">50,000+</div>
              <div className="text-sm opacity-80">Successful Applications</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-2xl md:text-3xl font-bold">98%</div>
              <div className="text-sm opacity-80">Success Rate</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-2xl md:text-3xl font-bold">15+</div>
              <div className="text-sm opacity-80">Years Experience</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-2xl md:text-3xl font-bold">24/7</div>
              <div className="text-sm opacity-80">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Immigration Programs */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Immigration Programs</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Explore various pathways to make Canada your new home
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group animate-fade-in-up delay-100">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors">
                  <Users className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle className="group-hover:text-red-600 transition-colors">Express Entry</CardTitle>
                <CardDescription>
                  Fast-track immigration for skilled workers through Federal Skilled Worker, Canadian Experience Class,
                  and Federal Skilled Trades programs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Processing time: 6 months
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    No job offer required
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Points-based system
                  </li>
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="w-full bg-transparent group-hover:bg-red-50 transition-colors"
                >
                  <Link href="/services/express-entry">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group animate-fade-in-up delay-200">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="group-hover:text-blue-600 transition-colors">
                  Provincial Nominee Program
                </CardTitle>
                <CardDescription>
                  Get nominated by a Canadian province or territory based on their specific economic needs and your
                  skills.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Province-specific requirements
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Additional 600 CRS points
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Various streams available
                  </li>
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="w-full bg-transparent group-hover:bg-blue-50 transition-colors"
                >
                  <Link href="/services/pnp">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group animate-fade-in-up delay-300">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="group-hover:text-green-600 transition-colors">Family Sponsorship</CardTitle>
                <CardDescription>
                  Sponsor your spouse, children, parents, or grandparents to join you in Canada as permanent residents.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Sponsor eligible relatives
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    No points system
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Financial commitment required
                  </li>
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="w-full bg-transparent group-hover:bg-green-50 transition-colors"
                >
                  <Link href="/services/family-sponsorship">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose TrustedVisaHelp?</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to making your Canadian immigration journey smooth and successful
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group animate-fade-in-up delay-100">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-all duration-300 transform group-hover:scale-110">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-red-600 transition-colors">
                Licensed Consultants
              </h3>
              <p className="text-gray-600">
                Our team consists of RCIC licensed immigration consultants with extensive experience in Canadian
                immigration law.
              </p>
            </div>
            <div className="text-center group animate-fade-in-up delay-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-all duration-300 transform group-hover:scale-110">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                Fast Processing
              </h3>
              <p className="text-gray-600">
                We ensure your applications are submitted correctly and on time, minimizing delays and maximizing your
                chances of success.
              </p>
            </div>
            <div className="text-center group animate-fade-in-up delay-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-all duration-300 transform group-hover:scale-110">
                <FileText className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-green-600 transition-colors">
                End-to-End Support
              </h3>
              <p className="text-gray-600">
                From initial assessment to landing in Canada, we provide comprehensive support throughout your
                immigration journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg md:text-xl text-gray-600">Hear from our satisfied clients</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up delay-100">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "TrustedVisaHelp made my Express Entry application seamless. Their expertise and guidance helped me
                  get my PR in just 8 months!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    SJ
                  </div>
                  <div>
                    <p className="font-semibold">Sarah Johnson</p>
                    <p className="text-sm text-gray-500">Software Engineer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up delay-200">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Professional service and constant updates. They helped me navigate the PNP process successfully.
                  Highly recommended!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                    MC
                  </div>
                  <div>
                    <p className="font-semibold">Michael Chen</p>
                    <p className="text-sm text-gray-500">Healthcare Professional</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up delay-300">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Excellent support throughout the family sponsorship process. They made a complex process simple and
                  stress-free."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    PP
                  </div>
                  <div>
                    <p className="font-semibold">Priya Patel</p>
                    <p className="text-sm text-gray-500">Business Owner</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-red-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto text-center relative z-10 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Canadian Journey?</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Take the first step towards your Canadian dream. Get a free assessment today and discover your immigration
            options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Link href="/apply">
                Get Free Assessment
                <TrendingUp className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
