"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const path = usePathname()
  
  return (
    <nav className="w-full bg-purple-950 px-10 h-14 flex items-center">
      <ul className="text-white flex gap-2 items-center w-full ">
        <Link href="/" className={path === "/" ? "font-medium" : "text-white/80"}>Home</Link>
        <Link href="/form" className={path === "/form" ? "font-medium" : "text-white/80"}>Form</Link>
      </ul>
    </nav>
  );
}
