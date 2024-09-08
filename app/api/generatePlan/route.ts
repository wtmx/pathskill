import { NextRequest, NextResponse } from 'next/server';
import apiMyLlamaNodePackage from 'apimyllama-node-package';

export async function POST(req: NextRequest) {
  try {
    const { skill } = await req.json();
    console.log('Received skill:', skill);

    const apikey = process.env.OLLAMA_API_KEY;
    const prompt = `Generate a detailed 3-step learning plan for mastering ${skill}. For each step, include a title, description, and 2-3 measurable goals.`;
    const model = 'llama2';
    const ip = process.env.OLLAMA_SERVER_IP;
    const port = process.env.OLLAMA_SERVER_PORT;
    const stream = false;

    console.log('apimyllama-node-package version:', apiMyLlamaNodePackage.version);
    console.log('Environment variables:', {
      OLLAMA_API_KEY: apikey,
      OLLAMA_SERVER_IP: ip,
      OLLAMA_SERVER_PORT: port
    });
    console.log('API call parameters:', { apikey, prompt, model, ip, port, stream });

    // Construct and log the full URL
    const fullUrl = `http://${ip}:${port}/api/generate`;
    console.log('Full URL:', fullUrl);

    // Use the port from environment variables
    const response = await apiMyLlamaNodePackage.generate(apikey, prompt, model, ip, port, stream);
    console.log('API response:', response);

    if (response && response.response) {
      return NextResponse.json({ plan: response.response });
    } else {
      throw new Error('Invalid response format');
    }
  } catch (error) {
    console.error('Detailed error:', error);
    if (error instanceof Error) {
      return NextResponse.json({ error: 'Failed to generate learning plan', details: error.message, stack: error.stack }, { status: 500 });
    } else {
      return NextResponse.json({ error: 'Failed to generate learning plan', details: 'Unknown error' }, { status: 500 });
    }
  }
}