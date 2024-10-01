"use client";
import ThemeToggle from "@/components/theme/ThemeToggle";
import Link from "next/link";

export default function TopNav() {
  return (
    <nav className="nav shadow justify-content-between mb-2">
      <div className="d-flex justify-content-start">
        <Link href="/" className="nav-link">
          🌀Next Blog
        </Link>

        <Link href="/blog/create" className="nav-link">
          Write a Blog
        </Link>
      </div>

      <div className="d-flex justify-content-center">
        <Link href="/register" className="nav-link">
          Register
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
