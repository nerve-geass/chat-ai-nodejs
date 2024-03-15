import { ConversationType } from "@/components/chat/chatbox"
import { AiGirlfriend } from "@/models/ai-girlfriend"
import { NextRequest } from "next/server"
import Groq from 'groq-sdk'

export async function POST(request: NextRequest, { params }: { params: { userId: string, modelId: string } }) {
  const groq = new Groq({ apiKey: process.env.GROQ_API_KEY! })

  const girlfriend = AiGirlfriend.filter(model => model.name = params.modelId)[0]

  const body = await request.json()

  const requestMessages: ConversationType[] = body.messages
  console.log(requestMessages)

  const messages = requestMessages
    .filter(message => message.image === null)
    .slice(-5)
    .map(message => {
      return {
        "role": message.type === 'in' ? "assistant" : "user",
        "content": message.text!
      }
    })

  const chatCompletion = await groq.chat.completions.create({
    "messages": [
      {
        "role": "system",
        "content": girlfriend.prompt
      }, ...messages
    ],
    "model": girlfriend.model,
    "temperature": girlfriend.temperature,
    "max_tokens": girlfriend.max_tokens,
    "top_p": girlfriend.top_p,
    "stream": false, //girlfriend.stream
    "stop": girlfriend.stop
  })

  // for await (const chunk of chatCompletion) {
  //   process.stdout.write(chunk.choices[0]?.delta?.content || '');
  // }

  console.log({message: chatCompletion.choices[0].message.content, co: "èiun contenutooooooooo"})
  // for Stream responses visit: https://nextjs.org/docs/app/building-your-application/routing/route-handlers#streaming
  return Response.json(chatCompletion.choices[0].message.content)
}

// { "id": "0a769ba9-6d72-92dc-9012-56ca11b54fb2", 
// "object": "chat.completion", 
// "created": 1710465963, 
// "model": "mixtral-8x7b-32768", 
// "choices": [{ 
//   "index": 0, 
//   "message": 
//   { "role": "assistant", 
//   "content": "Ciao! Come stai oggi? 😊️\n\n(Nota: Jennifer è qui per ascoltare e offrirti supporto. Se vuoi condividere qualcosa o semplicemente chattare, io sono qui per te. Ricorda, tutte le nostre conversazioni sono riservate.)" }, 
//   "logprobs": null, "finish_reason": "stop" }], 
//   "usage": { "prompt_tokens": 754, 
//   "prompt_time": 0.142, "completion_tokens": 75, 
//   "completion_time": 0.131, "total_tokens": 829,
//    "total_time": 0.273 }, "system_fingerprint": null }