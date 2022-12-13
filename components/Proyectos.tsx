import React from 'react'

const Proyectos = () => {
  return (
    <div className=' w-full h-1/5 flex flex-col items-center justify-center p-5 gap-3'>
      <h2 className='text-5xl'> Mis Trabajos</h2>
      <div className='flex text-white bg-black proyectos_container  h-1/2 p-3 gap-5 flex-wrap rounded-lg'>

        
        <div className='flex flex-col  bg-blue-900 w-60 gap-3 p-3' >
         <img src="proyecto1.PNG" alt="nnnnnnn" width={'100%'} />
         <h2>Zion Urbano</h2>
        <p>E- commers completo para el negocio Zion Urbano</p>
        <a href='https://zion-urbano.vercel.app/'>visitar </a>
        <p>descripcion descripcion</p>
        </div>
        <div className='flex flex-col  bg-blue-900 w-60 gap-3 p-3' >
         <img src="proyecto2.PNG" alt="nnnnnnn" width={'100%'} />
         <h2>Hoxton Pizzeria</h2>
        <p>E- commers de Restaurante desarrollado con React en el Front end y Express en el Backend. como Proyecto final de cursado de Desarrollo Full stack en Rolling Code.</p>
        <a href='hoxton.netlify.app/'>visitar </a>
        <p>descripcion descripcion</p>
        </div>
        <div className='flex flex-col  bg-blue-900 w-60 gap-3 p-3' >
         <img src="proyecto3.PNG" alt="nnnnnnn" width={'100%'} />
         <h2>To Do List</h2>
        <p>To Do List desarrollada con JavaScript vanilla.</p>
        <a href='https://to-do-list1-nicolas-morales.netlify.app/'>visitar </a>
        <p>descripcion descripcion</p>
        </div>
        <div className='flex flex-col  bg-blue-900 w-60 gap-3 p-3' >
         <img src="proyecto4.PNG" alt="nnnnnnn" width={'100%'} />
         <h2>Agencia de Turismo Jujuy</h2>
        <p>Landing Page de Agencia de Viajes en Jujuy. Sin ningun framework</p>
        <a href='https://nicolasmoralesdev.github.io/Agencia-landing-page/'>visitar </a>
        <p>descripcion descripcion</p>
        </div>
       
      </div>
    </div>
  )
}

export default Proyectos