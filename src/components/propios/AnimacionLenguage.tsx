// AnimacionLenguage.tsx
import React, { ReactNode } from "react";
import styles from "./AnimacionLenguage.module.css";

interface AnimacionLenguageProps {
  lenguaje: string;
  children?: ReactNode;
}

const AnimacionLenguage: React.FC<AnimacionLenguageProps> = ({ lenguaje, children }) => {
  return (
    <div className={styles.contenedor_lenguaje}>
      {children}
      <h2 className={styles.lenguaje}>{lenguaje}</h2>
    </div>
  );
};

export default AnimacionLenguage;
