import { cards } from "@/components/layouts/card.data";
import { ThreeDCardDemo } from "@/components/layouts/cards-3d";
import { ThreeDMarqueeDemoSecond } from "@/components/layouts/FullScreen";
import ContainerFluid from "@/components/ui/ContainerFluid";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
          <ThreeDMarqueeDemoSecond />
        <ContainerFluid>
          <div className="flex flex-col justify-center">
            <div className="flex flex-col justify-center items-center mt-20">
              <h2 className="relative z-20 mx-auto max-w-4xl text-center text-xl font-bold text-balance text-white md:text-2xl lg:text-4xl"><span className="relative z-20 inline-block rounded-xl bg-blue-500/40 px-4 text-white backdrop-blur-sm">Proyectos</span>{" "}
                Destacados{" "}</h2>
              <p className="relative z-20 mx-auto max-w-2xl py-4 text-center text-sm text-neutral-500 md:text-base">Aquí se muestran algunos de mis trabajos recientes que muestran mis habilidades.</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex gap-4">
                <ThreeDCardDemo
                  key={1}
                  titulo="Catalogo de autos Autoadministrable"
                  descripcion="Pagina para un cliente que tiene una consesionaria para que los clientes puedan ver sus autos y redirigirlos a WhatsApp, ademas que sus empleados puedan administrar los autos"
                  imagen="/assets/paginas/pagina-autos.jpg"
                  repo="https://github.com/juampimedina06/catalogo-de-autos"
                  demo=""
                />
                <ThreeDCardDemo
                  key={2}
                  titulo="Encuesta con dashboard para Municipalidad"
                  descripcion="Proyecto con el objetivo de implementes el metodo SCRUM con mis compañeros de la facultad, yo me encargue de hacer le estructura y la logica de angular y los partes funcionales(Dashboard, Login, Formulario), otro compañero el backend y otros estilizar el nav, inicio y footer"
                  imagen="/assets/paginas/pagina.muni.jpg"
                  repo="https://github.com/juampimedina06/municipalidad"
                  demo="https://municipalidad-xi.vercel.app/"
                />
              </div>
              <div className="flex gap-4 mt-4">
                <ThreeDCardDemo
                  key={3}
                  titulo="Clon de Netflix"
                  descripcion="proyecto final del curso de alura, donde se implemento una pagina web para ver peliculas, con un buscador y un reproductor de video."
                  imagen="/assets/paginas/proyecto-aluraflix.png"
                  repo="https://github.com/juampimedina06/aluraflix"
                  demo="https://aluraflix-eight-sage.vercel.app/"
                />
                <ThreeDCardDemo
                  key={4}
                  titulo="Clon de Mercado libre"
                  descripcion="Mercado Week es una página web inspirada en Mercado Libre, creada como parte del desafío Alura Week. Utiliza HTML, CSS y JavaScript, con una API fake para gestionar productos"
                  imagen="/assets/paginas/mercado-week.png"
                  repo="https://github.com/juampimedina06/mercado-libre-week-"
                  demo="https://mercado-libre-week.vercel.app/"
                />
              </div>
            
            


            </div>
          </div>
          
        </ContainerFluid>
    </main>
  );
}
