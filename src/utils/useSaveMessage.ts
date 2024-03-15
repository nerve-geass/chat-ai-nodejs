import { ConversationType } from "@/components/chat/chatbox";

export async function saveMessage(userId: string, message: ConversationType, modelId: string) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")

    const conversationResponse = await fetch("/api/users/" + userId + "/chats/" + modelId, {
        method: 'POST', headers: myHeaders, body: JSON.stringify({
            message: message
        })
    })

    if (conversationResponse.status !== 200) {
        alert("error in saving conversation and message")
        console.error(await conversationResponse.json())
        return !conversationResponse.ok
    }

    return conversationResponse.ok
}