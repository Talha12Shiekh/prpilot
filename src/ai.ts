import { GoogleGenAI } from '@google/genai';
import { PRFile } from './types';

export class AIService {
  private ai: GoogleGenAI;

  constructor(apiKey: string) {
    this.ai = new GoogleGenAI({ apiKey });
  }

  public async generateSuggestions(files: PRFile[]): Promise<string[]> {
    const reviewableFiles = files.filter(f => f.patch);
    if (reviewableFiles.length === 0) return [];

    let prompt = `You are a strict, helpful, and expert senior software engineer reviewing a Pull Request.\n\n`;
    prompt += `Here are the modified files and their code diffs:\n`;
    
    for (const file of reviewableFiles) {
      prompt += `\n--- File: ${file.filename} ---\n`;
      prompt += `${file.patch}\n`;
    }

    prompt += `\nPlease review the code changes and provide actionable suggestions to improve code quality, readability, performance, or security.\n`;
    prompt += `Format your response as a Markdown list of bullet points.\n`;
    prompt += `Do not give praise or conversational filler. Only output the list of issues.\n`;
    prompt += `If the code looks completely fine and you have no suggestions, simply reply with the exact text "NO_SUGGESTIONS".\n`;

    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      const responseText = response.text?.trim() || '';
      
      if (responseText === 'NO_SUGGESTIONS' || responseText === '') {
        return [];
      }

      return [responseText];
    } catch (error) {
      console.error('Failed to generate AI suggestions:', error);
      return ['The AI Review engine encountered an error and could not generate suggestions.'];
    }
  }
}
