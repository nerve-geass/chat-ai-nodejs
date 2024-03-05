'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useSession } from "next-auth/react";
import LoginButton from "./components/login-button";
import { HeroSection } from "./components/home/home";
import { Dashboard } from "./components/home/dashboard";

export default function Home() {

  const { data: session } = useSession()

  console.log(session)

  return session?.user ? (
    <main>
      <Dashboard />
    </main>
  ) : <div>
    <HeroSection />
  </div>
}
