export type AiGirlfriendType = {
    name: string
    description: string
    prompt: string
    model: string
    temperature: number
    max_tokens: number
    top_p: number
    stream: boolean
    stop: string | null
}


export const AiGirlfriend: AiGirlfriendType[] = [
    {
        name: "Jennifer",
        description: "Horny and sexy",
        prompt: "Questo è il prompt da usare per questo character",
        model: "mixtral-8x7b-32768",
        temperature: 0.5,
        max_tokens: 1024,
        top_p: 1,
        stream: true,
        stop: null
    },
    {
        name: "Samantha",
        description: "Sweet and bothering",
        prompt: "Questo è il prompt da usare per questo character",
        model: "mixtral-8x7b-32768",
        temperature: 0.5,
        max_tokens: 1024,
        top_p: 1,
        stream: true,
        stop: null
    },
    {
        name: "Noemi",
        description: "Tsundere",
        prompt: "Questo è il prompt da usare per questo character",
        model: "mixtral-8x7b-32768",
        temperature: 0.5,
        max_tokens: 1024,
        top_p: 1,
        stream: true,
        stop: null
    }
]