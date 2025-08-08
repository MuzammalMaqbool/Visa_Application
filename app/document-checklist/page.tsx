import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, FileText, Download } from "lucide-react"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"

export default function DocumentChecklistPage() {
  const documentCategories = [
    {
      title: "Express Entry Documents",
      documents: [
        "Language test results (IELTS/CELPIP/TEF)",
        "Educational Credential Assessment (ECA)",
        "Passport and travel documents",
        "Work experience letters",
        "Police clearance certificates",
        "Medical examination results",
        "Proof of funds",
        "Birth certificate",
        "Marriage certificate (if applicable)",
      ],
    },
    {
      title: "Study Permit Documents",
      documents: [
        "Letter of acceptance from DLI",
        "Proof of financial support",
        "Statement of purpose",
        "Academic transcripts",
        "Language proficiency test results",
        "Passport",
        "Photographs",
        "Medical examination (if required)",
        "Police clearance certificate",
      ],
    },
    {
      title: "Work Permit Documents",
      documents: [
        "Job offer letter",
        "LMIA (if required)",
        "Employment contract",
        "Proof of qualifications",
        "Language test results",
        "Passport",
        "Photographs",
        "Medical examination (if required)",
        "Police clearance certificate",
      ],
    },
    {
      title: "Family Sponsorship Documents",
      documents: [
        "Sponsorship application forms",
        "Relationship proof documents",
        "Financial documents",
        "Identity documents",
        "Police clearance certificates",
        "Medical examinations",
        "Photographs",
        "Birth certificates",
        "Marriage certificates",
      ],
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Document Checklist</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete document checklists for different Canadian immigration programs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {documentCategories.map((category, index) => (
            <Card key={category.title} className={`animate-fade-in-up delay-${100 + index * 100}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-6 h-6 text-red-600" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {category.documents.map((document, docIndex) => (
                    <li key={docIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{document}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full mt-4 bg-transparent">
                  <Link href="/contact">
                    <Download className="w-4 h-4 mr-2" />
                    Get Detailed Checklist
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12 animate-fade-in-up delay-500">
          <CardHeader>
            <CardTitle>Important Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-3 text-yellow-800">Document Requirements</h3>
              <ul className="space-y-2 text-sm text-yellow-700">
                <li>• All documents must be in English or French, or accompanied by certified translations</li>
                <li>• Documents must be certified true copies of originals</li>
                <li>• Some documents have expiry dates - ensure they're current</li>
                <li>• Requirements may vary based on your specific situation</li>
                <li>• Always check the latest requirements on the official IRCC website</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-12 bg-red-600 text-white p-8 rounded-lg animate-fade-in-up delay-600">
          <h2 className="text-3xl font-bold mb-4">Need Help with Document Preparation?</h2>
          <p className="text-xl mb-6 opacity-90">
            Our experts can help you prepare and review all required documents for your application.
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
              <Link href="/contact">Contact Our Experts</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
