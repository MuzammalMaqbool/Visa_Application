import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Shield, Eye, Lock, FileText } from "lucide-react"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"

export default function PrivacyPolicyPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600">Last updated: January 2024</p>
        </div>

        <Card className="mb-8 animate-fade-in-up delay-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-red-600" />
              Our Commitment to Privacy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              TrustedVisaHelp is committed to protecting your privacy and personal information. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you use our services.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card className="animate-fade-in-up delay-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-6 h-6 text-blue-600" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Personal Information</h3>
                <ul className="text-gray-600 space-y-1 ml-4">
                  <li>• Name, address, phone number, and email address</li>
                  <li>• Date of birth and nationality</li>
                  <li>• Passport and travel document information</li>
                  <li>• Employment and education history</li>
                  <li>• Financial information for immigration purposes</li>
                  <li>• Family information for sponsorship applications</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Technical Information</h3>
                <ul className="text-gray-600 space-y-1 ml-4">
                  <li>• IP address and browser information</li>
                  <li>• Website usage data and analytics</li>
                  <li>• Cookies and similar technologies</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in-up delay-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-6 h-6 text-green-600" />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-gray-600 space-y-2">
                <li>• To provide immigration consultation and application services</li>
                <li>• To communicate with you about your case and our services</li>
                <li>• To prepare and submit immigration applications on your behalf</li>
                <li>• To comply with legal and regulatory requirements</li>
                <li>• To improve our services and website functionality</li>
                <li>• To send you relevant updates about immigration policies (with consent)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="animate-fade-in-up delay-400">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-6 h-6 text-purple-600" />
                Information Sharing and Disclosure
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">We may share your information with:</h3>
                <ul className="text-gray-600 space-y-1 ml-4">
                  <li>• Immigration, Refugees and Citizenship Canada (IRCC)</li>
                  <li>• Provincial immigration authorities</li>
                  <li>• Third-party service providers (with your consent)</li>
                  <li>• Legal authorities when required by law</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-yellow-800 text-sm">
                  <strong>Note:</strong> We never sell your personal information to third parties for marketing
                  purposes.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in-up delay-500">
            <CardHeader>
              <CardTitle>Data Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal
                information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <ul className="text-gray-600 space-y-1 ml-4">
                <li>• Encrypted data transmission and storage</li>
                <li>• Secure servers and databases</li>
                <li>• Regular security audits and updates</li>
                <li>• Limited access to authorized personnel only</li>
                <li>• Secure document handling and disposal</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="animate-fade-in-up delay-600">
            <CardHeader>
              <CardTitle>Your Rights</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">You have the right to:</p>
              <ul className="text-gray-600 space-y-1 ml-4">
                <li>• Access your personal information we hold</li>
                <li>• Request correction of inaccurate information</li>
                <li>• Request deletion of your information (subject to legal requirements)</li>
                <li>• Withdraw consent for marketing communications</li>
                <li>• File a complaint with privacy authorities</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="animate-fade-in-up delay-700">
            <CardHeader>
              <CardTitle>Retention Period</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                We retain your personal information for as long as necessary to provide our services and comply with
                legal obligations. Immigration files are typically retained for 7 years after case completion, as
                required by professional regulations.
              </p>
            </CardContent>
          </Card>

          <Card className="animate-fade-in-up delay-800">
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>TrustedVisaHelp Privacy Officer</strong>
                  <br />
                  Email: privacy@trustedvisahelp.com
                  <br />
                  Phone: +1 (555) 123-VISA
                  <br />
                  Address: 123 Immigration Street, Toronto, ON M5V 3A8
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12 bg-red-600 text-white p-8 rounded-lg animate-fade-in-up delay-900">
          <h2 className="text-3xl font-bold mb-4">Questions About Our Privacy Policy?</h2>
          <p className="text-xl mb-6 opacity-90">Our team is here to address any privacy concerns you may have.</p>
          <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  )
}
