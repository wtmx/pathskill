"use client"

import { useState } from 'react'
import { CheckCircle2 } from "lucide-react"

interface Milestone {
  id: number;
  text: string;
  completed: boolean;
}

interface SkillLearningAppProps {
  onGenerateCourse: (skill: string) => void;
}

export default function SkillLearningApp({ onGenerateCourse }: SkillLearningAppProps) {
  const [skill, setSkill] = useState<string>("")
  const [milestones, setMilestones] = useState<Milestone[]>([])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (skill.trim() === "") return

    const newMilestones: Milestone[] = [
      { id: 1, text: "Understand basic concepts", completed: false },
      { id: 2, text: "Complete introductory course", completed: false },
      { id: 3, text: "Practice fundamental skills", completed: false },
      { id: 4, text: "Work on a small project", completed: false },
      { id: 5, text: "Learn advanced techniques", completed: false }
    ]
    setMilestones(newMilestones)
    onGenerateCourse(skill)
  }

  const toggleMilestone = (id: number) => {
    setMilestones(milestones.map(milestone => 
      milestone.id === id ? { ...milestone, completed: !milestone.completed } : milestone
    ))
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex space-x-2">
          <input
            type="text"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            placeholder="Enter a skill to learn"
            className="flex-grow bg-gray-800 text-white p-2 rounded"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Generate Course</button>
        </div>
      </form>

      {milestones.length > 0 && (
        <div className="bg-gray-800 rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">Skills You'll Learn</h2>
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
        </div>
      )}
    </div>
  )
}