import Auth0 from "next-auth/providers/auth0"
import { openDB } from '../../../../utils/db';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    Auth0({
      clientId: process.env.AUTH0_CLIENT_ID!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET!,
      issuer: process.env.AUTH0_ISSUER!,
      async profile(profile: any, tokens) {

        try {
          const db = await openDB();
          await db.run("INSERT INTO users (id, user_email, nickname, payment_session_id, payment_customer_id, payment_subscription_id) VALUES (?, ?, ?, '', '', '') ON CONFLICT(id) DO NOTHING",
            profile.email, profile.email, profile.nickname)
          await db.run("INSERT INTO SubscriptionsUsage (UserID, SubscriptionID, MessagesUsed, ImagesUsed, AudioUsed, EndSubscription) VALUES (?, ?, ?, ?, ?, ?) ON CONFLICT(UserID) DO NOTHING",
            profile.email, process.env.FREE_TIER_ID!, 0, 0, 0, null)
          console.log({ message: 'Item updated successfully' })
        } catch (error) {
          console.error({ message: 'An error occurred', error })
        }

        return {
          id: profile.sub,
          name: profile.nickname,
          email: profile.email,
          image: profile.picture,
        }
      },
    }),
  ]
}