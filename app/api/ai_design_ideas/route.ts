import { NextResponse } from 'next/server';
import { generateDesignIdea } from '@/app/configs';

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json({ error: 'Invalid or missing prompt' }, { status: 400 });
    }

    const result = await generateDesignIdea(prompt);
      let rawText = result.response.text();
    // Strip ```json or ``` if present
    const cleanedText = rawText
      .replace(/^```json\s*/i, '') // remove ```json at start
      .replace(/^```\s*/i, '')     // OR plain ```
      .replace(/\s*```$/, '');     // remove ending ```

    // Parse safely
      const parsed = JSON.parse(cleanedText);  
    return NextResponse.json(parsed);
  } catch (error: any) {
    console.error(" API Error:", error.message);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
