import { cn } from "@/lib/utils";
import React from "react";
import NavHeaderMenu from "./NavHeader.Menu";
import NavHeaderBrand from "./NavHeader.Brand";
import ContainerFluid from "../ui/ContainerFluid";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { AnimatedThemeToggler } from "../magicui/animated-theme-toggler";

type Props = {
  positionMenu?: "left" | "right" | "center";
} & React.HTMLAttributes<HTMLElement>;

export default function NavHeader({
  className,
  positionMenu,
  ...props
}: Props) {
  return (
    <nav
      className={cn(
        `bg-background/95 fixed z-[100] flex h-[65px] w-full items-center  justify-center border-b backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-gray-500 dark:supports-[backdrop-filter]:bg-black/60`,
        className
      )}
      {...props}
    >
      <ContainerFluid className="flex justify-between w-[70%] ">
        <div className="flex gap-4">
          <NavHeaderBrand href={"/"}></NavHeaderBrand>
        </div>

        <div className="flex items-center gap-4">
          <div className="preferences  hidden items-center gap-4 md:flex">
          <AnimatedThemeToggler />
          </div>


          <div className="gap-4 sheet-container flex items-center lg:hidden ">
            <AnimatedThemeToggler />
          </div>
        </div>
      </ContainerFluid>
    </nav>
  );
}
