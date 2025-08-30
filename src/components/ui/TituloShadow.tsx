"use client";

import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { useTheme } from "next-themes";

export interface PropsTitulo{
    textoNormal:string;
    textoEstilizado:string;
}

 

const TituloShadow = ({textoNormal, textoEstilizado}: PropsTitulo) => {
    const theme = useTheme();
    const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black";

    return (
    <h1 className="ml-2 text-1xl font-semibold">
            {textoNormal}
        <LineShadowText className="italic" shadowColor={shadowColor}>
            {textoEstilizado}
        </LineShadowText>
    </h1>
  )
}

export default TituloShadow