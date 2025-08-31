"use client";
import React from "react";
import BotonHover from "../ui/BotonHover";
import { Vortex } from "../ui/Bortex";

export function Contacto() {
  return (
    <div className="h-[30rem] w-full rounded-md bg-transparent relative flex flex-col items-center justify-center antialiased">
        <Vortex >
      <div className="max-w-2xl mx-auto p-4 flex flex-col items-center">
        <h1 className="relative z-10 sm:text-[7rem] text-[4rem]  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Contactame
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Si te interesa charlar sobre proyectos, colaborar en ideas nuevas o simplemente conectar, podés escribirme y con gusto te voy a responder. Estoy abierto a propuestas laborales, intercambiar experiencias y seguir creciendo en el mundo del desarrollo.
        </p>
        <BotonHover 
        texto="WhatsApp"
        href="https://wa.me/5493516598216"
        className="bg-transparent border-2 border-green-500 relative z-10 mt-4  placeholder:text-neutral-700"
        />
        {/* <
          type="text"
          placeholder="hi@manuarora.in"
          className="
        /> */}
      </div>
      </Vortex>
    </div>
  );
}
