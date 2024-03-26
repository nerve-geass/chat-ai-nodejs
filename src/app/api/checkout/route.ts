import { getSubscriptionUsageData } from "@/utils/db"
import { NextRequest, NextResponse } from "next/server"

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export async function POST(request: NextRequest) {
  const item = await request.json() as unknown as { itemId: String, userId: string }

  const redirectURL =
    process.env.URL + '/api/payment-done'

  const transformedItem = {
    price: item.itemId,
    quantity: 1,
  }

  // TODO: not so robust, better check subscription via stripe api
  try {
    const subscriptionUsageData = await getSubscriptionUsageData(item.userId)
    if (subscriptionUsageData[0].EndSubscription !== null) {
      const dateCurrent = (new Date()).setHours(0, 0, 0, 0)
      const dateSubscription = (new Date(subscriptionUsageData[0].EndSubscription)).setHours(0, 0, 0, 0)
      if (dateCurrent <= dateSubscription) return Response.json({ message: "Subscription yet valid" }, {status: 208})
    }
  } catch (error) {
    console.error({ message: "Error while checking subscription for userId: " + item.userId, error })
    Response.json({ error: "checking subscription" }, { status: 500 })
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [transformedItem],
    mode: 'subscription',
    success_url: redirectURL + '?status=success&session_id={CHECKOUT_SESSION_ID}',
    cancel_url: redirectURL + '?status=cancel',
    metadata: {},
  })

  return NextResponse.json({ received: true, id: session.id })
}
