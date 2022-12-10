import React from 'react'
import Link from 'next/link'


const Portada = () => {
    return (
        <>
        <div className='portada_ovelay relative '>          
            <div className="contenido_ovelay max-md:bottom-1/4 max-md:left-1/4 left-1/3 right-2/4 w-72 gap-4 text-white z-10 flex justify-center items-center max-md:text-center max-md:flex-col">
        <img  src="Postulacion-1-modified - copia.png" width={'100%'} className='max-md:w-2/4'  alt='esta es la imagen de portada' /> 
       <div className="flex flex-col gap-3">
       <h2 className='text-8xl max-md:text-3xl'>Nicolas Morales</h2>
        <p className='text-5xl max-md:text-2xl text-justify'>Desarrollador Full Stack</p>
        <a className='m-3 bg-red-600 rounded-lg h-11 text-center pt-2 '   href='../Juan Nicolas Morales CV - copia.pdf' download="../public/Juan Nicolas Morales CV - copia.pdf" >Descargar cv  </a>
       </div>
            </div>
      
        </div>
        </>
    )
}

export default Portada