'use client'

import { useSession, signIn, signOut } from "next-auth/react"

export default function LoginButton() {
  const { data: session } = useSession()
  console.log(session)
  if (session) {
    return (
      <>
        <div className="text-center">
          <p>Ciao, {session.user?.name}</p>
        </div>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}