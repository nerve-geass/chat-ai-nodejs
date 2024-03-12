
import { ConversationType } from "@/components/chat/chatbox"
import { AiGirlfriendType } from "@/models/ai-girlfriend"
import Groq from 'groq-sdk'

export const useChatAIUtils = (model: AiGirlfriendType) => {



    // const groq = new Groq({ apiKey: grokToken })

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")


    console.log(process.env.GROQ_API_KEY)
    const generateImageAi = () => {
        fetch("/api/chat/image", {method: 'POST', headers: myHeaders})
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    const generateVoiceAi = (text: string) => {

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model_id: "eleven_monolingual_v1",
                // pronunciation_dictionary_locators: [
                //     {
                //         pronunciation_dictionary_id: "<string>",
                //         version_id: "<string>"
                //     }],
                text: text,
                voice_settings: {
                    similarity_boost: 0.5,
                    stability: 0.5,
                    // style: 123, 
                    // use_speaker_boost: true
                }
            })
        };


        fetch('https://api.elevenlabs.io/v1/text-to-speech/{voice_id}', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

    const chatCompletion = (conversation: ConversationType[]) => {

    }

    return { generateImageAi, generateVoiceAi, chatCompletion }
}