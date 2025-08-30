import { RainbowButton } from "../magicui/rainbow-button";

const BotonDescargarCV = () => {
    return (
        <a
        href="/cv-juanpablomedina.pdf" 
        target="_blank"
        className="fixed bottom-4 right-4 z-[2000] bg-transparent  text-white rounded-xl shadow-lg hover:bg-blue-500/40 transition-colors"
        >
        <RainbowButton>
            Descargar cv
        </RainbowButton>
        </a>

    );
};

export default BotonDescargarCV;
