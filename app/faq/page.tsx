"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Search, ChevronDown, ChevronUp } from "lucide-react"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqs = [
    {
      category: "Express Entry",
      questions: [
        {
          question: "What is Express Entry?",
          answer:
            "Express Entry is Canada's application management system for three federal economic immigration programs: Federal Skilled Worker Program, Canadian Experience Class, and Federal Skilled Trades Program. It uses a points-based system called the Comprehensive Ranking System (CRS) to rank candidates.",
        },
        {
          question: "What is the minimum CRS score required?",
          answer:
            "There is no minimum CRS score requirement. The score needed varies with each draw. Recent draws have had cut-off scores ranging from 435 to 500+ points. Higher scores increase your chances of receiving an Invitation to Apply (ITA).",
        },
        {
          question: "How long does Express Entry processing take?",
          answer:
            "Once you receive an ITA, you have 60 days to submit your complete application. After submission, the standard processing time is 6 months or less for most applications.",
        },
        {
          question: "Can I update my Express Entry profile after submission?",
          answer:
            "Yes, you can update your profile at any time before receiving an ITA. However, you cannot make changes after receiving an ITA. If your circumstances change significantly, you may need to decline the ITA and create a new profile.",
        },
      ],
    },
    {
      category: "Provincial Nominee Program",
      questions: [
        {
          question: "What is the Provincial Nominee Program (PNP)?",
          answer:
            "PNP allows Canadian provinces and territories to nominate individuals who wish to immigrate to Canada and settle in a particular province. Each province has its own streams and criteria based on local economic needs.",
        },
        {
          question: "How many points does a provincial nomination give?",
          answer:
            "A provincial nomination gives you 600 additional CRS points in Express Entry, which virtually guarantees you'll receive an ITA in the next draw.",
        },
        {
          question: "Can I apply to multiple provinces?",
          answer:
            "Yes, you can apply to multiple provincial programs simultaneously, as long as you meet their individual requirements. However, you can only accept one nomination.",
        },
        {
          question: "Do I need a job offer for PNP?",
          answer:
            "Not all PNP streams require a job offer. Some streams are for skilled workers without job offers, while others specifically require employment offers from employers in that province.",
        },
      ],
    },
    {
      category: "Family Sponsorship",
      questions: [
        {
          question: "Who can I sponsor as a family member?",
          answer:
            "You can sponsor your spouse/partner, dependent children, parents, grandparents, and in some cases, other eligible relatives like siblings, nieces, nephews, or grandchildren if you meet specific conditions.",
        },
        {
          question: "What are the income requirements for sponsorship?",
          answer:
            "Income requirements vary by family size and who you're sponsoring. For spouses and dependent children, there's no minimum income requirement. For parents and grandparents, you must meet the Minimum Necessary Income (MNI) for 3 consecutive years.",
        },
        {
          question: "How long does family sponsorship take?",
          answer:
            "Processing times vary: Spouse/partner sponsorship typically takes 12 months, while parent/grandparent sponsorship can take 20-24 months. Processing times are updated regularly on the IRCC website.",
        },
        {
          question: "Can I sponsor my parents if I'm not a Canadian citizen?",
          answer:
            "Yes, permanent residents can sponsor their parents and grandparents, provided they meet all other sponsorship requirements including income thresholds and signing an undertaking.",
        },
      ],
    },
    {
      category: "Study Permits",
      questions: [
        {
          question: "Do I need a study permit for short courses?",
          answer:
            "You need a study permit if your program is longer than 6 months. For programs 6 months or shorter, you typically only need a visitor visa or eTA, depending on your country of citizenship.",
        },
        {
          question: "Can I work while studying in Canada?",
          answer:
            "Yes, with a valid study permit, you can work on-campus without a work permit and off-campus for up to 20 hours per week during studies and full-time during scheduled breaks.",
        },
        {
          question: "What is a Letter of Acceptance?",
          answer:
            "A Letter of Acceptance is an official document from a Designated Learning Institution (DLI) confirming your acceptance into a program. You need this to apply for a study permit.",
        },
        {
          question: "Can my family come with me on a study permit?",
          answer:
            "Your spouse/partner may be eligible for an open work permit, and your dependent children can apply for study permits. They would need to apply for their respective permits.",
        },
      ],
    },
    {
      category: "Work Permits",
      questions: [
        {
          question: "Do I need a Labour Market Impact Assessment (LMIA)?",
          answer:
            "Most work permits require an LMIA, but there are many LMIA-exempt categories including NAFTA workers, intra-company transfers, international agreements, and certain provincial nominee streams.",
        },
        {
          question: "Can I change employers with a work permit?",
          answer:
            "It depends on your work permit type. Employer-specific work permits tie you to one employer, while open work permits allow you to work for any employer. You may need to apply for a new permit to change employers.",
        },
        {
          question: "How long can I work in Canada with a work permit?",
          answer:
            "Work permit duration varies based on the type and your situation. They can range from a few months to several years. You can apply to extend your work permit before it expires.",
        },
        {
          question: "Can work permit holders apply for permanent residence?",
          answer:
            "Yes, work permit holders may be eligible for various immigration programs, especially if they gain Canadian work experience. Programs like Canadian Experience Class are designed for temporary workers.",
        },
      ],
    },
  ]

  const filteredFAQs = faqs
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((category) => category.questions.length > 0)

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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about Canadian immigration
          </p>
        </div>

        {/* Search */}
        <Card className="mb-8 animate-fade-in-up delay-100">
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {filteredFAQs.map((category, categoryIndex) => (
            <Card key={category.category} className={`animate-fade-in-up delay-${200 + categoryIndex * 100}`}>
              <CardHeader>
                <CardTitle className="text-2xl text-red-600">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const itemIndex = categoryIndex * 100 + faqIndex
                    const isOpen = openItems.includes(itemIndex)

                    return (
                      <div key={faqIndex} className="border border-gray-200 rounded-lg">
                        <button
                          onClick={() => toggleItem(itemIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-medium text-gray-900">{faq.question}</span>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-gray-500" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-4">
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredFAQs.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <p className="text-gray-500 text-lg">No FAQs found matching your search.</p>
              <Button onClick={() => setSearchTerm("")} variant="outline" className="mt-4">
                Clear Search
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Contact CTA */}
        <div className="mt-12 text-center bg-red-600 text-white p-8 rounded-lg animate-fade-in-up delay-500">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl mb-6 opacity-90">Our immigration experts are here to help with personalized answers.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
              <Link href="/contact">Contact Our Experts</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
            >
              <Link href="/apply">Get Free Assessment</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
