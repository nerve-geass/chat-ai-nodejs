import { openDB } from "@/app/utils/db"
import { UserType } from "@/app/utils/useUser"
import { NextRequest } from "next/server"

export async function GET(request: NextRequest, { params }: { params: { userId: string } }) {
  const db = await openDB()
  const data = await db.all('SELECT * FROM users where id = ?', params.userId)

  const user: UserType = {
    id: data[0].id,
    email: data[0].user_email,
    nickname: data[0].nickname,
    subscriptionId: data[0].payment_subscription_id
  }

  return Response.json(user)
}