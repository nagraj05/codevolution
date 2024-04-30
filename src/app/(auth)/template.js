"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({ children }) {
  const pathname = usePathname();
  const [input, setInput] = useState("");

  return (
    <div className="p-4">
        <div>
            <input value={input} onChange={e => setInput(e.target.value)} className="p-1 text-black font-bold"/>
        </div>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.name}
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
