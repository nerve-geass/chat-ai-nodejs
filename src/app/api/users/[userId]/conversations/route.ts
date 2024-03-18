import { openDB } from "@/utils/db"
import { NextRequest } from "next/server"
import { v4 as uuidv4 } from 'uuid'

export async function GET(request: NextRequest, { params }: { params: { userId: string } }) {
  const db = await openDB()
  const data = await db.all(`
  SELECT c.*
  FROM Conversations c
  where c.UserID = ? 
  ORDER BY c.CreatedAT DESC`, params.userId)

  const conversations = data.map(conversation => {
    return {
      modelId: conversation.ModelID,
      conversationId: conversation.ConversationID,
      createdAt: conversation.CreatedAt
    }
  })

  return Response.json(conversations)
}

export async function POST(request: NextRequest, { params }: { params: { userId: string } }) {
  const body = await request.json()

  const modelId: string = body.modelId
  const conversationID = uuidv4()

  try {
    const db = await openDB();

    await db.run(`INSERT INTO Conversations (ConversationID, UserID, ModelID) 
      VALUES (?, ?, ?) ON CONFLICT(ConversationID) DO NOTHING`, conversationID, params.userId, modelId);
    console.log({ message: 'Conversation added successfully' })

  } catch (error) {
    console.error({ message: "Error during saving messages", params, conversationID, error });
    return Response.json({ message: "Error during saving messages",  params, conversationID }, { status: 500 })
  }

  return Response.json({ conversationId: conversationID })
}