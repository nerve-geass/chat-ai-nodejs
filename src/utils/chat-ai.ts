
import { ConversationType } from "@/components/chat/chatbox"
import { AiGirlfriendType } from "@/models/ai-girlfriend"
import { UserType } from "./useUser";

export function useChatAIUtils(user: UserType) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const generateImageAi = (model: AiGirlfriendType) => {
        fetch("/api/users/" + user.id + "/chats/" + model.name + "/image", { method: 'POST', headers: myHeaders })
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    };

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
    };

    const chatCompletion = async (conversation: ConversationType[], model: AiGirlfriendType) => {
        const chatCompletionResponse = await fetch("/api/users/" + user.id + "/chats/" + model.name + "/completion", {
            method: 'POST', headers: myHeaders, body: JSON.stringify({
                messages: conversation
            })
        });

        if (chatCompletionResponse.status != 200) {
            alert("Error in chatcompletion");
            console.error(await chatCompletionResponse.json());
        }

        const chatCompletionText: string = await chatCompletionResponse.json();

        return {
            type: 'in',
            text: chatCompletionText.replaceAll("\"", ""),
            image: null,
            avatar: model.avatar,
            name: model.name
        } as ConversationType;
    };

    return { generateImageAi, generateVoiceAi, chatCompletion };
}