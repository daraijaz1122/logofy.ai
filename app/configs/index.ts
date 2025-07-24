
import { GoogleGenAI } from '@google/genai';

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

export async function generateDesignIdea(prompt: string) {
 
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
export async function generateLogoPrompt(prompt: string) {
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: `generate prompt
Generate a text prompt to create Logo for Logo Title/Brand name : addddassdadd,with description: adaf adfdafd afdf, with Color combination of Earthy Browns, also include the Aged Stamp Unique Element and include Vintage Logo Designs With Text & Icon design idea and Referring to this Logo Prompt:Design a collection of vintage-inspired logos with a hand-drawn, artistic style. Incorporate a variety of themes, including food, animals, characters, and unique brand elements. Each logo should feature bold typography, intricate details, and a retro aesthetic that is versatile and suitable for diverse brands or businesses.  Give me result in JSON portal with prompt field only`,
        },
      ],
    },
    {
      role: 'model',
      parts: [
        {
          text: `**Composing a Unified Prompt**

I'm working on crafting a JSON prompt for logo generation. Right now, I'm integrating the brand name "addddassdadd" and the description "adaf adfdafd" into a cohesive, structured format. My aim is to ensure the prompt is clear and effective for generating a logo that aligns with the given information.


**Merging Input Data**

I've incorporated the brand name, description, color, unique element, and design ideas into my JSON prompt. The color palette, unique element (aged stamp), and design concepts are now part of the prompt structure. I am also making sure the style is vintage-inspired, with a hand-drawn feel. My current focus is to ensure the prompt is precise and actionable.


`,
        },
        {
          text: `\`\`\`json
{
  "prompt": "Design a vintage-inspired logo for the brand \\"addddassdadd\\". The logo should have a hand-drawn, artistic style, incorporating both text and an icon, and feature bold typography with intricate details. The design should evoke a retro aesthetic. Include an aged stamp unique element. The primary color palette should consist of earthy browns. The logo should visually represent \\"adaf adfdafd afdf\\" and be versatile for diverse brands or businesses."
}
\`\`\``,
        },
      ],
    },
    {
      role: 'user',
      parts: [
        {
          text: `Generate a text prompt to create Logo for Logo Title/Brand name : addddassdadd,with description: adaf adfdafd afdf, with Color combination of Earthy Browns, also include the Aged Stamp Unique Element and include Vintage Logo Designs With Text & Icon design idea and Referring to this Logo Prompt:Design a collection of vintage-inspired logos with a hand-drawn, artistic style. Incorporate a variety of themes, including food, animals, characters, and unique brand elements. Each logo should feature bold typography, intricate details, and a retro aesthetic that is versatile and suitable for diverse brands or businesses.  Give me result in JSON portal with prompt field only`,
        },
      ],
    },
    {
      role: 'model',
      parts: [
        {
          text: `**Formulating a Coherent Prompt**

I'm currently integrating all the provided elements into a unified prompt. The goal is to generate a logo prompt that effectively incorporates the brand name "addddassdadd" and the provided description "adaf". I'm meticulously considering how to balance the need for clarity with the flexibility required for creative output. The most important thing is to make sure the key elements are prominent.


**Crafting the Visual Narrative**

I've revised the prompt, focusing on how to visually represent the description, "adaf adfdafd afdf," within the vintage logo design. I've decided to prioritize a hand-drawn, artistic style with bold typography, incorporating an aged stamp element and earthy brown tones. The prompt now emphasizes versatility to suit various brands, incorporating the name "addddassdadd" into the design.


**Refining the Core Concept**

The prompt is now more focused. I've integrated all the elements and refined the phrasing. The key improvement is ensuring the prompt now directly instructs how the description "adaf adfdafd afdf" should be incorporated, either visually or conceptually. The final touch was making sure the aesthetic description is accurate. I'm satisfied the prompt is precise and creative.


`,
        },
        {
          text: `\`\`\`json
{
  "prompt": "Design a vintage-inspired logo for the brand \\"addddassdadd\\". The logo should feature a hand-drawn, artistic style with bold typography and intricate details, embodying a retro aesthetic. Incorporate both text and an icon, and include an aged stamp unique element. The primary color palette should consist of earthy browns. The design should visually represent \\"adaf adfdafd afdf\\" and be versatile for diverse brands or businesses."
}
\`\`\``,
        },
      ],
    },
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

