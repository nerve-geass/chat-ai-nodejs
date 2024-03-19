import { ConversationType } from "@/components/chat/chatbox"
import { AiGirlfriend } from "@/models/ai-girlfriend"
import { openDB } from "@/utils/db"
import { NextRequest } from "next/server"
import { v4 as uuidv4, v5 as uuidv5 } from 'uuid';

export async function GET(request: NextRequest, { params }: { params: { userId: string, conversationId: string } }) {
  const models = AiGirlfriend.map(model => model.name)

  try {
    const db = await openDB()

    const conversationRecord = await db.all(`
    SELECT c.*
    FROM Conversations c
    where c.ConversationID = ? and c.UserID = ?`, params.conversationId, params.userId)

    const data = await db.all(`
    SELECT m.*
    FROM Messages m 
    where m.ConversationID = ? `, params.conversationId)

    let conversation: ConversationType[] | null = null

    const girlfriend = AiGirlfriend.filter(model => model.name = conversationRecord[0].ModelID)[0]

    conversation = data.map(message => {
      // ConversationID
      // UserOrModelID
      // MessageText
      // MessageImage
      return {
        type: models.includes(message.UserOrModelID) ? "in" : "out",
        text: message.MessageText,
        image: message.MessageImage,
        avatar: models.indexOf(message.UserOrModelID) === -1 ? "/dist/media/img/avatar6.jpg" : girlfriend.avatar,
        name: models.includes(message.UserOrModelID) ? girlfriend.name : "me"
      }
    })

    return Response.json({ conversation, modelId: girlfriend.name })
  } catch (error) {
    console.log({ message: "looking at conversationid:" + params.conversationId, error })
    return Response.json({ conversation: [], modelId: "error" })
  }

}

export async function PUT(request: NextRequest, { params }: { params: { userId: string, conversationId: string } }) {
  const body = await request.json()

  const lastMessage: ConversationType = body.message
  const modelId: string = body.modelId
  const conversationID = params.conversationId
  const userOrModelID = lastMessage.type === 'in' ? modelId : params.userId

  try {
    const db = await openDB();

    const messageID = uuidv4()
    await db.run(`INSERT INTO messages (
      MessageID,
      ConversationID,
      UserOrModelID,
      MessageText,
      MessageImage
    ) VALUES (?, ?, ?, ?, ?) ON CONFLICT(MessageID) DO NOTHING`, messageID, conversationID, userOrModelID, lastMessage.text, lastMessage.image)
    console.log({ message: 'MessageId inserted successfully: ' + messageID, lastMessage });
  } catch (error) {
    console.error({ message: "Error during saving messages", lastMessage, params, conversationID, error });
    return Response.json({ message: "Error during saving messages", lastMessage, params, conversationID }, { status: 500 })
  }

  return Response.json({ conversationId: conversationID })
}

export async function DELETE(request: NextRequest, { params }: { params: { userId: string, conversationId: string } }) {
  try {
    const db = await openDB()

    await db.run(`DELETE 
    FROM Messages 
    WHERE ConversationID = ? 
    AND ConversationID IN (SELECT ConversationID FROM Conversations WHERE ConversationID = ? AND UserID = ?)`, params.conversationId, params.conversationId, params.userId)

    return Response.json({ status: "ok" })
  } catch (error) {
    console.log({ message: "cleaning up conversationid:" + params.conversationId, error })
    return Response.json({ error: error })
  }
}