import { ConversationType } from "@/components/chat/chatbox";
import { AiGirlfriend, AiGirlfriendType } from "@/models/ai-girlfriend";

export const useConversation = () => {
    const getConversation = async (userId: string, conversationId: string): Promise<{ conversation: ConversationType[], modelId: string }> => {
        var myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")

        const conversationResponse = await fetch("/api/users/" + userId + "/conversations/" + conversationId, {
            method: 'GET', headers: myHeaders
        })

        const json = await conversationResponse.json()

        return {
            conversation: json.conversation,
            modelId: json.modelId,
        }
    }

    const cleanUpChat = async (userId: string, conversationId: string) => {
        var myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")

        return await fetch("/api/users/" + userId + "/conversations/" + conversationId, {
            method: 'DELETE', headers: myHeaders
        }).then(response => response.json())
            .catch(reason => {
                console.error(reason)
                return Promise.reject({ error: `Error when cleaning chat for conversation id: ${conversationId}` })
            })
    }

    const getAllConversations = async (userId: string): Promise<{ conversationId: string, model: AiGirlfriendType, createdAt: string }[]> => {
        var myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")

        const conversationResponse = await fetch("/api/users/" + userId + "/conversations", {
            method: 'GET', headers: myHeaders
        })

        const conversations = await conversationResponse.json()

        return conversations.map((conversation: { conversationId: string, modelId: string, createdAt: string }) => {
            const model = AiGirlfriend.find(model => model.name === conversation.modelId)!
            return {
                conversationId: conversation.conversationId,
                model: model,
                createdAt: conversation.createdAt
            }
        })
    }

    const newConversation = async (userId: string, modelId: string): Promise<{ conversationId: string }> => {
        var myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")

        const conversationResponse = await fetch("/api/users/" + userId + "/conversations", {
            method: 'POST', headers: myHeaders, body: JSON.stringify({
                modelId: modelId
            })
        })

        const json = await conversationResponse.json()

        return {
            conversationId: json.conversationId
        }
    }

    const saveMessage = async (userId: string, message: ConversationType, modelId: string, conversationId: string): Promise<{ conversationId: string } | boolean> => {
        var myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")

        const conversationResponse = await fetch("/api/users/" + userId + "/conversations/" + conversationId, {
            method: 'PUT', headers: myHeaders, body: JSON.stringify({
                modelId: modelId,
                message: message
            })
        })

        if (conversationResponse.status !== 200) {
            alert("error in saving conversation and message")
            console.error(await conversationResponse.json())
            return !conversationResponse.ok
        }

        return {
            conversationId
        }
    }

    const generateImageAi = async (userId: string, model: AiGirlfriendType, conversationId: string): Promise<ConversationType> => {
        var myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")
        const response = await fetch("/api/users/" + userId + "/chats/" + model.name + "/image",
            { method: 'POST', headers: myHeaders, body: JSON.stringify({ conversationId }) })
        const json = await response.json()

        // image internal api response
        // links: json.proxy_links, width: json.meta.width, height: json.meta.height
        return {
            type: 'in',
            text: null,
            image: json.links[0],
            avatar: model.avatar,
            name: model.name
        } as ConversationType
    }

    const generateVoiceAi = (userId: string, text: string, model: AiGirlfriendType, conversationId: string) => {
        var myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")
        return fetch("/api/users/" + userId + "/chats/" + model.name + "/voice", {
            method: 'POST', headers: myHeaders, body: JSON.stringify({
                text: text,
                conversationId
            })
        })
    }

    const chatCompletion = async (userId: string, conversation: ConversationType[], model: AiGirlfriendType, conversationId: string) => {
        var myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")
        const chatCompletionResponse = await fetch("/api/users/" + userId + "/chats/" + model.name + "/completion", {
            method: 'POST', headers: myHeaders, body: JSON.stringify({
                messages: conversation,
                conversationId
            })
        })

        if (chatCompletionResponse.status != 200) {
            alert("Error in chatcompletion");
            console.error(await chatCompletionResponse.json())
        }

        const chatCompletionText: string = await chatCompletionResponse.json()

        return {
            type: 'in',
            text: chatCompletionText.replaceAll("\"", "").replaceAll("\[Auto-correzione:.*?\]", ""),
            image: null,
            avatar: model.avatar,
            name: model.name
        } as ConversationType
    }

    return {
        getAllConversations,
        getConversation,
        saveMessage,
        newConversation,
        cleanUpChat,
        generateImageAi,
        generateVoiceAi,
        chatCompletion
    }
}