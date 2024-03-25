import { updateAudioUsage } from "@/utils/db"
import { canGetAudio } from "@/utils/subscriptionUsage"
import { NextRequest } from "next/server"

export async function POST(request: NextRequest, { params }: { params: { userId: string } }) {

  const body = await request.json()
  const conversationId: string = body.conversationId

  try {
    const check = await canGetAudio(params.userId)
    if (!check) {
      return Response.json({ error: "You exceeded the limits of your tier" }, { status: 403 })
    }
  } catch (error) {
    console.error({ message: "Error checking audio usages", params, conversationId, error });
    return Response.json({ message: "Error checking audio usages", params, conversationId }, { status: 500 })
  }

  const options = {
    method: 'POST',
    headers: {
      'xi-api-key': process.env.ELEVEN_LABS_TOKEN!,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "model_id": "eleven_multilingual_v2",
      "text": body.text,
      "voice_settings": {
        "similarity_boost": 0.5,
        "stability": 1
      }
    })
  }

  try {
    updateAudioUsage(params.userId)
  } catch (error) {
    console.error({ message: "Error during saving audio usage", params, conversationId, error })
    return Response.json({ message: "Error during audio usage", params, conversationId, error }, { status: 500 })
  }

  return fetch('https://api.elevenlabs.io/v1/text-to-speech/xQKkXdUSnhBFnGhswI6y', options)
}