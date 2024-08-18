"use client";

import Activities from "@/components/component/activities";
import SkillIcons from "@/components/component/gh_readme";
import Readme from "@/components/component/readme";
import Pinned from "@/components/component/starred";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import GitHubCalendar from "react-github-calendar";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      <header className="bg-card py-6 px-4 md:px-6 relative">
        {/* Cover Photo */}
        <div
          className="h-48 bg-cover bg-center rounded-sm"
          style={{ backgroundImage: "url('/images/bg.jpg')" }}
        >
          {/* Profile Picture */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-[220px] top-full">
            <Avatar
              className="w-32 h-32 border-4 border-white"
              style={{ borderRadius: "999px" }}
            >
              <AvatarImage src="/images/tylerbert.jpg" alt="@tylerbert31" />
              <AvatarFallback>TB</AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* User Info */}
        <div className="flex flex-col items-center mt-16 gap-1">
          <h1 className="text-2xl font-bold">Tyler Bert Baring</h1>
          <Link
            href="https://github.com/tylerbert31"
            className="text-sm text-muted-foreground"
            target="_blank"
          >
            @tylerbert31
          </Link>
        </div>
      </header>

      <main className="px-4 md:px-6 pt-4 pb-8 grid gap-8">
        <>
          <Readme />
          <SkillIcons />
        </>
        <>
          <Pinned />
        </>
        <>
          <GitHubCalendar username="tylerbert31" colorScheme="light" />
        </>
        <>
          <Activities />
        </>
      </main>
    </div>
  );
}
