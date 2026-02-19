import React from 'react'
import InfiniteMenu from '../reactbits/InfiniteMenu/InfiniteMenu';

const TecnologiasDestacables = () => {

const items = [
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    imagen_color: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    link: "",
    title: "HTML5",
    stack: ["HTML5"],
    description: "Estructura web semántica",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    imagen_color: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    link: "",
    title: "CSS3",
    stack: ["CSS3"],
    description: "Estilos y diseño visual",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    imagen_color: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    link: "",
    title: "Tailwind CSS",
    stack: ["Tailwind"],
    description: "Framework CSS utility-first",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    imagen_color: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    link: "",
    title: "JavaScript",
    stack: ["JavaScript"],
    description: "Lenguaje de programación",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    imagen_color: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    link: "",
    title: "TypeScript",
    stack: ["TypeScript"],
    description: "Superset tipado de JavaScript",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    imagen_color: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    link: "",
    title: "React",
    stack: ["React"],
    description: "Librería de UI para frontend",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    imagen_color: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    link: "",
    title: "Next.js",
    stack: ["Next.js"],
    description: "Framework React fullstack",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    imagen_color: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    link: "",
    title: "Angular",
    stack: ["Angular"],
    description: "Framework frontend de Google",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    imagen_color: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    link: "",
    title: "React Native",
    stack: ["React Native"],
    description: "Apps móviles con React",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    imagen_color: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    link: "",
    title: "Node.js",
    stack: ["NodeJS"],
    description: "Runtime JavaScript en servidor",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    imagen_color: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    link: "",
    title: "Express",
    stack: ["Express"],
    description: "Framework backend para Node.js",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    imagen_color: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    link: "",
    title: "C#",
    stack: ["C#"],
    description: "Lenguaje backend de Microsoft",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    imagen_color: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    link: "",
    title: "MySQL",
    stack: ["MySQL"],
    description: "Base de datos relacional",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    imagen_color: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    link: "",
    title: "PostgreSQL",
    stack: ["PostgreSQL"],
    description: "Base de datos relacional avanzada",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
    imagen_color: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
    link: "",
    title: "Supabase",
    stack: ["Supabase"],
    description: "Backend as a Service open source",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    imagen_color: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    link: "",
    title: "Git",
    stack: ["Git"],
    description: "Control de versiones",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    imagen_color: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    link: "",
    title: "GitHub",
    stack: ["GitHub"],
    description: "Plataforma de repositorios",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    imagen_color: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    link: "",
    title: "Vercel",
    stack: ["Vercel"],
    description: "Plataforma de deploy",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    imagen_color: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    link: "",
    title: "Figma",
    stack: ["Figma"],
    description: "Diseño UI/UX",
  },
];


  return (
  <div className='bg-gray-900 w-full h-screen'>
    <InfiniteMenu items={items} scale={5} />
  </div>
)

}

export default TecnologiasDestacables