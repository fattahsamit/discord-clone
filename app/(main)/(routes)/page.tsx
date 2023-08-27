"use client";
import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/clerk-react";

export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
    </div>
  );
}
