'use client'

import { useSession } from "next-auth/react";
import { HeroSection } from "../components/home/home";
import { Dashboard } from "../components/home/dashboard";

export default function Home() {

  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <main>
      Loading
    </main>
  }

  if (status === 'authenticated')
    return <main>
      <Dashboard />
    </main>

  return <div>
    <HeroSection />
  </div>
}
