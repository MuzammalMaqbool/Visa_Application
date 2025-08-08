"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false)

  const closeMenu = () => {
    setIsOpen(false)
    setMobileServicesOpen(false)
    setMobileResourcesOpen(false)
  }

  return (
    <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">🍁</span>
          </div>
          <div>
            <span className="font-bold text-xl md:text-2xl text-gray-900">TrustedVisaHelp</span>
            <p className="text-xs text-gray-600 hidden sm:block">Your Immigration Partner</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 hover:text-red-600 font-medium transition-colors">
              Services <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem asChild>
                <Link href="/services/express-entry" className="w-full">
                  Express Entry
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/pnp" className="w-full">
                  Provincial Nominee Program
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/family-sponsorship" className="w-full">
                  Family Sponsorship
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/study-permit" className="w-full">
                  Study Permit
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/work-permit" className="w-full">
                  Work Permit
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/visitor-visa" className="w-full">
                  Visitor Visa
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 hover:text-red-600 font-medium transition-colors">
              Resources <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem asChild>
                <Link href="/immigration-calculator" className="w-full">
                  CRS Calculator
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/eligibility-checker" className="w-full">
                  Eligibility Checker
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/document-checklist" className="w-full">
                  Document Checklist
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/processing-times" className="w-full">
                  Processing Times
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/faq" className="w-full">
                  FAQ
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/about" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
            About Us
          </Link>
          <Link href="/success-stories" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
            Success Stories
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild variant="outline" className="hidden md:flex bg-transparent hover:bg-gray-50">
            <Link href="/track">Track Application</Link>
          </Button>
          <Button
            asChild
            className="bg-red-600 hover:bg-red-700 shadow-lg hover:shadow-xl transition-all text-sm md:text-base px-3 md:px-4"
          >
            <Link href="/apply">Free Assessment</Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 sm:w-96">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">🍁</span>
                    </div>
                    <span className="font-bold text-lg">TrustedVisaHelp</span>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex flex-col space-y-4 mt-6 flex-1">
                  {/* Services Section */}
                  <div className="space-y-2">
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="flex items-center justify-between w-full text-left font-semibold text-gray-900 py-2"
                    >
                      Services
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileServicesOpen && (
                      <div className="pl-4 space-y-3 border-l-2 border-gray-100">
                        <Link
                          href="/services/express-entry"
                          className="block text-gray-600 hover:text-red-600 py-1 transition-colors"
                          onClick={closeMenu}
                        >
                          Express Entry
                        </Link>
                        <Link
                          href="/services/pnp"
                          className="block text-gray-600 hover:text-red-600 py-1 transition-colors"
                          onClick={closeMenu}
                        >
                          Provincial Nominee Program
                        </Link>
                        <Link
                          href="/services/family-sponsorship"
                          className="block text-gray-600 hover:text-red-600 py-1 transition-colors"
                          onClick={closeMenu}
                        >
                          Family Sponsorship
                        </Link>
                        <Link
                          href="/services/study-permit"
                          className="block text-gray-600 hover:text-red-600 py-1 transition-colors"
                          onClick={closeMenu}
                        >
                          Study Permit
                        </Link>
                        <Link
                          href="/services/work-permit"
                          className="block text-gray-600 hover:text-red-600 py-1 transition-colors"
                          onClick={closeMenu}
                        >
                          Work Permit
                        </Link>
                        <Link
                          href="/services/visitor-visa"
                          className="block text-gray-600 hover:text-red-600 py-1 transition-colors"
                          onClick={closeMenu}
                        >
                          Visitor Visa
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Resources Section */}
                  <div className="space-y-2">
                    <button
                      onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                      className="flex items-center justify-between w-full text-left font-semibold text-gray-900 py-2"
                    >
                      Resources
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${mobileResourcesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileResourcesOpen && (
                      <div className="pl-4 space-y-3 border-l-2 border-gray-100">
                        <Link
                          href="/immigration-calculator"
                          className="block text-gray-600 hover:text-red-600 py-1 transition-colors"
                          onClick={closeMenu}
                        >
                          CRS Calculator
                        </Link>
                        <Link
                          href="/eligibility-checker"
                          className="block text-gray-600 hover:text-red-600 py-1 transition-colors"
                          onClick={closeMenu}
                        >
                          Eligibility Checker
                        </Link>
                        <Link
                          href="/document-checklist"
                          className="block text-gray-600 hover:text-red-600 py-1 transition-colors"
                          onClick={closeMenu}
                        >
                          Document Checklist
                        </Link>
                        <Link
                          href="/processing-times"
                          className="block text-gray-600 hover:text-red-600 py-1 transition-colors"
                          onClick={closeMenu}
                        >
                          Processing Times
                        </Link>
                        <Link
                          href="/faq"
                          className="block text-gray-600 hover:text-red-600 py-1 transition-colors"
                          onClick={closeMenu}
                        >
                          FAQ
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Direct Links */}
                  <Link
                    href="/about"
                    className="text-gray-700 hover:text-red-600 font-medium py-2 transition-colors"
                    onClick={closeMenu}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/success-stories"
                    className="text-gray-700 hover:text-red-600 font-medium py-2 transition-colors"
                    onClick={closeMenu}
                  >
                    Success Stories
                  </Link>
                  <Link
                    href="/blog"
                    className="text-gray-700 hover:text-red-600 font-medium py-2 transition-colors"
                    onClick={closeMenu}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/contact"
                    className="text-gray-700 hover:text-red-600 font-medium py-2 transition-colors"
                    onClick={closeMenu}
                  >
                    Contact
                  </Link>
                  <Link
                    href="/track"
                    className="text-gray-700 hover:text-red-600 font-medium py-2 transition-colors"
                    onClick={closeMenu}
                  >
                    Track Application
                  </Link>
                </div>

                {/* Bottom CTA */}
                <div className="border-t pt-4 mt-4">
                  <Button asChild className="w-full bg-red-600 hover:bg-red-700" onClick={closeMenu}>
                    <Link href="/apply">Get Free Assessment</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
