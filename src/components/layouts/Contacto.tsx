"use client";
import React from "react";
import BotonHover from "../ui/BotonHover";
import { BoxReveal } from "../magicui/box-reveal";

export function Contacto() {
  return (
    <div className="h-[24rem] w-full rounded-md relative flex flex-col items-center justify-center antialiased overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/5 dark:bg-gradient-to-b from-white to-transparent z-20" />

        <div className="max-w-2xl mx-auto p-4 flex flex-col items-center relative z-30">
          <BoxReveal boxColor="1122330">
          <h1 className="sm:text-[7rem] text-[4rem] bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">Contactame</h1>
          </BoxReveal>
          <BoxReveal boxColor="1122330">
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
            Si te interesa charlar sobre proyectos, colaborar en ideas nuevas o simplemente conectar, podés escribirme y con gusto te voy a responder. Estoy abierto a propuestas laborales, intercambiar experiencias y seguir creciendo en el mundo del desarrollo.
          </p>
          </BoxReveal>
        </div>
      
      <BoxReveal boxColor="1122330">
        <BotonHover
        texto="WhatsApp"
        href="https://wa.me/5493516598216"
        className="bg-transparent border-2 border-green-500 relative z-30 mt-4 dark:text-white"
      />
      </BoxReveal>
    </div>
  );
}

