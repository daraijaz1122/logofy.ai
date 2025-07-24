import { generateLogoPrompt } from "@/app/configs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { prompt } = await req.json();
    try {
        const AIPromptResult = await generateLogoPrompt(prompt);
        let rawText = AIPromptResult.response.text();
        const cleanedText = rawText
      .replace(/^```json\s*/i, '') // remove ```json at start
      .replace(/^```\s*/i, '')     // OR plain ```
      .replace(/\s*```$/, '');     // remove ending ```
         const parsed = JSON.parse(cleanedText); 
    
        return NextResponse.json(parsed);
    } catch (error:any) {
        console.error(" API Error:", error.message);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
    }
}