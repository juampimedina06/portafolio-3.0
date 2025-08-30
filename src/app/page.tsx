import Certficaciones from "@/components/layouts/Certficaciones";
import { ThreeDMarqueeDemoSecond } from "@/components/layouts/FullScreen";
import Proyectos from "@/components/layouts/Proyectos";
import ContainerFluid from "@/components/ui/ContainerFluid";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center w-[100%]">
        <ThreeDMarqueeDemoSecond />
        <ContainerFluid className="w-[90%] sm:w-[70%]">
          <Proyectos />
          <Certficaciones />
        </ContainerFluid>
    </main>
  );
}
