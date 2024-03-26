import { ConversationType } from "@/components/chat/chatbox"
import { AiGirlfriend } from "@/models/ai-girlfriend"
import { saveMessage, updateImageUsage } from "@/utils/db"
import { canGetImage } from "@/utils/subscriptionUsage"
import { NextRequest } from "next/server"

export async function POST(request: NextRequest, { params }: { params: { userId: string, modelId: string } }) {

    const model = AiGirlfriend.filter(model => model.id = params.modelId)[0]
    const body = await request.json()

    const conversationId: string = body.conversationId

    try {
        const check = await canGetImage(params.userId)
        if (!check) {
            return Response.json({ error: "You exceeded the limits of your tier" }, { status: 403 })
        }
    } catch (error) {
        console.error({ message: "Error checking usages", params, conversationId, error });
        return Response.json({ message: "Error checking usages", params, conversationId }, { status: 500 })
    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")
    var raw = JSON.stringify({
        "key": process.env.MODELS_LAB_TOKEN!,
        "prompt": model.image_prompt,
        "negative_prompt": "bad quality",
        "width": "384",
        "height": "512",
        "safety_checker": false,
        "seed": null,
        "samples": 1,
        "base64": false,
        "webhook": null,
        "track_id": null
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow' as unknown as RequestRedirect
    };

    const response = await fetch("https://modelslab.com/api/v6/realtime/text2img", requestOptions)

    const json = await response.json()

    if (json.status !== "success") {
        return Response.json({ error: "error when creating image for conversationId" })
    }

    const imageMessage = {
        type: 'in',
        text: null,
        image: json.output[0],
        avatar: model.avatar,
        name: model.id
    } as ConversationType

    try {
        saveMessage(imageMessage, params.userId, params.modelId, conversationId)
        updateImageUsage(params.userId)
    } catch (error) {
        console.error({ message: "Error during saving messages", imageMessage, params, conversationId, error })
        return Response.json({ message: "Error during saving messages", imageMessage, params, conversationId, error }, { status: 500 })
    }

    return Response.json({ links: json.output, width: json.meta.width, height: json.meta.height })
}


// {
//     "status": "success",
//     "generationTime": 0.65,
//     "id": 81443063,
//     "output": [
//         "https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/generations/604d1afb-dee3-4aa6-8d92-932337ecc147-0.png"
//     ],
//     "proxy_links": [
//         "https://cdn2.stablediffusionapi.com/generations/604d1afb-dee3-4aa6-8d92-932337ecc147-0.png"
//     ],
//     "meta": {
//         "base64": "no",
//         "file_prefix": "604d1afb-dee3-4aa6-8d92-932337ecc147",
//         "guidance_scale": 0,
//         "height": 512,
//         "instant_response": "no",
//         "n_samples": 1,
//         "negative_prompt": "bad quality",
//         "outdir": "out",
//         "prompt": "ultra realistic close up portrait ((beautiful pale cyberpunk collie with heavy black eyeliner))",
//         "safety_checker": "no",
//         "safety_checker_type": "black",
//         "seed": 1373787908,
//         "temp": "no",
//         "width": 512
//     }
// }
