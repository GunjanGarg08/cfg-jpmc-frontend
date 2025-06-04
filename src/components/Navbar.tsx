// src/components/Navbar.tsx
"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-indigo-600">
          NGO Connect
        </Link>

        {/* Menu */}
        <div className="flex gap-6 text-sm text-gray-700">
          <Link href="/" className="hover:text-indigo-600">
            Home
          </Link>
          <Link href="/login-user" className="hover:text-indigo-600">
            Citizen Login
          </Link>
          <Link href="/login-admin" className="hover:text-indigo-600">
            Admin Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
