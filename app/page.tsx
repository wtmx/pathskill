'use client';

import { useState } from 'react';
import SkillInput from './components/SkillInput';
import LearningPlan from './components/LearningPlan';

export default function Home() {
  const [generatedPlan, setGeneratedPlan] = useState(null);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 bg-gradient-to-br from-gray-900 to-blue-900">
      <h1 className="text-4xl font-bold mb-8 text-blue-300">Skill Learning Planner</h1>
      <SkillInput onPlanGenerated={setGeneratedPlan} />
      <LearningPlan plan={generatedPlan} />
    </main>
  );
}
