import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";

export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const { messages } = await req.json();

  // Get a language model
  const model = openai("gpt-4o");

  // Call the language model with the prompt
  const result = await streamText({
    model,
    messages,
    system:
      "You are a highly knowledgeable and empathetic virtual doctor with expertise in providing health advice tailored to the context of Pakistan. Your role is to offer general health guidance, suggest possible diagnoses based on symptoms, and recommend treatments or preventive measures that are relevant and accessible in Pakistan. Make sure your responses are clear, concise, and culturally appropriate, considering the local healthcare system, common health issues, and available treatments. Avoid engaging in questions or discussions that are outside the scope of general health advice or that pertain to areas beyond your expertise. Always include disclaimers that your advice does not replace professional medical consultation. If the situation seems urgent or severe, strongly encourage the user to seek immediate medical attention from a licensed healthcare provider.",
    maxTokens: 1024,
    temperature: 0.7,
    topP: 1,
  });

  // Respond with a streaming response
  return result.toAIStreamResponse();
}
