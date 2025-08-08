import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, User, ArrowRight } from "lucide-react"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Express Entry Draw Results: Latest Updates for 2024",
      excerpt:
        "Get the latest information on Express Entry draws, CRS score requirements, and tips to improve your ranking.",
      category: "Express Entry",
      author: "Immigration Expert",
      date: "2024-01-15",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Provincial Nominee Program: Which Province is Right for You?",
      excerpt:
        "Compare different PNP streams and find the best province for your immigration goals and professional background.",
      category: "PNP",
      author: "Sarah Johnson",
      date: "2024-01-12",
      readTime: "8 min read",
    },
    {
      id: 3,
      title: "Study Permit Application: Complete Guide for 2024",
      excerpt:
        "Everything you need to know about applying for a Canadian study permit, including requirements and processing times.",
      category: "Study Permit",
      author: "Education Consultant",
      date: "2024-01-10",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Family Sponsorship: Bringing Your Loved Ones to Canada",
      excerpt:
        "Learn about the family sponsorship process, eligibility requirements, and how to sponsor your family members.",
      category: "Family Sponsorship",
      author: "Family Immigration Specialist",
      date: "2024-01-08",
      readTime: "7 min read",
    },
    {
      id: 5,
      title: "Work Permit Categories: Finding the Right Path",
      excerpt: "Explore different work permit categories and find the best option for your situation and career goals.",
      category: "Work Permit",
      author: "Work Visa Expert",
      date: "2024-01-05",
      readTime: "5 min read",
    },
    {
      id: 6,
      title: "Canadian Immigration Myths: Separating Fact from Fiction",
      excerpt: "Debunking common misconceptions about Canadian immigration and providing accurate information.",
      category: "General",
      author: "Immigration Consultant",
      date: "2024-01-03",
      readTime: "4 min read",
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

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Immigration Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest Canadian immigration news, tips, and insights from our team of licensed
            immigration consultants.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">{post.category}</Badge>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/">View All Posts</Link>
          </Button>
        </div>

        <div className="mt-16 bg-red-600 text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Need Personalized Advice?</h2>
          <p className="text-xl mb-6 opacity-90">
            Our immigration experts are here to help with your specific situation.
          </p>
          <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
            <Link href="/contact">Contact Our Experts</Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  )
}
