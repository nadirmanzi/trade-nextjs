"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { Sun, Moon, ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";

export default function MainNavigation() {
  const { setTheme, theme } = useTheme();

  return (
    <nav className="fixed w-full px-8 h-[3rem] top-2 z-50 flex items-center justify-between transition-all duration-300 ease-in-out">
      <Link
        href="/"
        className="bg-white backdrop-blur-lg px-4 py-1 rounded-full"
      >
        <p className="font-semibold text-lg text-primary">TradeFlow</p>
      </Link>

      <div className="absolute left-1/2 -translate-x-1/2 group space-x-6 flex items-center justify-evenly bg-navigation-background border border-navigation-border rounded-full p-1">
        <div className="flex items-center justify-center space-x-2 group-hover:space-x-0 transition-all duration-200">
          <MainNavigationLink href="/" title="Home" />
          <MainNavigationLink href="/market" title="Market overview" />
          <MainNavigationLink href="/resources" title="Resources" />
          <MainNavigationLink href="/support" title="Support" />
        </div>
        <Button
          variant={"ghost"}
          size="icon"
          className="rounded-full hover:bg-navigation-background-inactive-hover [&>*]:text-navigation-foreground-inactive hover:[&>*]:text-navigation-foreground"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" && <Sun size={18} strokeWidth={2} />}
          {theme === "light" && <Moon size={18} strokeWidth={2} />}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>

      <Link href="/login">
        <Button className="rounded-full">
          <p>Get started</p>
          <ArrowUpRight size={18} strokeWidth={2} />
        </Button>
      </Link>
    </nav>
  );
}

function MainNavigationLink({ href, title }: { href: string; title: string }) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`rounded-full text-sm py-2 px-4 transition-all duration-300 ease-in-out ${
        pathname === href
          ? "font-medium bg-navigation-background-active hover:bg-navigation-background-active-hover text-navigation-foreground-active"
          : "text-navigation-foreground-inactive hover:bg-navigation-background-inactive-hover hover:text-navigation-foreground"
      }`}
    >
      {title}
    </Link>
  );
}
