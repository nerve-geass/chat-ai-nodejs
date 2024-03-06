import { openDB } from "@/app/utils/db";
import { NextRequest } from "next/server"

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const baseUrl = process.env.URL!

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('status')
  const sessionId = searchParams.get('session_id')

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['customer', 'invoice.subscription'],
  });

  const db = await openDB()

  try {
    await db.run("UPDATE users SET payment_customer_id = ?, payment_subscription_id = ? where payment_session_id = ?", session.customer.id, session.subscription, sessionId)
  } catch (error) {
    console.error({ message: "error during save payment details for sessionId", customerId: session.customer.id, dubscriptionId: session.subscription, sessionId: sessionId })
  }

  return Response.redirect(baseUrl)
}