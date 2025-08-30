import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { ReactNode } from "react";

export interface PropBoton{
    texto:string;
    children?:ReactNode;
    href: string;
    className:string;
}

const BotonHover = ({texto, children, href, className} : PropBoton) => {
  return (
    <a
    href={href}
    target="__blank"
    >
        <InteractiveHoverButton className={className}>
        <div className="flex gap-2">
            {texto}
            {children}
        </div>
        </InteractiveHoverButton>
    </a>
    
  )
}

export default BotonHover