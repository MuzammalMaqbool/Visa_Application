import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Users, Globe, Award, GraduationCap, Briefcase, Plane } from "lucide-react"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"

export default function ServicesPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Immigration Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive immigration solutions tailored to your unique situation. Our licensed consultants provide
            expert guidance for all Canadian immigration programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="w-12 h-12 text-red-600 mb-4" />
              <CardTitle>Express Entry</CardTitle>
              <CardDescription>
                Fast-track your immigration through the Federal Skilled Worker, Canadian Experience Class, or Federal
                Skilled Trades programs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 mb-4 space-y-1">
                <li>• CRS Score Optimization</li>
                <li>• Document Preparation</li>
                <li>• Application Submission</li>
                <li>• Post-ITA Support</li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/services/express-entry">Get Started</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Globe className="w-12 h-12 text-blue-600 mb-4" />
              <CardTitle>Provincial Nominee Program</CardTitle>
              <CardDescription>
                Get nominated by a Canadian province based on their specific economic needs and your professional
                skills.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 mb-4 space-y-1">
                <li>• Province Selection Strategy</li>
                <li>• Eligibility Assessment</li>
                <li>• Application Preparation</li>
                <li>• Nomination Support</li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/services/pnp">Get Started</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Award className="w-12 h-12 text-green-600 mb-4" />
              <CardTitle>Family Sponsorship</CardTitle>
              <CardDescription>
                Reunite with your loved ones by sponsoring your spouse, children, parents, or grandparents to Canada.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 mb-4 space-y-1">
                <li>• Sponsorship Eligibility</li>
                <li>• Financial Assessment</li>
                <li>• Application Processing</li>
                <li>• Interview Preparation</li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/services/family-sponsorship">Get Started</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <GraduationCap className="w-12 h-12 text-purple-600 mb-4" />
              <CardTitle>Study Permit</CardTitle>
              <CardDescription>
                Pursue your education in Canada with our comprehensive study permit application support.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 mb-4 space-y-1">
                <li>• School Selection Guidance</li>
                <li>• Letter of Acceptance</li>
                <li>• Financial Documentation</li>
                <li>• Permit Application</li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/services/study-permit">Get Started</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Briefcase className="w-12 h-12 text-orange-600 mb-4" />
              <CardTitle>Work Permit</CardTitle>
              <CardDescription>
                Secure your work permit to gain valuable Canadian work experience and advance your immigration goals.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 mb-4 space-y-1">
                <li>• LMIA Support</li>
                <li>• Work Permit Categories</li>
                <li>• Application Processing</li>
                <li>• Renewal Assistance</li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/services/work-permit">Get Started</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Plane className="w-12 h-12 text-indigo-600 mb-4" />
              <CardTitle>Visitor Visa</CardTitle>
              <CardDescription>
                Visit Canada for tourism, business, or to visit family and friends with our visitor visa services.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 mb-4 space-y-1">
                <li>• Purpose Documentation</li>
                <li>• Financial Proof</li>
                <li>• Ties to Home Country</li>
                <li>• Application Submission</li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/services/visitor-visa">Get Started</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
