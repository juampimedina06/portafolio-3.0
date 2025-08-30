"use client";

import { MagicCard } from '../magicui/magic-card';
import { useTheme } from 'next-themes';
import AnimacionLenguage from '../propios/AnimacionLenguage';
import HtmlLogo from '../lenguajes/Html';
import Talwind from '../lenguajes/Talwind';
import TypescriptLogo from '../lenguajes/Typescript';
import ReactLOGO from '../lenguajes/React';
import CssLogo from '../lenguajes/Css';
import Csharp from '../lenguajes/Csharp';
import SqlServer from '../lenguajes/Sqlserver';
import AngularLogo from '../lenguajes/AngularLogo';
import Bostrap from '../lenguajes/Bostrap';
import NodeLogo from '../lenguajes/NodeJS';

const certificacionesData = [
  {
    title: "Desarrollo en Software",
    description: "Como Técnico Superior en Desarrollo de Software, aprenderé a crear y mantener aplicaciones, trabajando en equipo y resolviendo desafíos reales.",
    logo: "/assets/formaciones/formacion-itsc.png",
    alt: "ITSC logo",
    tecnologias: ["C#","SQLServer",'Typescript','Angular',]
  },
  {
    title: "Formación en Santex (XAcademy)",
    description: "Programa de capacitación Full Stack con Angular, NodeJs y MySQL.",
    logo: "/assets/formaciones/xacademy.png",
    alt: "XAcademy Logo",
    tecnologias: ["Html", "Css", 'Bostrap']
  },
  {
    title: "Desarrollo Front End - Alura y Oracle",
    description: "Curso intensivo cubriendo frontend con React y backend con Node.js.",
    logo: "/assets/formaciones/educacion-alura.png",
    alt: "Alura Logo",
    tecnologias: ["Html", "React"]
  },
  {
    title: "Fundamentos de programación.",
    description: "Validación de conocimientos avanzados en la librería React y estado global.",
    logo: "/assets/formaciones/educacion-integral.png",
    alt: "FreeCodeCamp Logo",
    tecnologias: ["React", "Typescript"]
  },
];

const Certficaciones = () => {
  const { theme } = useTheme();

  return (
    <div className='flex w-full flex-col items-center mb-20 mt-20'>
      {/* Título */}
      <h2 className="relative z-20 mx-auto mb-10 max-w-4xl text-center text-xl font-bold text-balance text-black dark:text-white md:text-2xl lg:text-4xl">
        <span className="relative z-20 inline-block rounded-xl bg-blue-500/40 px-4 text-white backdrop-blur-sm">Mis</span>{" "}
        Certificaciones{" "}
      </h2>

      <div className="flex w-full max-w-4xl flex-col items-center gap-4">
        {certificacionesData.map((cert) => (
  <MagicCard
    key={cert.title} // usar algo único
    gradientColor={theme === "dark" ? "#19aac0" : "#4cd3f5"}
    gradientSize={150}
    className="w-full cursor-pointer rounded-2xl p-0"
  >
    <div className="relative z-10 flex h-40 w-full items-center justify-between rounded-2xl p-6
                    border-2 border-transparent
                    bg-white/80 dark:bg-black/80
                    [background-clip:padding-box]
                  ">
      {/* Texto */}
      <div className="flex w-3/4 flex-col justify-center">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{cert.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{cert.description}</p>
        <div className='flex gap-2 mt-2'>
          {cert.tecnologias.map((tech) => (
            <AnimacionLenguage key={tech} lenguaje={tech}>
              {tech === "Html" && <HtmlLogo className="w-5" />}
              {tech === "Talwind" && <Talwind className="w-5" />}
              {tech === "Typescript" && <TypescriptLogo className="w-5" />}
              {tech === "React" && <ReactLOGO className="w-6" />}
              {tech === 'Css' && <CssLogo className='w-5' />}
              {tech === 'C#' && <Csharp className='w-5' />}
              {tech === 'SQLServer' && <SqlServer className='w-5' />}
              {tech === 'Angular' && <AngularLogo className='w-5' />}
              {tech === 'NodeJS' && <NodeLogo className='w-5' />}
              {tech === 'Bostrap' && <Bostrap className='w-7'/>}
            </AnimacionLenguage>
          ))}
        </div>
      </div>
      <div className="flex w-1/4 items-center justify-end">
        <img
          className="w-50 drop-shadow-[0_0_1px_white] object-contain p-2"
          src={cert.logo}
          alt={cert.alt}
        />
      </div>
    </div>
  </MagicCard>
))}

      </div>
    </div>
  );
};

export default Certficaciones;