import React, { useEffect, useState } from 'react'
import FlowinMenu from '../reactbits/FlowinMenu/FlowingMenu'

const demoItems = [
  { link: '#', text: 'TecniCatura en Desarrollo de Software', image: '/assets/formaciones/formacion-itsc.png' },
  { link: 'https://drive.google.com/drive/folders/17kyeOAkJFNVwwo9UfG8ksGgFdlsbBxw2', text: 'XAcademy Dev', image: '/assets/formaciones/xacademy.png' },
  { link: '#', text: 'Oracle Next Education Front-end', image: "/assets/formaciones/educacion-alura.png" },
  { link: '#', text: 'Bachiller en economia y administracion', image: 'https://picsum.photos/600/400?random=4' }
];

const CertificacionesNuevas = () => {

  const [isDark, setIsDark] = useState(false);

useEffect(() => {
  const observer = new MutationObserver(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  });
  observer.observe(document.documentElement, { attributeFilter: ['class'] });
  setIsDark(document.documentElement.classList.contains('dark'));
  return () => observer.disconnect();
}, []);

  return (
    <div className='w-full h-[600px] '>
        <FlowinMenu items={demoItems} 
            bgColor={'transparent'}
            textColor={isDark ? '#060010' : '#ffffff'}
            marqueeBgColor={isDark ? '#060010' : '#ffffff'}
            marqueeTextColor={isDark ? '#ffffff' : '#060010'}
            borderColor={isDark ? '#060010' : '#ffffff'}
        />
    </div>
  )
}

export default CertificacionesNuevas




