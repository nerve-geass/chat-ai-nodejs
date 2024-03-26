import { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
    try {
        return Response.json({ modelId: process.env.MODEL_ID! })
    } catch (error) {
        return Response.json({ error: error }, { status: 500 })
    }
}