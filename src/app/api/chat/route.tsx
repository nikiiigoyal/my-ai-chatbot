import { deepseek } from '@ai-sdk/deepseek';
import { streamText } from 'ai';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: deepseek('deepseek-chat'),
    messages,
    maxTokens: 1000,
  });

  return result.toDataStreamResponse();
}