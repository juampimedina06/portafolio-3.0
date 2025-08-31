import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/magicui/scroll-based-velocity";
import HtmlLogo from "../lenguajes/Html";
import Talwind from "../lenguajes/Talwind";
import TypescriptLogo from "../lenguajes/Typescript";
import ReactLOGO from "../lenguajes/React";
import CssLogo from "../lenguajes/Css";
import AngularLogo from "../lenguajes/AngularLogo";
import Bostrap from "../lenguajes/Bostrap";
import Charts from "../lenguajes/Charts";
import Csharp from "../lenguajes/Csharp";
import DokerLogo from "../lenguajes/DockerLogo";
import FigmaLogo from "../lenguajes/Figma";
import FirebaseLogo from "../lenguajes/Firebase";
import GitLogo from "../lenguajes/GitLogo";
import JavaLogo from "../lenguajes/Java";
import Javascript from "../lenguajes/JavaScrippt";
import Material from "../lenguajes/Material";
import MySQL from "../lenguajes/MySQL";
import NodeLogo from "../lenguajes/NodeJS";
import Scss from "../lenguajes/Scss";
import SqlServer from "../lenguajes/Sqlserver";
import StyledComponent from "../lenguajes/StyledComponent";
import MagicUI from "../lenguajes/MagicUI";

const logos = [
  HtmlLogo, CssLogo, Javascript, TypescriptLogo, ReactLOGO, AngularLogo, Talwind,
  StyledComponent, Material, Bostrap, Csharp, JavaLogo, FigmaLogo, GitLogo, FirebaseLogo, MySQL, SqlServer, Charts, MagicUI, Scss
];

const MisTecnologias = () => {
  return (
    <div className="py-8">
      <h2 className="sm:text-[3rem] text-[2.5rem]  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                Habilidades Tecnicas</h2>

      <ScrollVelocityContainer className="text-4xl md:text-7xl font-bold overflow-visible mt-8">
        <ScrollVelocityRow baseVelocity={5} direction={1} className="">
          {logos.slice(0, 12).map((Logo, idx) => (
            <div
              key={idx}
              className="p-4 mr-2 rounded-3xl bg-[#02294963] dark:bg-sky-300/25 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 ease-out hover:scale-125 hover:rotate-3 hover:shadow-lg"
            >
              <Logo className="w-16 h-16" />
            </div>
          ))}
        </ScrollVelocityRow>

        <ScrollVelocityRow baseVelocity={7} direction={-1} className="flex gap-6 mt-4">
          {logos.slice(12).map((Logo, idx) => (
            <div
              key={idx}
              className="p-4 mr-2 rounded-3xl bg-[#02264963] dark:bg-sky-300/25 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 ease-out hover:scale-125 hover:-rotate-3 hover:shadow-lg"
            >
              <Logo className="w-16 h-16" />
            </div>
          ))}
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
    </div>
  );
};

export default MisTecnologias;
