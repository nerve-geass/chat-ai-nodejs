import { ConversationType } from "@/components/chat/chatbox";
import { AiGirlfriend, AiGirlfriendType } from "@/models/ai-girlfriend";

export const useConversation = () => {
    const getConversation = async (userId: string, conversationId: string): Promise<{conversation: ConversationType[], modelId: string}> => {
        var myHeaders = new Headers();
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
   
    const getAllConversations = async (userId: string): Promise<{conversationId: string, model: AiGirlfriendType, createdAt: string}[]> => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json")

        const conversationResponse = await fetch("/api/users/" + userId + "/conversations", {
            method: 'GET', headers: myHeaders
        })

        const conversations = await conversationResponse.json()

        return conversations.map((conversation: {conversationId: string, modelId: string, createdAt: string}) => {
            const model = AiGirlfriend.find(model => model.name === conversation.modelId)!
            return {
                conversationId: conversation.conversationId,
                model: model,
                createdAt: conversation.createdAt
            }
        })
    }
   
    const newConversation = async (userId: string, modelId: string): Promise<{ conversationId: string}> => {
        var myHeaders = new Headers();
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

    const saveMessage = async (userId: string, message: ConversationType, modelId: string, conversationId: string): Promise<{ conversationId: string} | boolean> => {
        var myHeaders = new Headers();
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

    return {getAllConversations, getConversation, saveMessage, newConversation}
}