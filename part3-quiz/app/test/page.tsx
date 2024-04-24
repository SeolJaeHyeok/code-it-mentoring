"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LinkTest() {
  const router = useRouter();

  return (
    <>
      <div>
        <Link href="/">Link To Main</Link>
      </div>
      <div>
        <button onClick={() => router.push('/')}>onClick To Main</button>
      </div>
      <div>
        <a onClick={e => e.preventDefault()} href="/">A tag to Main</a>
      </div>
    </>
    )
}