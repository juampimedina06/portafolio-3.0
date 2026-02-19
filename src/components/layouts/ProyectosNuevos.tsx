import React from 'react'
import CircularGallery from '../reactbits/CircularGallery/CircularGallery'

const items = [
  { image: "https://picsum.photos/seed/1/800/600", text: "Item 1" },
  { image: "https://picsum.photos/seed/2/800/600", text: "Item 2" },
  { image: "https://picsum.photos/seed/3/800/600", text: "Item 3" },
  { image: "https://picsum.photos/seed/4/800/600", text: "Item 4" },
  { image: "https://picsum.photos/seed/5/800/600", text: "Item 5" },
  { image: "https://picsum.photos/seed/6/800/600", text: "Item 6" },
  { image: "https://picsum.photos/seed/7/800/600", text: "Item 7" },
  { image: "https://picsum.photos/seed/8/800/600", text: "Item 8" },
];

const ProyectosNuevos = () => {
  return (
    <div style={{width: '100%', height: '600px', position: 'relative' }}>
        <CircularGallery 
         items={items}
         bend={3} 
         textColor="#ffffff" 
         borderRadius={0.05} 
         scrollEase={0.02}
         scrollSpeed={2}
        />
    </div>
  )
}

export default ProyectosNuevos