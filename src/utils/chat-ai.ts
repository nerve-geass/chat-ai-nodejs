
import { ConversationType } from "@/components/chat/chatbox"
import { AiGirlfriendType } from "@/models/ai-girlfriend"
import { UserType } from "./useUser";

export function useChatAIUtils(user: UserType) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const generateImageAi = async (model: AiGirlfriendType): Promise<ConversationType> => {
        const response = await fetch("/api/users/" + user.id + "/chats/" + model.name + "/image", { method: 'POST', headers: myHeaders })
        const json = await response.json()

        // image internal api response
        // links: json.proxy_links, width: json.meta.width, height: json.meta.height
        return {
            type: 'in',
            text: null,
            image: json.links[0],
            avatar: model.avatar,
            name: model.name
        } as ConversationType;
    };

    const generateVoiceAi = (text: string, model: AiGirlfriendType) => {
        return fetch("/api/users/" + user.id + "/chats/" + model.name + "/voice", {
            method: 'POST', headers: myHeaders, body: JSON.stringify({
                text: text
            })
        })
    }

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

        const chatCompletionText: string = await chatCompletionResponse.json()

        return {
            type: 'in',
            text: chatCompletionText.replaceAll("\"", "").replaceAll("\[Auto-correzione:.*?\]", ""),
            image: null,
            avatar: model.avatar,
            name: model.name
        } as ConversationType
    };

    return { generateImageAi, generateVoiceAi, chatCompletion }
}