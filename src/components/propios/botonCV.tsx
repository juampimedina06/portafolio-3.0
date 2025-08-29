import { useState } from "react";

const BotonDescargarCV = () => {

    return (
    <a
        href="/cv-juanpablomedina.pdf" 
        target="_blank"
        className="fixed border border-sky-600 bottom-4 right-4 z-[2000] bg-transparent  text-white p-3 rounded-xl shadow-lg hover:bg-blue-500/40 transition-colors"
        >
        Descargar cv 📄
        </a>
    );
};

export default BotonDescargarCV;
