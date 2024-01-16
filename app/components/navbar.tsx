"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <nav className="w-full bg-purple-950 px-10 h-14 flex items-center">
      <ul className="text-white flex gap-2 items-center w-full ">
        <Link href="/">Home</Link>
        <Link href="/form">Form</Link>
      </ul>
    </nav>
  );
}
