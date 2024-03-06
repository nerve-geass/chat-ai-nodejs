import NextAuth from "next-auth"
import Auth0 from "next-auth/providers/auth0"
import { openDB } from '../../../utils/db';

export const authOptions = { 
    // Configure one or more authentication providers
    providers: [
        Auth0({
            clientId: process.env.AUTH0_CLIENT_ID!,
            clientSecret: process.env.AUTH0_CLIENT_SECRET!,
            issuer: process.env.AUTH0_ISSUER!,
            async profile(profile: any, tokens) {
                console.log("user passato da qui profile")

                try {
                    const db = await openDB();
                    await db.run("INSERT INTO users (id, user_email, nickname, payment_session_id, payment_customer_id, payment_subscription_id) VALUES (?, ?, ?, '', '', '') ON CONFLICT(id) DO NOTHING", profile.email, profile.email, profile.nickname);
                    console.log({ message: 'Item updated successfully' });
                  } catch (error) {
                    console.error({ message: 'An error occurred' });
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

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }