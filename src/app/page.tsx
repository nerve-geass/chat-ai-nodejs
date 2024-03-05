'use client'

import { useSession } from "next-auth/react";
import { HeroSection } from "./components/home/home";
import { Dashboard } from "./components/home/dashboard";

export default function Home() {

  const { data: session } = useSession()

  return session?.user ? (
    <main>
      <Dashboard />
    </main>
  ) : <div>
    <HeroSection />
  </div>
}
