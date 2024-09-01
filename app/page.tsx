"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "./components/ui/button"
import { ChevronsDown } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/placeholder.svg" alt="Logo" width={32} height={32} />
            <span className="text-2xl font-bold">PathSkill</span>
          </Link>
          <div className="space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/">Home</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/demo">Demo</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/paths">Paths</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/resources">Resources</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/community">Community</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto p-6">
        {/* Hero Section */}
        <section className="text-center py-20">
          <h1 className="text-6xl font-bold mb-6">
            <span className="text-blue-400">Path</span>Skill
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            PathSkill is a dynamic learning platform designed to guide you through a personalized journey of mastering any skill. With curated milestones and tailored resources, we empower you to achieve your goals, whether you&apos;re picking up a new hobby or advancing your professional expertise.
          </p>
          <div className="flex justify-center space-x-4 mb-12">
            <Button size="lg" className="bg-blue-400 text-gray-900 hover:bg-blue-500">
              Explore Skills
            </Button>
            <Button size="lg" variant="outline">
              Create Your Path
            </Button>
          </div>
          <h2 className="text-2xl font-semibold mb-4">
            Join Our <span className="text-blue-400">Skill-Building Community</span>
          </h2>
          <ChevronsDown className="w-8 h-8 mx-auto text-blue-400 animate-bounce" />
        </section>

        {/* Join Learners Section */}
        <section className="text-center py-20">
          <h2 className="text-4xl font-bold mb-4">
            Join <span className="text-blue-400">100,000+</span> skill seekers
          </h2>
          <h2 className="text-4xl font-bold mb-12">
            mastering their craft!
          </h2>
        </section>

        {/* Start Your Journey Section */}
        <section className="py-20 flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold mb-2">
              <span className="text-blue-400">Ready to begin</span>
            </h2>
            <h2 className="text-4xl font-bold mb-2">
              your journey?
            </h2>
            <h2 className="text-5xl font-bold mb-6">
              Start Your Path Now
            </h2>
            <Button size="lg" className="bg-blue-400 text-gray-900 hover:bg-blue-500">
              Create Your Path
            </Button>
          </div>
          <div className="relative w-1/2 h-80">
            <Image
              src="/placeholder.svg"
              alt="Skill journey illustration"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p>&copy; 2023 PathSkill. All rights reserved.</p>
          <div className="space-x-4">
            <Link href="#" className="hover:text-blue-400">Privacy Policy</Link>
            <Link href="#" className="hover:text-blue-400">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
