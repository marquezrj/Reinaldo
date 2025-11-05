
import { GoogleGenAI } from '@google/genai';
import type { NewsData } from '../types';
import { NEWS_JSON_SCHEMA } from '../constants';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export async function generateNewsForCity(city: string): Promise<NewsData> {
  const prompt = `
    You are an autonomous news generation engine for a tourism website.
    Your task is to generate a comprehensive, engaging, and accurate news report for tourists about the city: ${city}.
    Use Google Search to find the latest and most relevant information, such as new restaurant openings, ongoing events, cultural happenings, travel tips, and safety alerts.
    Generate a variety of news items.
    Your output MUST be a single JSON object that strictly adheres to the provided schema. Do not include any markdown formatting like \`\`\`json.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
        responseMimeType: "application/json",
        responseSchema: NEWS_JSON_SCHEMA,
      },
    });

    const jsonText = response.text;
    if (!jsonText) {
        throw new Error("API returned an empty response.");
    }

    // Sometimes the model might wrap the JSON in markdown, so we strip it.
    const cleanJsonText = jsonText.replace(/^```json\s*|```\s*$/g, '').trim();
    
    const parsedData: NewsData = JSON.parse(cleanJsonText);
    return parsedData;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error(`Failed to generate news. Please check the console for details.`);
  }
}
