import { cn } from "@/lib/utils";
import React from "react";
import NavHeaderBrand from "./NavHeader.Brand";
import ContainerFluid from "../ui/ContainerFluid";
import { AnimatedThemeToggler } from "../magicui/animated-theme-toggler";
import { BoxReveal } from "../magicui/box-reveal";

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
        ` fixed z-[100] flex h-[65px] w-full  justify-center border-b backdrop-blur bg-transparent`,
        className
      )}
      {...props}
    >
      <ContainerFluid className="flex justify-between w-[100%] ">
        <div className="flex gap-4">
          <NavHeaderBrand href={"/"}></NavHeaderBrand>
        </div>

        <div className="flex items-center gap-4">
          <div className="preferences  hidden items-center gap-4 md:flex">
          <BoxReveal boxColor="transparent">
          <AnimatedThemeToggler />
          </BoxReveal>
          </div>


          <div className="gap-4 sheet-container flex items-center lg:hidden ">
            <AnimatedThemeToggler />
          </div>
        </div>
      </ContainerFluid>
    </nav>
  );
}
