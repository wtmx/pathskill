import Image from 'next/image'
import Link from 'next/link'

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/placeholder.svg" alt="Logo" width={32} height={32} />
            <span className="text-2xl font-bold">PathSkill</span>
          </Link>
          <div className="space-x-4">
            <Link href="/" className="text-white hover:text-blue-400">Home</Link>
            <Link href="/skill-input" className="text-white hover:text-blue-400">Skills</Link>
            <Link href="/courses" className="text-white hover:text-blue-400">Courses</Link>
            <Link href="#" className="text-white hover:text-blue-400">Resources</Link>
            <Link href="#" className="text-white hover:text-blue-400">Community</Link>
            <button className="border border-white text-white px-2 py-1 rounded hover:bg-white hover:text-gray-900">Login</button>
            <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">Get Started</button>
          </div>
        </div>
      </nav>
      <main className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Courses</h1>
        {/* Add your courses content here */}
      </main>
    </div>
  )
}