import useSWR from 'swr'

export type UserType = {
    id: String
    email: String
    nickname: String
    subscriptionId: String | null
}

export default function useUser(id: String): { data: UserType, isLoading: boolean, isError: boolean } {

    const { data, error, isLoading } = useSWR(`/api/users/${id}/me`, (url) => fetch(url).then(res => res.json()))

    return {
        data: data,
        isLoading,
        isError: error
    }
}