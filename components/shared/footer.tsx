import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">🍁</span>
              </div>
              <div>
                <span className="font-bold text-xl">TrustedVisaHelp</span>
                <p className="text-xs text-gray-400">Your Immigration Partner</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Licensed immigration consultants helping you achieve your Canadian dream. With over 15 years of experience
              and 50,000+ successful applications.
            </p>
            <div className="text-gray-400 space-y-1">
              <p className="flex items-center gap-2">
                <span>📧</span> info@trustedvisahelp.com
              </p>
              <p className="flex items-center gap-2">
                <span>📞</span> +1 (555) 123-VISA
              </p>
              <p className="flex items-center gap-2">
                <span>🏢</span> Toronto, ON, Canada
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/services/express-entry" className="hover:text-white transition-colors">
                  Express Entry
                </Link>
              </li>
              <li>
                <Link href="/services/pnp" className="hover:text-white transition-colors">
                  Provincial Nominee
                </Link>
              </li>
              <li>
                <Link href="/services/family-sponsorship" className="hover:text-white transition-colors">
                  Family Sponsorship
                </Link>
              </li>
              <li>
                <Link href="/services/study-permit" className="hover:text-white transition-colors">
                  Study Permit
                </Link>
              </li>
              <li>
                <Link href="/services/work-permit" className="hover:text-white transition-colors">
                  Work Permit
                </Link>
              </li>
              <li>
                <Link href="/services/visitor-visa" className="hover:text-white transition-colors">
                  Visitor Visa
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/immigration-calculator" className="hover:text-white transition-colors">
                  CRS Calculator
                </Link>
              </li>
              <li>
                <Link href="/eligibility-checker" className="hover:text-white transition-colors">
                  Eligibility Checker
                </Link>
              </li>
              <li>
                <Link href="/document-checklist" className="hover:text-white transition-colors">
                  Document Checklist
                </Link>
              </li>
              <li>
                <Link href="/processing-times" className="hover:text-white transition-colors">
                  Processing Times
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Immigration Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/our-team" className="hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="hover:text-white transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-center md:text-left">
            &copy; 2024 TrustedVisaHelp. All rights reserved. | RCIC Licensed
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/track" className="text-gray-400 hover:text-white transition-colors">
              Track Application
            </Link>
            <Link href="/apply" className="text-gray-400 hover:text-white transition-colors">
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
