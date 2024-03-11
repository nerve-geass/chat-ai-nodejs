import { openDB } from "@/utils/db"
import { NextRequest } from "next/server"

export async function POST(request: NextRequest, { params }: { params: { userId: string } }) {
  const searchParams = request.nextUrl.searchParams
  const body = await request.json()
  // const res = await fetch('https://data.mongodb-api.com/...', {
  //   next: { revalidate: 60 }, // Revalidate every 60 seconds
  // })
  // const data = await res.json()

  // return Response.json(data)

  // Open database
  const db = await openDB()
  try {
    const res = await db.run("UPDATE users SET payment_session_id = ? WHERE id = ?", body.sessionId, params.userId)

  } catch (error) {
    console.error({ message: "error during save session id", userId: params.userId, sessionId: body.sessionId, error })
    return Response.json({error: "error during save session id", userId: params.userId, sessionId: body.sessionId }, {status: 500})
  }

  // for Stream responses visit: https://nextjs.org/docs/app/building-your-application/routing/route-handlers#streaming
  return Response.json({sessionId: body.sessionId})
}