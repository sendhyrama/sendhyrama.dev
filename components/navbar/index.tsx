"use client";

import imageAvatar from "@/public/assets/home.png";
import { defaultMetadata } from "@/site.config";
import { cn } from "@/utils/ui";
import Image from "next/image";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import { MobileSheetButton } from "./mobile-sheet-button";
import { NavItem } from "./nav-item";
import { routes } from "./routes";
import { navbarContainerClassNames } from "./styles";
import { ThemeButton } from "./theme-button";

type Props = ComponentPropsWithoutRef<"nav">;

export function Navbar({ className, ...props }: Props) {
  return (
    <nav
      className={cn(
        "container flex items-center gap-x-2 py-4 text-sm",
        "pointer-events-none [&>*]:pointer-events-auto",
        className,
      )}
      {...props}
    >
      <Link
        href="/"
        className={cn(
          "group overflow-hidden max-sm:hidden",
          "h-9 w-9 rounded-full border border-zinc-500/25 shadow-md",
          "bg-zinc-500/25 transition hover:bg-primary-500/50",
        )}
        role="group"
      >
        <Image
          src="https://lh3.googleusercontent.com/pw/AP1GczNtLwHFqsUTOLrDcLyPi0ALY9hawZEW_UstQDbOz4po4S62sjmQmAzlk1nJrhxTm0M-3NvrLGQt2xZOma3abYVzWbjaWRWhiiPpqsFWzcRw-39NPyXGFWSspdWg_juzXlaL82X3MRzGDMdk83q87sbyHP7LQt4MXuLCC6A6MuOU9mhZasTWL8NsDwQI6IZprrIzv3xZqJ5NcVeSJFWQohqGcBg87XFwstfhyzotJbVwNIHMT7h6gYWjwqB7JPvUW50q2Nx40AW-8hsILnWDjBRlTA9RCzvVfCRnVJ2EUNUyeB8OvTy-d-o_ZkhTKyt_x64zy78GRP--1plzeM6oh9KaqkT2gNAS-sOH34ybIrBw_pP9HaBQ3ENdITxJDPSaPJzcTKctS0WCU9q1iG9vBrA0oMOw2o0iC-2gr8UxABa5gLS0cH6Zv2Oq6CekWeGgxwW4_FQIgaot5jOvXp7xZNvmU5VRWHXf2gYdmXbnhEMtAZumxBs5ghMGVrrnV5EaYNUY3-j7nZ37cPemKbbZumze-qwWvUMzRGj81hoagC9p-QtxnRltB_2Xt9-6W4jxBliCqhu-4p5gT5zQZs79m3F6_O9veClyR8_MzHhOhuWFV9MZJ9BvuYPi-KOVYYzz_TZBIp8EzN6B0oMRrY0xQ7uT2g3s3Cvxp7cMdpJLEKJN3mNmFw0m35cyCQ-wzh6fgAi0o4-DhwJRyYsW0CdzIjnVYmjhW5dVFn48CgwtCtF0T4AjQ73oVVM0zEaeXaC5_KWoYtOMHZ9mhRWUv6JwwTC0fE7ZAElH89zmd3KZawkJQZuzOayrpl_1Hmg7Q5Clv9V4eq-bgG5rYRezOgk7r8QDyoMdj_HbgylA7IdFkkvwgVV0ohuTV9l6HeWuZCTLeg3vBV62e85SgFnqv6ZeXCAl=w512-h512-s-no-gm?authuser=0"
          // src={imageAvatar}
          width={36}
          height={36}
          alt={defaultMetadata.title}
          className="pointer-events-none"
        />
      </Link>
      <ul className={navbarContainerClassNames}>
        {routes.map((route, i) => (
          <li
            key={i}
            className="max-sm:hidden"
          >
            <NavItem {...route} />
          </li>
        ))}
        <li className="sm:hidden">
          <MobileSheetButton />
        </li>
      </ul>
      <div className={cn(navbarContainerClassNames, "px-2")}>
        <ThemeButton />
      </div>
    </nav>
  );
}
