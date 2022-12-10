import React from 'react'
import Image from 'next/image'


const Portada = () => {
    return (
        <>
        <div className='  portada_ovelay relative '>
        <img  src="graphic-design-studio-gb01777763_1920.jpg"  className=' h-full w-full'   alt='esta es la imagen de portada' /> 
          
            <div className="absolute top-1/4 left-2/4 right-2/4 w-52 gap-4 text-white z-10 flex justify-center items-center">
        <img  src="graphic-design-studio-gb01777763_1920.jpg" width={'59%'}   alt='esta es la imagen de portada' /> 
        <h2 className='text-7xl'>hola mundo</h2>

            </div>
      
        </div>
        </>
    )
}

export default Portada