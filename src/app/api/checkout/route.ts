import { NextRequest, NextResponse } from "next/server";

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST(request: NextRequest) {
    const item = await request.json() as unknown as {itemId: String};

  const redirectURL =
    process.env.URL + '/api/payment-done';

  const transformedItem = {
    price: item.itemId,
    quantity: 1,
  };

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [transformedItem],
    mode: 'subscription',
    success_url: redirectURL + '?status=success&session_id={CHECKOUT_SESSION_ID}',
    cancel_url: redirectURL + '?status=cancel',
    metadata: {},
  });

  return NextResponse.json({received: true, id: session.id});
}
