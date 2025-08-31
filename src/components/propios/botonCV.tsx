import { RainbowButton } from "../magicui/rainbow-button";

const BotonDescargarCV = () => {
    return (
        <a
        href="/cv-juanpablomedina.pdf" 
        target="_blank"
        className="fixed bottom-4 right-4 z-[2000] "
        >
        <RainbowButton className="text-white dark:text-black">
            Descargar cv
        </RainbowButton>
        </a>

    );
};

export default BotonDescargarCV;
