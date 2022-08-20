import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import ItemList from '../ItemList/ItemList';

const itemListConteiner = () => {

  const [products, setproducts] = useState([])

  const cars =[{
    id: 1,
    nombre:"EcoSport",
    description:"Este novedoso e innovador motor de 1.5L y 3 cilindros se estrena en la Ecosport. Está compuesto principalmente de aluminio, dando como resultado un motor considerablemente liviano. Ofrece una potencia de 123 CV y un torque de 151 Nm. Entre sus principales beneficios se resaltan: la tecnología aplicada para lograr un excelente valor de potencia, el bajo consumo de combustible y la baja emisión de contaminantes.",
    precio:"$ 4.088.000",
    marca:"Ford",
    image:"https://www.ford.com.ar/content/ford/ar/es_ar/home/crossovers-suvs-4x4/nueva-ecosport/jcr:content/par/splitter/splitter0/image/image.imgs.full.high.jpg/1628634849708.jpg"
  },{
    id: 2,
    nombre:"Maverick",
    description:"La nueva Maverick cuenta con un diseño y equipamiento interior único que permite mejorar la experiencia de cada usuario.",
    precio:"$ 6.635.000",
    marca:"Ford",
    image:"https://www.ford.com.ar/content/ford/ar/es_ar/home/crossovers-suvs-4x4/maverick/jcr:content/par/splitter_1152209378/splitter0/image/image.imgs.full.high.png/1645047681297.png"
  },{
    id:3,
    nombre:"Territory​",
    description:"Diseño exterior robusto,  SYNC Touch, La combinación perfecta de diseño y funcionalidad",
    precio:"$ 7.879.000",
    marca:"Ford",
    image:"https://www.ford.com.ar/content/ford/ar/es_ar/home/crossovers-suvs-4x4/territory/jcr:content/par/splitter/splitter1/image/image.imgs.full.high.jpg/1660067274561.jpg"
  },{
    id: 1,
    nombre:"EcoSport",
    description:"Este novedoso e innovador motor de 1.5L y 3 cilindros se estrena en la Ecosport. Está compuesto principalmente de aluminio, dando como resultado un motor considerablemente liviano. Ofrece una potencia de 123 CV y un torque de 151 Nm. Entre sus principales beneficios se resaltan: la tecnología aplicada para lograr un excelente valor de potencia, el bajo consumo de combustible y la baja emisión de contaminantes.",
    precio:"$ 4.088.000",
    marca:"Ford",
    image:"https://www.ford.com.ar/content/ford/ar/es_ar/home/crossovers-suvs-4x4/nueva-ecosport/jcr:content/par/splitter/splitter0/image/image.imgs.full.high.jpg/1628634849708.jpg"
  },{
    id: 1,
    nombre:"EcoSport",
    description:"Este novedoso e innovador motor de 1.5L y 3 cilindros se estrena en la Ecosport. Está compuesto principalmente de aluminio, dando como resultado un motor considerablemente liviano. Ofrece una potencia de 123 CV y un torque de 151 Nm. Entre sus principales beneficios se resaltan: la tecnología aplicada para lograr un excelente valor de potencia, el bajo consumo de combustible y la baja emisión de contaminantes.",
    precio:"$ 4.088.000",
    marca:"Ford",
    image:"https://www.ford.com.ar/content/ford/ar/es_ar/home/crossovers-suvs-4x4/nueva-ecosport/jcr:content/par/splitter/splitter0/image/image.imgs.full.high.jpg/1628634849708.jpg"
  },{
    id: 1,
    nombre:"EcoSport",
    description:"Este novedoso e innovador motor de 1.5L y 3 cilindros se estrena en la Ecosport. Está compuesto principalmente de aluminio, dando como resultado un motor considerablemente liviano. Ofrece una potencia de 123 CV y un torque de 151 Nm. Entre sus principales beneficios se resaltan: la tecnología aplicada para lograr un excelente valor de potencia, el bajo consumo de combustible y la baja emisión de contaminantes.",
    precio:"$ 4.088.000",
    marca:"Ford",
    image:"https://www.ford.com.ar/content/ford/ar/es_ar/home/crossovers-suvs-4x4/nueva-ecosport/jcr:content/par/splitter/splitter0/image/image.imgs.full.high.jpg/1628634849708.jpg"
  }
  ]

  
  useEffect(()=>{
    
    const task = new Promise((resolve,reject)=>{
    
        setTimeout(()=>{
          resolve(cars)
        },2000)
    
      })
    
        task.then( req => setproducts(req))
        task.catch( err=> console.log(err))    
    
      return()=>{
        console.log("err");
      }
     },[]);
    
  return (
    <div>
        <ItemList products={products}/>
    </div>
  )
}

export default itemListConteiner