"use client";

import React, { ReactNode } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { BorderBeam } from "../magicui/border-beam";


export interface PropsCards{
  titulo: string;
  descripcion:string;
  imagen:string;
  repo?:string;
  demo:string;
  children: ReactNode;
}

export function ThreeDCardDemo({titulo, descripcion, imagen, repo, demo, children}: PropsCards) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-sm:w-[auto] h-auto rounded-xl p-4 border  ">
        
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {titulo}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="truncate w-auto text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {descripcion}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={imagen}
            height="1000"
            width="1000"
            className="h-52 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="flex text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
        {children}

        </CardItem>
        
        <div className="flex justify-between items-center ">
          <CardItem
            translateZ={20}
            as="a"
            href={demo}
            target="__blank"
            className="gap-2 dark:border-white/30 border-black/10 border flex items-center px-4 py-2 rounded-xl text-xs font-normal dark:text-white/80 text-white bg-black/100 "

          >
            demo<svg viewBox="0 0 256 222" width="10" height="10" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path fill="#fff" d="m128 0 128 221.705H0z"/></svg> 
          </CardItem>
          <CardItem
            href={repo}
            translateZ={20}
            as="a"
            target="__blank"
            className="flex gap-2 px-4 py-2 rounded-xl bg-black/80 dark:bg-white/10 dark:text-white/80 text-white text-xs font-bold"
          >
            repositorio <svg width="16" height="16" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="#ffff"/></svg>
          </CardItem>
          
        </div>
      </CardBody>
      
    </CardContainer>
  );
}
