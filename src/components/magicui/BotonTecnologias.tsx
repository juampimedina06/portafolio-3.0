import React from 'react'
import { ShimmerButton } from './shimmer-button'

export interface PropBoton{
    lenguaje:string;
}

const BotonTecnologias = ({lenguaje}:PropBoton) => {
  return (
     <ShimmerButton className="shadow-2xl w-auto h-2">
      <p className="text-center  tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-[14px]">
        {lenguaje}
      </p>
    </ShimmerButton>
  )
}

export default BotonTecnologias