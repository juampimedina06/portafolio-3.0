import { cn } from "@/lib/utils";
import React from "react";
import NavHeaderMenu from "./NavHeader.Menu";
import NavHeaderBrand from "./NavHeader.Brand";
import ContainerFluid from "../ui/ContainerFluid";
import { Button } from "../ui/button";
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
import ButtonToggleTheme from "../user-preferences/ButtonToggleTheme";

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
      <ContainerFluid className="flex justify-between">
        <div className="flex gap-4">
          <NavHeaderBrand href={"/"}></NavHeaderBrand>
          <NavHeaderMenu className="hidden lg:block"></NavHeaderMenu>
        </div>

        <div className="flex items-center gap-4">
          <div className="preferences  hidden items-center gap-4 md:flex">
            <ButtonToggleTheme></ButtonToggleTheme>
          </div>


          <div className="sheet-container flex items-center lg:hidden ">
            <Sheet>
              <SheetTrigger>
                <Menu></Menu>
              </SheetTrigger>
              <SheetContent className="pt-20">
                <SheetHeader>
                  <Link className="text-lg" href={"/"}>Inicio</Link>
                  <Link className="text-lg" href={"/Proyectos"}>Proyectos</Link>
                  <Link className="text-lg" href={"/Habilidades"}>Habilidades</Link>
                  <Link className="text-lg" href={"/Contacto"}>Contacto</Link>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </ContainerFluid>
    </nav>
  );
}
