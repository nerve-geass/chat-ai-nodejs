import { NextRequest } from "next/server"

export async function GET(request: NextRequest,  { params }: { params: { userId: string } }) {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('query')
    // const res = await fetch('https://data.mongodb-api.com/...', {
    //   next: { revalidate: 60 }, // Revalidate every 60 seconds
    // })
    // const data = await res.json()
   
    // return Response.json(data)


    // for Stream responses visit: https://nextjs.org/docs/app/building-your-application/routing/route-handlers#streaming
    return Response.json({text: "questo sono io", pathname: request.url, userId: params.userId, query: query})
  }