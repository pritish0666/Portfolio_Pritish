import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

if (!process.env.GOOGLE_GENAI_API_KEY) {
  throw new Error(
    'The GOOGLE_GENAI_API_KEY environment variable is not set. ' +
      'Please set it in your .env file or environment variables.'
  );
}

export const ai = genkit({
  promptDir: './prompts',
  plugins: [
    googleAI({
      apiKey: process.env.GOOGLE_GENAI_API_KEY,
    }),
  ],
  model: 'googleai/gemini-2.0-flash',
});
