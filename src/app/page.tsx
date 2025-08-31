import Certficaciones from "@/components/layouts/Certficaciones";
import { Contacto } from "@/components/layouts/Contacto";
import { ThreeDMarqueeDemoSecond } from "@/components/layouts/FullScreen";
import MisTecnologias from "@/components/layouts/MisTecnologias";
import Proyectos from "@/components/layouts/Proyectos";
import ContainerFluid from "@/components/ui/ContainerFluid";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center w-[100%]">
        <ThreeDMarqueeDemoSecond />
        <ContainerFluid className="w-[90%] sm:w-[70%] gap-16 flex flex-col">
          <Proyectos />
          <MisTecnologias />
          <Certficaciones />
          <Contacto />
        </ContainerFluid>
    </main>
  );
}
