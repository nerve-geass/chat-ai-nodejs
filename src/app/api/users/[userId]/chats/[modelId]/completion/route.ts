import { ConversationType } from "@/components/chat/chatbox"
import { AiGirlfriend } from "@/models/ai-girlfriend"
import { NextRequest } from "next/server"
import Groq from 'groq-sdk'
import { saveMessage, updateMessageUsage } from "@/utils/db"
import { canGetMessage } from "@/utils/subscriptionUsage"

export async function POST(request: NextRequest, { params }: { params: { userId: string, modelId: string } }) {
  const groq = new Groq({ apiKey: process.env.GROQ_API_KEY! })

  const girlfriend = AiGirlfriend.filter(model => model.id = params.modelId)[0]

  const body = await request.json()

  const requestMessages: ConversationType[] = body.messages
  const conversationId: string = body.conversationId

  const lastMessage: ConversationType = requestMessages
    .filter(message => message.image === null)
    .slice(-1)[0]

  try {
    const check = await canGetMessage(params.userId)
    if (!check) {
      return Response.json({ error: "You exceeded the limits of your tier" }, { status: 403 })
    }

    saveMessage(lastMessage, params.userId, params.modelId, conversationId)
  } catch (error) {
    console.error({ message: "Error during saving messages", lastMessage, params, conversationId, error });
    return Response.json({ message: "Error during saving messages", lastMessage, params, conversationId }, { status: 500 })
  }

  // call chatcompletion

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

  const chatCompletionText = chatCompletion.choices[0].message.content
  const completionMessage = {
    type: 'in',
    text: chatCompletionText.replaceAll("\"", "").replaceAll("\[.*?\]", ""),
    image: null,
    avatar: girlfriend.avatar,
    name: girlfriend.id
  } as ConversationType

  try {

    saveMessage(completionMessage, params.userId, params.modelId, conversationId)
    updateMessageUsage(params.userId)
  } catch (error) {
    console.error({ message: "Error during saving messages", completionMessage, params, conversationId, error });
    return Response.json({ message: "Error during saving messages", completionMessage, params, conversationId, error }, { status: 500 })
  }

  // for Stream responses visit: https://nextjs.org/docs/app/building-your-application/routing/route-handlers#streaming
  return Response.json(chatCompletionText)
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