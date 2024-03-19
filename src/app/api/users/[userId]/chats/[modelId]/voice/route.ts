import { NextRequest } from "next/server"

export async function POST(request: NextRequest, { params }: { params: { userId: string } }) {

  const body = await request.json()

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
  };

  return fetch('https://api.elevenlabs.io/v1/text-to-speech/xQKkXdUSnhBFnGhswI6y', options)
}