import { getSubscriptionUsageData } from "./db";

const isSubscriptionOverdue = async (userId: string) => {
    const subscriptionUsageData = await getSubscriptionUsageData(userId)
    if (subscriptionUsageData[0].SubscriptionID === process.env.FREE_TIER_ID!
        || subscriptionUsageData[0].EndSubscription === null) {
        return false
    }
    const dateCurrent = (new Date()).setHours(0, 0, 0, 0)
    const dateSubscription = (new Date(subscriptionUsageData[0].EndSubscription)).setHours(0, 0, 0, 0)
    return dateCurrent >= dateSubscription
}

export const canGetMessage = async (userId: string) => {
    const overdue = await isSubscriptionOverdue(userId)

    if (overdue) {
        return false
    }

    const subscriptionUsageData = await getSubscriptionUsageData(userId)

    if (subscriptionUsageData[0].SubscriptionID === process.env.FREE_TIER_ID!
        && subscriptionUsageData[0].MessageUsage >= subscriptionUsageData[0].MessageLimit) {
        return false
    }
    return true
}


export const canGetImage = async (userId: string) => {
    const overdue = await isSubscriptionOverdue(userId)
    if (overdue) {
        return false
    }
    const subscriptionUsageData = await getSubscriptionUsageData(userId)

    if (subscriptionUsageData[0].SubscriptionID !== process.env.FREE_TIER_ID!
        && subscriptionUsageData[0].ImagesUsed >= subscriptionUsageData[0].ImagesLimit) {
        return false
    }
    return true
}

export const canGetAudio = async (userId: string) => {
    const overdue = await isSubscriptionOverdue(userId)
    if (overdue) {
        return false
    }
    const subscriptionUsageData = await getSubscriptionUsageData(userId)

    if (subscriptionUsageData[0].SubscriptionID === process.env.FREE_TIER_ID!
        && subscriptionUsageData[0].AudioUsed >= subscriptionUsageData[0].AudioLimit) {
        return false
    }
    return true
}
