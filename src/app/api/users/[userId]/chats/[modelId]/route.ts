import { ConversationType } from "@/components/chat/chatbox"
import { AiGirlfriend } from "@/models/ai-girlfriend"
import { openDB } from "@/utils/db"
import { NextRequest } from "next/server"
import { v4 as uuidv4, v5 as uuidv5 } from 'uuid';

export async function GET(request: NextRequest, { params }: { params: { userId: string, modelId: string } }) {
  const models = AiGirlfriend.map(model => model.id)

  const db = await openDB()
  const data = await db.all(`
  SELECT m.* 
  FROM Messages m 
  JOIN Conversations c ON m.ConversationID = c.ConversationID  
  where c.ModelID = ? and c.UserID = ?`, params.modelId, params.userId)

  let conversation: ConversationType[] | null = null

  const girlfriend = AiGirlfriend.filter(model => model.id = params.modelId)[0]

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

  return Response.json(conversation)
}

export async function POST(request: NextRequest, { params }: { params: { userId: string, modelId: string } }) {
  const body = await request.json()

  const lastMessage: ConversationType = body.message
  const conversationID = uuidv5(`${params.userId}-${params.modelId}`, uuidv5.DNS)
  const userOrModelID = lastMessage.type === 'in' ? params.modelId : params.userId

  try {
    const db = await openDB();

    await db.run(`INSERT INTO Conversations (ConversationID, UserID, ModelID) 
      VALUES (?, ?, ?) ON CONFLICT(ConversationID) DO NOTHING`, conversationID, params.userId, params.modelId);
    console.log({ message: 'Conversation added successfully' })

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

  return Response.json({ conversationID })
}