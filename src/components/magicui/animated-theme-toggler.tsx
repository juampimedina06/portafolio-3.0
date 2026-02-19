"use client";
import { Moon, SunDim } from "lucide-react";
import { useRef } from "react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

declare global {
  interface Document {
    startViewTransition?: (callback: () => void) => { ready: Promise<void> };
  }
}

type Props = { className?: string };

export const AnimatedThemeToggler = ({ className }: Props) => {
  const { theme, setTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isDark = theme === "dark";

  const changeTheme = async () => {
    if (!buttonRef.current) return;
    const nextTheme = isDark ? "light" : "dark";

    if ("startViewTransition" in document && document.startViewTransition) {
      await document.startViewTransition(() => {
        flushSync(() => setTheme(nextTheme));
      }).ready;
    } else {
      setTheme(nextTheme);
    }

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();
    const y = top + height / 2;
    const x = left + width / 2;
    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRad}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 700,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };

  return (
    <button ref={buttonRef} onClick={changeTheme} className={cn("", className)}>
      {isDark ? <SunDim /> : <Moon />}
    </button>
  );
};