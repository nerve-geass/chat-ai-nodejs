import Link from "next/link";

export default function Page({ params }: { params: { chatId: string } }) {
    return <div>My Chat: {params.chatId}
        <br />
        <Link href={'/'}>Home</Link></div>
}
