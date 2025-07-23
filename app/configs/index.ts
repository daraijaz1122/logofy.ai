
import { GoogleGenAI } from '@google/genai';

export async function generateDesignIdea(prompt: string) {
  const ai = new GoogleGenAI({
    apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY || '',
  });

  const tools = [
    {
      googleSearch: {},
    },
  ];

  const config = {
    thinkingConfig: {
      thinkingBudget: -1,
    },
    tools,
    responseMimeType: 'text/plain',
  };

  const model = 'gemini-2.5-flash';
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: prompt,
        },
      ],
    },
  ];

  try {
    const response = await ai.models.generateContentStream({
      model,
      config,
      contents,
    });
    let result = '';
      for await (const chunk of response) {
      result += chunk.text || '';
    }

    return { response: { text: () => result } };
  } catch (error) {
    throw new Error(`Gemini API error: ${error}`);
  }
}

