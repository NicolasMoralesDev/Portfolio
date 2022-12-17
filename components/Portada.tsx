import React from 'react'
import Link from 'next/link'


const Portada = () => {
    return (
        <>
        <div className='portada_ovelay relative flex justify-center items-center  '>          
            <div className="contenido_ovelay w-72 gap-4 text-white z-10  max-md:text-center max-md:flex-col flex flex-row justify-center items-center  ">
        <img  src="Postulacion-1-modified - copia.png" width={'100%'} className='max-md:w-2/4'  alt='esta es la imagen de portada' /> 
       <div className="flex flex-col gap-4">
       <h1 className='text-7xl max-md:text-3xl'>Nicolas Morales</h1>
        <h2 className='text-3xl max-md:text-2xl '>Desarrollador Full Stack</h2>
        <a className='m-3 bg-red-600 rounded-lg h-11 text-center pt-2 '   href='../Juan Nicolas Morales CV - copia.pdf' download="../public/Juan Nicolas Morales CV - copia.pdf" >Descargar cv  </a>
       </div>
            </div>
      
        </div>
        </>
    )
}

export default Portada