"use client";

/**
 * "use client" es necesario porque usamos hooks de React (useEffect, useRef)
 * y librerías del browser (GSAP, window.scrollTo).
 * Next.js por defecto renderiza en el servidor, esto lo fuerza al cliente.
 */

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";

import Certficaciones from "@/components/layouts/Certficaciones";
import { Contacto } from "@/components/layouts/Contacto";
import { ThreeDMarqueeDemoSecond } from "@/components/layouts/FullScreen";
import TecnologiasNuevas from "@/components/layouts/ProyectosNuevos";
import TecnologiasDestacables from "@/components/layouts/TecnologiasDestacables";
import ProyectosNuevos from "@/components/layouts/ProyectosNuevos";
import CertificacionesNuevas from "@/components/layouts/CertificacionesNuevas";

/**
 * Registramos el plugin Observer de GSAP.
 * GSAP funciona con plugins que hay que registrar antes de usarlos.
 * Observer es el que nos permite detectar eventos del usuario como
 * scroll con rueda del mouse, touch en mobile, o drag con el mouse.
 */
gsap.registerPlugin(Observer);

export default function Home() {
  /**
   * containerRef: referencia al div principal que envuelve todas las secciones.
   * Lo usamos para que GSAP pueda acceder al DOM directamente.
   */
  const containerRef = useRef<HTMLDivElement>(null);

  /**
   * isAnimating: bandera (true/false) que actúa como un semáforo.
   * Cuando es TRUE significa que hay una animación en curso y bloqueamos
   * cualquier intento del usuario de seguir scrolleando.
   * Cuando es FALSE la animación terminó y el usuario puede moverse.
   *
   * Usamos useRef en vez de useState porque NO queremos que el componente
   * se re-renderice cuando cambia este valor. Solo necesitamos guardarlo.
   */
  const isAnimating = useRef(false);

  /**
   * currentIndex: guarda en qué sección estamos parados actualmente.
   * Empieza en 0 (primera sección).
   * También usamos useRef por la misma razón que isAnimating.
   */
  const currentIndex = useRef(0);

  useEffect(() => {
    /**
     * gsap.utils.toArray convierte todos los elementos del DOM que tengan
     * la clase "snap-section" en un array de HTMLElement.
     * Esto nos permite recorrerlos, saber cuántos hay, y acceder a su posición.
     *
     * Ejemplo: si tenés 5 secciones, sections = [section0, section1, ..., section4]
     */
    const sections = gsap.utils.toArray<HTMLElement>(".snap-section");
    const totalSections = sections.length;

    /**
     * goToSection es la función principal.
     * Recibe el índice de la sección a la que queremos ir (0, 1, 2, etc.)
     * y se encarga de animar el scroll hasta llegar ahí.
     */
    const goToSection = (index: number) => {
      /**
       * Si isAnimating es TRUE significa que ya hay una animación corriendo.
       * Cortamos la ejecución para no interrumpirla ni apilar animaciones.
       */
      if (isAnimating.current) return;

      /**
       * Validamos que el índice esté dentro del rango válido.
       * Si el usuario está en la primera sección y scrollea arriba, index sería -1.
       * Si está en la última y scrollea abajo, index sería igual a totalSections.
       * En ambos casos no hacemos nada.
       */
      if (index < 0 || index >= totalSections) return;

      // Activamos el semáforo: bloqueamos el scroll del usuario
      isAnimating.current = true;

      /**
       * offsetTop es una propiedad nativa del DOM.
       * Nos dice a cuántos píxeles del top de la página está esa sección.
       * Ejemplo: si la sección 2 empieza a 1080px del top, targetY = 1080.
       */
      const targetY = sections[index].offsetTop;

      /**
       * window.scrollY nos dice en qué posición vertical estamos scrolleados ahora mismo.
       * Es el punto de partida de la animación.
       */
      const startY = window.scrollY;

      /**
       * proxy es un objeto simple que GSAP va a animar.
       * En vez de animar el scroll directamente (que causaba el error),
       * animamos este objeto intermedio.
       * Empieza en la posición actual (startY) y GSAP lo va a llevar hasta targetY.
       */
      const proxy = { y: startY };

      /**
       * gsap.to() es la función de animación de GSAP.
       * Anima el objeto proxy desde su valor actual hasta { y: targetY }.
       *
       * - duration: cuántos segundos dura la animación (0.9 = casi 1 segundo)
       * - ease: el tipo de curva de la animación.
       *   "power2.inOut" significa que arranca lento, se acelera en el medio,
       *   y frena suave al final. Da sensación de movimiento natural.
       * - onUpdate: se ejecuta en CADA FRAME de la animación (60 veces por segundo).
       *   Acá es donde realmente movemos la página usando window.scrollTo nativo.
       * - onComplete: se ejecuta UNA SOLA VEZ cuando la animación termina.
       *   Acá actualizamos currentIndex y liberamos el semáforo.
       */
      gsap.to(proxy, {
        y: targetY,
        duration: 0.9,
        ease: "power2.inOut",
        onUpdate: () => {
          /**
           * En cada frame de la animación, le decimos al browser que scrollee
           * a la posición Y que GSAP calculó para ese frame.
           * Así el scroll se ve fluido y controlado.
           */
          window.scrollTo(0, proxy.y);
        },
        onComplete: () => {
          // Guardamos en qué sección quedamos
          currentIndex.current = index;
          // Liberamos el semáforo: el usuario ya puede scrollear de nuevo
          isAnimating.current = false;
        },
      });
    };

    /**
     * Observer.create() crea un detector de eventos del usuario.
     * Lo configuramos para que intercepte el scroll y llame a goToSection.
     *
     * - type: qué eventos escucha.
     *   "wheel" = rueda del mouse
     *   "touch" = dedo en mobile
     *   "pointer" = drag con mouse
     *
     * - preventDefault: TRUE significa que cancela el scroll nativo del browser.
     *   Sin esto, el browser scrollearía normalmente Y además correría nuestra animación.
     *   Con esto, solo corre nuestra animación.
     *
     * - onDown: se dispara cuando el usuario scrollea HACIA ABAJO.
     *   Le sumamos 1 al índice actual para ir a la sección siguiente.
     *
     * - onUp: se dispara cuando el usuario scrollea HACIA ARRIBA.
     *   Le restamos 1 al índice actual para ir a la sección anterior.
     *
     * - tolerance: cuántos píxeles tiene que moverse el usuario para que
     *   se considere un scroll intencional. Evita disparos accidentales.
     */
    Observer.create({
      type: "wheel,touch",
      preventDefault: true,
      onDown: () => goToSection(currentIndex.current + 1),
      onUp: () => goToSection(currentIndex.current - 1),
      tolerance: 10,
    });

    /**
     * El return del useEffect es la función de limpieza (cleanup).
     * Se ejecuta cuando el componente se desmonta (el usuario navega a otra página).
     * Matamos todos los Observers activos para no dejar listeners de eventos huérfanos,
     * lo cual causaría memory leaks y comportamiento inesperado.
     */
    return () => {
      Observer.getAll().forEach((o) => o.kill());
    };
  }, []); 
  /**
   * El array vacío [] como segundo parámetro del useEffect significa
   * que este efecto solo se ejecuta UNA VEZ, cuando el componente se monta.
   * Sin esto se ejecutaría cada vez que el componente re-renderiza,
   * creando múltiples Observers apilados.
   */

  return (
    /**
     * El div principal con ref={containerRef} le da a GSAP acceso al DOM.
     * Aunque en este caso no lo usamos directamente en el código,
     * es buena práctica tenerlo para posibles extensiones futuras.
     */
    <div ref={containerRef}>

      {/**
       * Cada sección tiene la clase "snap-section" que es la que GSAP
       * busca con gsap.utils.toArray(".snap-section").
       *
       * h-screen = height: 100vh → ocupa toda la altura de la pantalla.
       * Esto es CLAVE para que el snap funcione correctamente.
       * Si las secciones no ocupan 100vh, los saltos no van a coincidir
       * con el inicio de cada sección.
       */}
      <section className="snap-section h-screen w-full flex items-center justify-center">
        <ThreeDMarqueeDemoSecond />
      </section>

      <section className="snap-section h-screen w-full flex items-center justify-center">
          {/*<Proyectos />*/}
          <TecnologiasDestacables />
      </section>

      <section className="snap-section h-screen w-full flex items-center justify-center">
          {/*<MisTecnologias />*/}
           <ProyectosNuevos />
      </section>

      <section className="snap-section h-screen w-full flex items-center justify-center">
          {/* <Certficaciones /> */}
          <CertificacionesNuevas />
      </section>

      <section className="snap-section h-screen w-full flex items-center justify-center">
        <div className="w-full sm:w-[70%]">
          <Contacto />
        </div>
      </section>
    </div>
  );
}