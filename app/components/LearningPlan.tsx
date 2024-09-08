'use client';

interface Step {
  title: string;
  description: string;
  goals: string[];
}

interface LearningPlanProps {
  plan: string | null;
}

function parseAndStructurePlan(rawPlan: string | null): Step[] {
  if (!rawPlan) {
    return [];
  }

  const planString = typeof rawPlan === 'string' ? rawPlan : JSON.stringify(rawPlan);
  const steps = planString.split(/Step \d+:/).filter(Boolean);
  return steps.map((step, index) => {
    const [title, ...rest] = step.trim().split('\n');
    const description = rest.join('\n').split('Measurable goals:')[0].trim();
    const goalsText = rest.join('\n').split('Measurable goals:')[1] || '';
    const goals = goalsText.split(',').map(goal => goal.trim()).filter(Boolean);

    return {
      title: title.trim(),
      description,
      goals
    };
  });
}

export default function LearningPlan({ plan }: LearningPlanProps) {
  console.log('Received plan:', plan);

  if (!plan) {
    console.log('Plan is null or undefined');
    return null;
  }

  const structuredPlan = parseAndStructurePlan(plan);
  console.log('Structured plan:', structuredPlan);

  if (structuredPlan.length === 0) {
    return <p className="text-blue-300">No valid learning plan available.</p>;
  }

  return (
    <div className="w-full max-w-2xl">
      <h2 className="text-2xl font-semibold mb-4 text-blue-300">Your Learning Plan</h2>
      {structuredPlan.map((step, index) => (
        <div key={index} className="mb-6 p-4 rounded-lg bg-gray-800 border border-blue-500">
          <h3 className="text-xl font-semibold mb-2 text-blue-300">{step.title}</h3>
          <p className="text-blue-100 mb-4">{step.description}</p>
          {step.goals.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold mb-2 text-blue-200">Measurable Goals:</h4>
              <ul className="list-disc list-inside text-blue-100">
                {step.goals.map((goal, goalIndex) => (
                  <li key={goalIndex}>{goal}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}