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
import DokerLogo from '../lenguajes/DockerLogo';
import GitLogo from '../lenguajes/GitLogo';
import StyledComponent from '../lenguajes/StyledComponent';
import MySQL from '../lenguajes/MySQL';
import Javascript from '../lenguajes/JavaScrippt';
import FigmaLogo from '../lenguajes/Figma';
import JavaLogo from '../lenguajes/Java';
import Material from '../lenguajes/Material';
import BotonTecnologias from '../magicui/BotonTecnologias';
import { BoxReveal } from '../magicui/box-reveal';

const certificacionesData = [
  {
    title: "Desarrollo en Software",
    description: "Como Técnico Superior en Desarrollo de Software, aprenderé a crear y mantener aplicaciones, trabajando en equipo y resolviendo desafíos reales.",
    logo: "/assets/formaciones/formacion-itsc.png",
    alt: "ITSC logo",
    tecnologias: ["C#","SQLServer",'Typescript','Angular'],
    estado:"Cursando"
  },
  {
    title: "Formación en Santex (XAcademy)",
    description: "Voy a formarme como desarrollador fullstack, aprendiendo a crear y dar estilo a aplicaciones web, conectar el frontend con el backend y trabajar en equipo con metodologías ágiles.",
    logo: "/assets/formaciones/xacademy.png",
    alt: "XAcademy Logo",
    tecnologias: ["Html", "Css", 'Typescript', 'Angular','Doker','Git', 'Bostrap', 'NodeJS', 'Mysql'],
    estado:"cursando"
  },
  {
    title: "Desarrollo Front End - Alura y Oracle",
    description: "Curso intensivo cubriendo frontend Javascript y React.",
    logo: "/assets/formaciones/educacion-alura.png",
    alt: "Alura Logo",
    tecnologias: ["Html", 'Css','JavaScript',"React", 'Git', 'Styled', 'Figma', 'Material'],
    estado:'Finalizado'
  },
];

const Certficaciones = () => {
  const { theme } = useTheme();

  return (
    <div className='flex w-full flex-col items-center mb-36 mt-20 '>
      <BoxReveal boxColor="1122330">
          <h2 className="sm:text-[3rem] text-[2.5rem]  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">Mis Certificaciones</h2>                
      </BoxReveal>
      

      <div className="flex w-full max-w-4xl flex-col items-center gap-2">
        {certificacionesData.map((cert) => (
          <BoxReveal boxColor='1122330' key={cert.title}>
  <MagicCard
    key={cert.title} // usar algo único
    gradientColor={theme === "dark" ? "rgb(95, 196, 255)" : "#29b1ff" }
    gradientSize={180}
    className="w-full cursor-pointer rounded-2xl p-0"
  >
    <div className="relative z-10 flex sm:h-auto w-full items-center justify-between rounded-2xl p-6
                    border-2 border-transparent
                    dark:bg-white/55 bg-black/55
                    [background-clip:padding-box]
                  ">
      {/* Texto */}
      <div className="flex w-3/4 flex-col justify-center">
        <div className='flex gap-2 items-center'>
                  <h3 className="text-lg font-semibold dark:text-slate-900 text-white">{cert.title}</h3>
                  <button className='h-[17px] text-[10px] border border-white/[0.2] dark:border-black/[0.1] rounded-xl w-auto px-2' >{cert.estado}</button>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">{cert.description}</p>
        <div className='flex gap-2 flex-wrap mt-4'>
          {cert.tecnologias.map((tech) => (
            <div key={tech} className=''>
              {tech === 'Git' && <BotonTecnologias lenguaje={tech} /> }
              {tech === "Html" && <BotonTecnologias lenguaje={tech} />}
              {tech === 'Css' && <BotonTecnologias lenguaje={tech} />}
              {tech === 'Styled' && <BotonTecnologias lenguaje={tech} />}
              {tech === "Talwind" && <BotonTecnologias lenguaje={tech} />}
              {tech === "Typescript" && <BotonTecnologias lenguaje={tech} />}
              {tech === "React" && <BotonTecnologias lenguaje={tech} />}
              {tech === 'C#' && <BotonTecnologias lenguaje={tech} />}
              {tech === 'SQLServer' && <BotonTecnologias lenguaje={tech} />}
              {tech === 'Angular' && <BotonTecnologias lenguaje={tech} />}
              {tech === 'NodeJS' && <BotonTecnologias lenguaje={tech} />}
              {tech === 'Bostrap' && <BotonTecnologias lenguaje={tech} />}
              {tech === 'Doker' && <BotonTecnologias lenguaje={tech} />}
              {tech === 'Mysql' && <BotonTecnologias lenguaje={tech} />}
              {tech == 'JavaScript' && <BotonTecnologias lenguaje={tech} />}
              {tech === 'Figma' && <BotonTecnologias lenguaje={tech} /> }
              {tech === 'Java' && <BotonTecnologias lenguaje={tech} />}
              {tech === 'Material' && <BotonTecnologias lenguaje={tech} />}
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-1/4 items-center justify-end">
        <img
          className="w-50 drop-shadow-[0px_2px_0px_white] object-contain p-1"
          src={cert.logo}
          alt={cert.alt}
        />
      </div>
    </div>
  </MagicCard>
      </BoxReveal>

))}

      </div>
    </div>
  );
};

export default Certficaciones;