import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Clock, TrendingUp, AlertCircle } from "lucide-react"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"

export default function ProcessingTimesPage() {
  const processingTimes = [
    {
      category: "Express Entry",
      programs: [
        { name: "Federal Skilled Worker", time: "6 months", status: "standard" },
        { name: "Canadian Experience Class", time: "6 months", status: "standard" },
        { name: "Federal Skilled Trades", time: "6 months", status: "standard" },
      ],
    },
    {
      category: "Provincial Nominee Program",
      programs: [
        { name: "Ontario PNP", time: "2-3 months", status: "fast" },
        { name: "British Columbia PNP", time: "2-3 months", status: "fast" },
        { name: "Alberta PNP", time: "3-6 months", status: "standard" },
        { name: "Saskatchewan PNP", time: "3-6 months", status: "standard" },
      ],
    },
    {
      category: "Family Sponsorship",
      programs: [
        { name: "Spouse/Partner", time: "12 months", status: "standard" },
        { name: "Dependent Children", time: "12 months", status: "standard" },
        { name: "Parents/Grandparents", time: "20-24 months", status: "slow" },
      ],
    },
    {
      category: "Temporary Residence",
      programs: [
        { name: "Study Permit", time: "4-12 weeks", status: "fast" },
        { name: "Work Permit (outside Canada)", time: "2-12 weeks", status: "fast" },
        { name: "Work Permit (inside Canada)", time: "4-6 months", status: "standard" },
        { name: "Visitor Visa", time: "2-4 weeks", status: "fast" },
      ],
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "fast":
        return "bg-green-100 text-green-800"
      case "standard":
        return "bg-blue-100 text-blue-800"
      case "slow":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "fast":
        return <TrendingUp className="w-4 h-4 text-green-600" />
      case "standard":
        return <Clock className="w-4 h-4 text-blue-600" />
      case "slow":
        return <AlertCircle className="w-4 h-4 text-red-600" />
      default:
        return <Clock className="w-4 h-4 text-gray-600" />
    }
  }

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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Processing Times</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Current processing times for Canadian immigration applications (updated regularly)
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {processingTimes.map((category, index) => (
            <Card key={category.category} className={`animate-fade-in-up delay-${100 + index * 100}`}>
              <CardHeader>
                <CardTitle className="text-xl">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.programs.map((program, programIndex) => (
                    <div key={programIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(program.status)}
                        <span className="font-medium">{program.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{program.time}</span>
                        <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(program.status)}`}>
                          {program.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12 animate-fade-in-up delay-500">
          <CardHeader>
            <CardTitle>Important Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-blue-800">Processing Time Factors</h3>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Completeness of application</li>
                  <li>• Country of residence</li>
                  <li>• Type of application</li>
                  <li>• Current application volumes</li>
                  <li>• Additional document requests</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 text-yellow-800">Tips to Avoid Delays</h3>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Submit complete applications</li>
                  <li>• Provide all required documents</li>
                  <li>• Respond quickly to requests</li>
                  <li>• Use certified translations</li>
                  <li>• Follow instructions carefully</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 animate-fade-in-up delay-600">
          <CardContent className="p-6">
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 text-red-800 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Disclaimer
              </h3>
              <p className="text-sm text-red-700">
                Processing times are estimates and can change without notice. These times are based on current IRCC data
                and may vary depending on individual circumstances. For the most up-to-date information, please check
                the official IRCC website.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-12 bg-blue-600 text-white p-8 rounded-lg animate-fade-in-up delay-700">
          <h2 className="text-3xl font-bold mb-4">Want to Minimize Processing Delays?</h2>
          <p className="text-xl mb-6 opacity-90">
            Our experts ensure your application is complete and error-free to avoid unnecessary delays.
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
              <Link href="/contact">Contact Our Experts</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
