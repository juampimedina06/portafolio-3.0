import { ThreeDMarqueeDemoSecond } from "@/components/layouts/FullScreen";
import Proyectos from "@/components/layouts/Proyectos";
import ContainerFluid from "@/components/ui/ContainerFluid";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
          <ThreeDMarqueeDemoSecond />
        <ContainerFluid>
          <Proyectos />
          
        </ContainerFluid>
    </main>
  );
}
