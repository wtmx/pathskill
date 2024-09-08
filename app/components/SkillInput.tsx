'use client';

import { useState } from 'react';

interface SkillInputProps {
  onPlanGenerated: (plan: any) => void;
}

export default function SkillInput({ onPlanGenerated }: SkillInputProps) {
  const [skill, setSkill] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/generatePlan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          skill,
          apiSecret: process.env.NEXT_PUBLIC_API_SECRET 
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate learning plan');
      }

      const plan = await response.json();
      onPlanGenerated(plan);
    } catch (error) {
      console.error('Error generating learning plan:', error);
      // Handle error (e.g., show error message to user)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mb-8">
      <input
        type="text"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
        placeholder="Enter a skill you want to learn"
        className="w-full px-4 py-2 rounded-lg border-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-800 text-blue-100 placeholder-blue-300"
      />
      <button
        type="submit"
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 disabled:bg-blue-400"
        disabled={isLoading}
      >
        {isLoading ? 'Generating...' : 'Generate Learning Plan'}
      </button>
    </form>
  );
}