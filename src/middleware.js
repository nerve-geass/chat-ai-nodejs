import { withAuth } from "next-auth/middleware"

export const config = { matcher: ["/dist"] }

export default withAuth({
    pages: {
        signIn: '/'
    }
})