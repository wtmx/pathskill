"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Separator } from "../components/ui/separator"
import { ScrollArea } from "../components/ui/scroll-area"
import { CheckCircle2, ChevronDown, Clock, FileText, Play, Users } from "lucide-react"

interface Milestone {
  id: number;
  text: string;
  completed: boolean;
}

interface CourseSection {
  id: number;
  title: string;
  lessons: string[];
}

export default function SkillInputPage() {
  const [skill, setSkill] = useState<string>("")
  const [error, setError] = useState<string>("")
  const [showCourse, setShowCourse] = useState(false)
  const [milestones, setMilestones] = useState<Milestone[]>([])
  const [courseSections, setCourseSections] = useState<CourseSection[]>([])
  const [courseTitle, setCourseTitle] = useState<string>("")

  const placeholderSuggestions = [
    "Hold a 10-second handstand",
    "Cook a classic French omelette",
    "Start a successful podcast",
    "Play the \u2018Stairway to Heaven\u2019 guitar solo",
    "Speak basic Spanish"
  ]

  const courseContent = {
    "Hold a 10-second handstand": {
      title: "Handstand Introductory Course",
      overview: "In this course, you will build a strong foundation in handstand techniques, progressing from basic drills to mastering the skill of holding a handstand for 10 seconds. You\u2019ll practice strength, balance, and coordination through structured exercises and real-world applications.",
      duration: "10 Hours",
      lessons: 45,
      projects: 3,
      sections: [
        { title: "Introduction", lessons: ["Course Overview", "Setting Up Your Space"] },
        { title: "Basic Concepts", lessons: ["Fundamentals of Handstands", "Key Terminology"] },
        { title: "Strength & Conditioning", lessons: ["Core and Shoulder Strengthening", "Wrist Mobility and Warm-Ups"] },
        { title: "Practical Progressions", lessons: ["Wall Handstands", "Freestanding Practice", "Balance Drills"] },
        { title: "Advanced Techniques", lessons: ["Handstand Refinement", "Overcoming Fear of Falling"] },
        { title: "Final Project", lessons: ["10-Second Hold Mastery", "Video Submission"] }
      ],
      skills: [
        "Develop handstand-specific strength and flexibility",
        "Perfect body alignment and balance",
        "Safely transition to freestanding handstands",
        "Overcome mental barriers and fear of falling",
        "Achieve a 10-second freestanding handstand"
      ]
    },
    "Cook a classic French omelette": {
      title: "Mastering the French Omelette",
      overview: "Learn the art of creating the perfect French omelette. This course covers everything from ingredient selection to plating techniques, ensuring you can consistently produce a delicate, creamy omelette with a professional touch.",
      duration: "5 Hours",
      lessons: 30,
      projects: 2,
      sections: [
        { title: "Introduction", lessons: ["Course Overview", "Essential Equipment"] },
        { title: "Ingredients", lessons: ["Egg Selection", "Butter Quality", "Optional Fillings"] },
        { title: "Techniques", lessons: ["Whisking Methods", "Pan Control", "Folding Techniques"] },
        { title: "Cooking Process", lessons: ["Temperature Control", "Timing Mastery", "Texture Perfection"] },
        { title: "Presentation", lessons: ["Plating Techniques", "Garnishing"] },
        { title: "Final Project", lessons: ["Cook a Perfect Omelette", "Presentation and Evaluation"] }
      ],
      skills: [
        "Select and prepare high-quality ingredients",
        "Master egg whisking and cooking techniques",
        "Control pan temperature for ideal texture",
        "Perfect the omelette folding technique",
        "Present a restaurant-quality French omelette"
      ]
    },
    "Start a successful podcast": {
      title: "Launch Your Own Successful Podcast",
      overview: "This comprehensive course guides you through every step of creating, launching, and growing a successful podcast. From concept development to marketing strategies, you\u2019ll learn how to produce engaging content and build a loyal audience.",
      duration: "15 Hours",
      lessons: 60,
      projects: 4,
      sections: [
        { title: "Introduction", lessons: ["Course Overview", "Podcast Landscape"] },
        { title: "Planning", lessons: ["Concept Development", "Target Audience Analysis"] },
        { title: "Production", lessons: ["Equipment Setup", "Recording Techniques", "Editing Basics"] },
        { title: "Content Creation", lessons: ["Scripting", "Interview Skills", "Storytelling"] },
        { title: "Launch Strategy", lessons: ["Hosting Platforms", "RSS Feeds", "Submission to Directories"] },
        { title: "Growth & Monetization", lessons: ["Marketing Strategies", "Audience Engagement", "Sponsorship Opportunities"] },
        { title: "Final Project", lessons: ["Produce Pilot Episode", "Launch Strategy Presentation"] }
      ],
      skills: [
        "Develop a unique podcast concept",
        "Set up professional recording equipment",
        "Master audio editing and production",
        "Create engaging content and conduct interviews",
        "Implement effective marketing and growth strategies"
      ]
    },
    "Play the \u2018Stairway to Heaven\u2019 guitar solo": {
      title: "Guitar Solo Mastery: \u2018Stairway to Heaven\u2019",
      overview: "Dive deep into one of rock\u2019s most iconic guitar solos. This course breaks down the \u2018Stairway to Heaven\u2019 solo into manageable sections, teaching you the techniques, theory, and nuances behind Jimmy Page\u2019s legendary performance.",
      duration: "12 Hours",
      lessons: 50,
      projects: 3,
      sections: [
        { title: "Introduction", lessons: ["Course Overview", "Guitar Setup and Tone"] },
        { title: "Theory Basics", lessons: ["Key and Scale Analysis", "Chord Progression Review"] },
        { title: "Techniques", lessons: ["Bending and Vibrato", "Hammer-ons and Pull-offs", "Fast Picking"] },
        { title: "Solo Breakdown", lessons: ["Intro Licks", "Middle Section", "Climax and Outro"] },
        { title: "Practice Strategies", lessons: ["Slow Practice Techniques", "Speed Building", "Memorization Tips"] },
        { title: "Final Performance", lessons: ["Full Solo Run-through", "Recording and Self-Evaluation"] }
      ],
      skills: [
        "Master essential rock guitar techniques",
        "Understand music theory applied to solos",
        "Develop speed, accuracy, and expression",
        "Memorize and perform complex solo sections",
        "Recreate Jimmy Page\u2019s iconic tone and style"
      ]
    },
    "Speak basic Spanish": {
      title: "Beginner Spanish: Build Daily Conversational Skills",
      overview: "Start your journey to Spanish fluency with this beginner-friendly course. Focus on practical, everyday Spanish that you can use immediately in real-life situations, from greetings to basic conversations.",
      duration: "20 Hours",
      lessons: 75,
      projects: 5,
      sections: [
        { title: "Introduction", lessons: ["Course Overview", "Spanish Alphabet and Pronunciation"] },
        { title: "Greetings and Basics", lessons: ["Hello and Goodbye", "Numbers and Time"] },
        { title: "Everyday Vocabulary", lessons: ["Family and Relationships", "Food and Dining", "Travel Essentials"] },
        { title: "Grammar Foundations", lessons: ["Present Tense Verbs", "Basic Sentence Structure"] },
        { title: "Practical Conversations", lessons: ["Asking Questions", "Giving Directions", "Shopping Dialogues"] },
        { title: "Cultural Insights", lessons: ["Spanish-speaking Countries", "Customs and Etiquette"] },
        { title: "Final Project", lessons: ["5-Minute Spanish Conversation", "Written Composition"] }
      ],
      skills: [
        "Pronounce Spanish words correctly",
        "Conduct basic everyday conversations",
        "Understand essential Spanish grammar",
        "Read and write simple Spanish texts",
        "Appreciate Hispanic cultures and customs"
      ]
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (skill.trim() === "") {
      setError("Please enter a skill")
      return
    }
    setError("")
    console.log("Starting learning journey for:", skill)

    const courseData = courseContent[skill as keyof typeof courseContent]
    if (courseData) {
      setCourseTitle(courseData.title)
      setMilestones(courseData.skills.map((text, id) => ({ id: id + 1, text, completed: false })))
      setCourseSections(courseData.sections.map((section, index) => ({
        id: index + 1,
        ...section
      })))
    } else {
      setCourseTitle(`${skill} Course`)
      // Set default milestones and sections if skill is not in predefined list
    }

    setShowCourse(true)
  }

  const toggleMilestone = (id: number) => {
    setMilestones(milestones.map(milestone => 
      milestone.id === id ? { ...milestone, completed: !milestone.completed } : milestone
    ))
  }

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

      <main className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8 text-center">What skill do you want to master?</h1>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
          <div className="mb-4">
            <Input
              type="text"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              placeholder="Enter a specific skill (e.g. handstand)"
              className="bg-gray-800 text-white border-gray-700 focus:border-blue-500"
            />
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
          <Button 
            type="submit" 
            className="w-full bg-blue-500 text-white px-4 py-3 rounded-md font-semibold hover:bg-blue-600 transition duration-300 text-lg"
          >
            Start Your Learning Journey
          </Button>
        </form>

        {!showCourse && (
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4 text-center">Need inspiration?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {placeholderSuggestions.map((suggestion, index) => (
                <Button
                  key={index}
                  onClick={() => setSkill(suggestion)}
                  variant="outline"
                  className="justify-start h-auto py-3 px-4"
                >
                  {suggestion}
                </Button>
              ))}
            </div>
          </div>
        )}

        {showCourse && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Course Overview */}
            <Card className="md:col-span-2 bg-gray-800">
              <CardHeader>
                <CardTitle>{courseTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-700 mb-4 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Play className="h-8 w-8" />
                    </Button>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5" />
                    <span>{courseContent[skill as keyof typeof courseContent]?.duration || "10 Hours"}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FileText className="h-5 w-5" />
                    <span>{courseContent[skill as keyof typeof courseContent]?.lessons || 45} Lessons</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5" />
                    <span>{courseContent[skill as keyof typeof courseContent]?.projects || 2} Projects</span>
                  </div>
                </div>
                <p className="text-gray-300">
                  {courseContent[skill as keyof typeof courseContent]?.overview || "In this course, you will develop a thorough understanding of the subject, from the basics to advanced concepts. The course is structured with hands-on exercises and real-world projects to ensure practical learning."}
                </p>
              </CardContent>
            </Card>

            {/* Course Content Sidebar */}
            <Card className="bg-gray-800 flex flex-col h-full"> {/* Added flex and h-full */}
              <CardHeader>
                <CardTitle>Course Content</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow p-0"> {/* Added flex-grow */}
                <ScrollArea className="h-full px-4"> {/* Changed to h-full */}
                  {courseSections.map((section) => (
                    <div key={section.id} className="mb-4">
                      <div className="flex items-center justify-between py-2">
                        <h3 className="font-semibold">{section.title}</h3>
                        <ChevronDown className="h-5 w-5" />
                      </div>
                      <ul className="pl-4 space-y-2">
                        {section.lessons.map((lesson, index) => (
                          <li key={index} className="text-sm text-gray-300">{lesson}</li>
                        ))}
                      </ul>
                      <Separator className="my-2" />
                    </div>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Skills You&apos;ll Learn */}
            <Card className="md:col-span-2 bg-gray-800">
              <CardHeader>
                <CardTitle>Skills You&apos;ll Learn</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-2">
                  {milestones.map((milestone) => (
                    <li 
                      key={milestone.id} 
                      className="flex items-center space-x-2 cursor-pointer"
                      onClick={() => toggleMilestone(milestone.id)}
                    >
                      <CheckCircle2 className={`h-5 w-5 ${milestone.completed ? "text-green-500" : "text-gray-500"}`} />
                      <span className={milestone.completed ? "line-through text-gray-500" : "text-gray-300"}>
                        {milestone.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Certificate */}
            <Card className="bg-gray-800">
              <CardHeader>
                <CardTitle>Course Certificate</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-4">Earn the course certificate by completing your course.</p>
                <Button className="w-full">Start Course</Button>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  )
}