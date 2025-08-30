import React from 'react'

const Certficaciones = () => {
  return (
    <div className='mt-20 flex flex-col items-center mb-20 w-full'>
            <h2 className="relative z-20 mx-auto max-w-4xl text-center text-xl font-bold text-balance text-white md:text-2xl lg:text-4xl"><span className="relative z-20 inline-block rounded-xl bg-blue-500/40 px-4 text-white backdrop-blur-sm">Mis</span>{" "}
            Certificaciones{" "}</h2>
            <div className="w-full mt-10 flex flex-col gap-8 items-center">
  <div className="flex items-center justify-between w-full h-28 border dark:bg-black bg-white/5 backdrop-blur-sm dark:border-white/[0.2] border-black/[0.1] rounded-2xl p-6 shadow-md hover:shadow-lg transition">
    
    {/* Texto */}
    <div className="w-3/4 flex flex-col justify-center">
      <h2 className="text-lg font-semibold text-white dark:text-white">Formación en Santex</h2>
      <p className="text-sm text-gray-400 dark:text-gray-300">
        Programa de capacitación orientado a potenciar habilidades en desarrollo de software.
      </p>
    </div>

    {/* Logo */}
    <div className="w-1/4 flex justify-end items-center">
      <img
        className="drop-shadow-[0_0_12px_rgba(59,130,246,0.7)] bg-white/90 rounded-full p-2 w-16 h-16 object-contain"
        src="/assets/formaciones/xacademy.png"
        alt="XAcademy"
      />
    </div>
  </div>
</div>

    </div>
  )
}

export default Certficaciones