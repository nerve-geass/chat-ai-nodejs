import { NextRequest, NextResponse } from "next/server";

const grokToken = process.env.GROQ_API_KEY!
const elevenLabsToken = process.env.ELEVEN_LABS_TOKEN!
const modelsLabToken = process.env.MODELS_LAB_TOKEN!

export async function POST(request: NextRequest) {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")
    var raw = JSON.stringify({
        "key": modelsLabToken,
        "prompt": "ultra realistic close up portrait ((beautiful pale cyberpunk sexy girl with heavy black eyeliner))",
        "negative_prompt": "bad quality",
        "width": "512",
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


    // TODO: save image to storage
    // TODO: save image url into db as message

    return Response.json(await response.json()) 
        // .then(response => response.text())
        // .then(result => console.log(result))
        // .catch(error => console.log('error', error))
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
