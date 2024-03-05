import { NextRequest } from "next/server"

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const baseUrl = process.env.URL!
// export async function GET(request: NextRequest,  { params }: { params: { userId: string } }) {
export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('status')
    const sessionId = searchParams.get('session_id')

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['customer', 'invoice.subscription'],
    });
    // const res = await fetch('https://data.mongodb-api.com/...', {
    //   next: { revalidate: 60 }, // Revalidate every 60 seconds
    // })
    // const data = await res.json()
   
    // return Response.json(data)


    // TODO: save customerId and SubscriptionId to DB for sessionId so it can be checked furtherly with webhook
    console.log("session.customer.id")
    console.log(session.customer.id)
    console.log("subscriptionId")
    console.log(session.subscription)
    console.log("session status")
    console.log(session.status)


    // for Stream responses visit: https://nextjs.org/docs/app/building-your-application/routing/route-handlers#streaming
    // return Response.json({text: "questa è una risposta json", pathname: request.url})
    return Response.redirect(baseUrl)
  }