export const useModel = () => {
    const getModel = async (): Promise<{ modelId: string }> => {
        var myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")

        const modelResponse = await fetch("/api/models", {
            method: 'GET', headers: myHeaders
        })

        const json = await modelResponse.json()

        return {
            modelId: json.modelId,
        }
    }

    return { getModel }
}