import Link from "next/link";
import React from "react";
import TituloShadow from "../ui/TituloShadow";
import { BoxReveal } from "../magicui/box-reveal";

type Props = {} & React.ComponentProps<typeof Link>;

export default function NavHeaderBrand({ href, ...props }: Props) {
  return (
    
      <Link
      href={href}
      {...props}
      className="flex items-center justify-center"
      aria-label="Home Link"
    >    
    <BoxReveal boxColor="transparent">
      <img
        src="/assets/logos/traje.jpg"
        className="h-[40px] w-[40px] rounded-full object-cover"
      ></img>
    </BoxReveal>
      <BoxReveal boxColor="transparent">
      <TituloShadow textoNormal="Juan Pablo" textoEstilizado="Medina" />
      </BoxReveal>

    </Link>
  );
}
