import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, FileText, AlertCircle, CheckCircle, XCircle } from "lucide-react"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6">
          <Button asChild variant="ghost">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>

        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-600">Last updated: January 2024</p>
        </div>

        <Card className="mb-8 animate-fade-in-up delay-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-6 h-6 text-red-600" />
              Agreement to Terms
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              By accessing and using TrustedVisaHelp's services, you agree to be bound by these Terms of Service and all
              applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from
              using our services.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card className="animate-fade-in-up delay-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                Our Services
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Immigration Consultation Services</h3>
                <ul className="text-gray-600 space-y-1 ml-4">
                  <li>• Assessment of immigration eligibility</li>
                  <li>• Preparation and submission of immigration applications</li>
                  <li>• Representation before immigration authorities</li>
                  <li>• Ongoing case management and updates</li>
                  <li>• Settlement assistance and guidance</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>Professional Standards:</strong> All services are provided by RCIC licensed immigration
                  consultants in accordance with professional regulations and ethical standards.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in-up delay-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-yellow-600" />
                Client Responsibilities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-gray-600 space-y-2">
                <li>• Provide accurate and complete information</li>
                <li>• Submit required documents in a timely manner</li>
                <li>• Pay fees as agreed upon in the retainer agreement</li>
                <li>• Respond promptly to requests for additional information</li>
                <li>• Inform us of any changes in circumstances</li>
                <li>• Comply with all immigration laws and regulations</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="animate-fade-in-up delay-400">
            <CardHeader>
              <CardTitle>Fees and Payment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Service Fees</h3>
                <ul className="text-gray-600 space-y-1 ml-4">
                  <li>• Professional fees are outlined in individual retainer agreements</li>
                  <li>• Government fees are separate and payable directly to authorities</li>
                  <li>• Third-party costs (translations, medical exams) are client responsibility</li>
                  <li>• Payment terms are specified in the retainer agreement</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Refund Policy</h3>
                <p className="text-gray-600">
                  Refunds are subject to the terms outlined in individual retainer agreements. Generally, fees for work
                  completed are non-refundable, but unused portions may be refunded at our discretion.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in-up delay-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <XCircle className="w-6 h-6 text-red-600" />
                Limitations and Disclaimers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">No Guarantee of Results</h3>
                <p className="text-gray-600">
                  While we provide professional services to the best of our ability, we cannot guarantee the approval of
                  any immigration application. Immigration decisions are made solely by government authorities.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Limitation of Liability</h3>
                <p className="text-gray-600">
                  Our liability is limited to the fees paid for our services. We are not responsible for indirect,
                  consequential, or punitive damages arising from the use of our services.
                </p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-red-800 text-sm">
                  <strong>Important:</strong> Immigration laws and policies can change without notice. We are not
                  responsible for changes that occur after application submission.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in-up delay-600">
            <CardHeader>
              <CardTitle>Confidentiality</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                We maintain strict confidentiality of all client information in accordance with professional regulations
                and privacy laws. Information is only shared with authorized parties as necessary for your immigration
                case.
              </p>
              <ul className="text-gray-600 space-y-1 ml-4">
                <li>• Client-consultant privilege applies to all communications</li>
                <li>• Information is stored securely and accessed only by authorized personnel</li>
                <li>• We comply with all applicable privacy legislation</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="animate-fade-in-up delay-700">
            <CardHeader>
              <CardTitle>Termination of Services</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Client Termination</h3>
                  <p className="text-gray-600">
                    Clients may terminate our services at any time with written notice. Fees for completed work are
                    non-refundable.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Our Termination Rights</h3>
                  <p className="text-gray-600">
                    We may terminate services if clients fail to pay fees, provide false information, or engage in
                    conduct that violates professional standards.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in-up delay-800">
            <CardHeader>
              <CardTitle>Governing Law</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                These terms are governed by the laws of the Province of Ontario and the federal laws of Canada. Any
                disputes will be resolved through the courts of Ontario or through binding arbitration as specified in
                individual retainer agreements.
              </p>
            </CardContent>
          </Card>

          <Card className="animate-fade-in-up delay-900">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">For questions about these Terms of Service, please contact us:</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>TrustedVisaHelp</strong>
                  <br />
                  Email: legal@trustedvisahelp.com
                  <br />
                  Phone: +1 (555) 123-VISA
                  <br />
                  Address: 123 Immigration Street, Toronto, ON M5V 3A8
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12 bg-blue-600 text-white p-8 rounded-lg animate-fade-in-up delay-1000">
          <h2 className="text-3xl font-bold mb-4">Questions About Our Terms?</h2>
          <p className="text-xl mb-6 opacity-90">Our team is available to clarify any terms or conditions.</p>
          <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  )
}
