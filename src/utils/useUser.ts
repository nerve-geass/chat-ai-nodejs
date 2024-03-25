import useSWR from 'swr'

export type UserType = {
    id: string
    email: string
    nickname: string
    subscriptionId: string | null
    messagesUsed: number 
    imagesUsed: number 
    audioUsed: number 
    endSubscription: Date | null
}

export default function useUser(id: String): { data: UserType, isLoading: boolean, isError: boolean } {

    const { data, error, isLoading } = useSWR(`/api/users/${id}/me`, (url) => fetch(url).then(res => res.json()))

    return {
        data: data,
        isLoading,
        isError: error
    }
}