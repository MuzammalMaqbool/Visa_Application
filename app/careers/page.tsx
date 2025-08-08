import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Briefcase, Users, TrendingUp, Heart } from "lucide-react"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"

export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior Immigration Consultant",
      department: "Immigration Services",
      location: "Toronto, ON",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead complex immigration cases and mentor junior consultants.",
    },
    {
      title: "Immigration Consultant",
      department: "Immigration Services",
      location: "Vancouver, BC",
      type: "Full-time",
      experience: "2+ years",
      description: "Handle various immigration applications and client consultations.",
    },
    {
      title: "Client Relations Coordinator",
      department: "Client Services",
      location: "Remote",
      type: "Full-time",
      experience: "1+ years",
      description: "Manage client communications and application tracking.",
    },
  ]

  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision coverage",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      title: "Professional Growth",
      description: "Continuous learning opportunities and career advancement",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Team Culture",
      description: "Collaborative and inclusive work environment",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-purple-600" />,
      title: "Work-Life Balance",
      description: "Flexible schedules and remote work options",
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Join Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build a rewarding career helping people achieve their Canadian immigration dreams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={benefit.title} className={`text-center animate-fade-in-up delay-${100 + index * 100}`}>
              <CardContent className="p-6">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 animate-fade-in-up delay-500">Open Positions</h2>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <Card key={position.title} className={`animate-fade-in-up delay-${600 + index * 100}`}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl">{position.title}</CardTitle>
                      <p className="text-gray-600">{position.department}</p>
                    </div>
                    <div className="mt-2 md:mt-0 text-sm text-gray-500">
                      <p>
                        {position.location} • {position.type}
                      </p>
                      <p>{position.experience} experience</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{position.description}</p>
                  <Button asChild>
                    <Link href="/contact">Apply Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="mb-12 animate-fade-in-up delay-900">
          <CardHeader>
            <CardTitle className="text-center">Why Work With Us?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-4">
                  We're passionate about helping people achieve their Canadian immigration goals. As part of our team,
                  you'll make a real difference in people's lives while building a rewarding career.
                </p>
                <h3 className="text-xl font-semibold mb-4">Growth Opportunities</h3>
                <p className="text-gray-600">
                  We invest in our team's professional development with ongoing training, certification support, and
                  clear career advancement paths.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Company Culture</h3>
                <p className="text-gray-600 mb-4">
                  Our diverse, inclusive team values collaboration, innovation, and excellence. We celebrate successes
                  together and support each other through challenges.
                </p>
                <h3 className="text-xl font-semibold mb-4">Impact</h3>
                <p className="text-gray-600">
                  Every day, you'll help families reunite, students pursue their dreams, and skilled workers build new
                  lives in Canada. Your work truly matters.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center bg-blue-600 text-white p-8 rounded-lg animate-fade-in-up delay-1000">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Team?</h2>
          <p className="text-xl mb-6 opacity-90">
            Don't see a position that fits? We're always looking for talented individuals to join our growing team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
              <Link href="/contact">Send Your Resume</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/contact">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
