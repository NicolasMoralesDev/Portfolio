import React from 'react'

const Proyectos = () => {
  return (
    <div className='proyectos_fondo w-full h-1/5 flex flex-col items-center justify-center p-5 gap-3'>
      <h2 className='text-5xl font-bold text-center'> MIS TRABAJOS DESTACADOS</h2>
      <div className='flex proyectos_container  h-1/2 p-3 gap-5 flex-wrap rounded-lg'>
        <div className='flex flex-col proyecto_card  w-60 gap-3 p-3' >
          <img src="proyecto1.PNG" alt="proyecto1" width={'100%'} />
          <h2 className='font-extrabold'>Zion Urbano</h2>
          <p>E- commers completo para el negocio Zion Urbano</p>
          <div className="flex flex-col items-center w-full justify-end h-full">
            <a href='https://zion-urbano.vercel.app' className='bg-red-700 w-full text-white text-center h-9 p-1'>visitar </a>
          </div>
          <p></p>
        </div>
        <div className='flex flex-col proyecto_card w-60 gap-3 p-3' >
          <img src="proyecto2.PNG" alt="proyecto2" width={'100%'} />
          <h2 className='font-extrabold'>Hoxton Pizzeria</h2>
          <p>E- commers de Restaurante desarrollado con React en el Front end y Express en el Backend. como Proyecto final de cursado de Desarrollo Full stack en Rolling Code.</p>
          <div className="flex flex-col items-center w-full justify-end h-full">
            <a href='https://hoxton.netlify.app' className='bg-red-700 w-full text-white text-center h-9 p-1'>visitar </a>
          </div>
          <p></p>
        </div>
        <div className='flex flex-col proyecto_card  w-60 gap-3 p-3' >
          <img src="proyecto3.PNG" alt="proyecto3" width={'100%'} />
          <h2 className='font-extrabold'>To Do List</h2>
          <p>To Do List desarrollada con JavaScript vanilla.</p>
          <div className="flex flex-col items-center w-full justify-end h-full">

            <a href='https://to-do-list1-nicolas-morales.netlify.app' className=' w-full bg-red-700 text-white text-center h-9 p-1'>visitar </a>
          </div>
          <p></p>
        </div>
        <div className='flex flex-col proyecto_card  w-60 gap-3 p-3' >
          <img src="proyecto4.PNG" alt="proyecto4" width={'100%'} />
          <h2 className='font-extrabold'>Agencia de Turismo Jujuy</h2>
          <p>Landing Page de Agencia de Viajes en Jujuy. Sin ningun framework</p>
          <div className="flex flex-col items-center w-full justify-end h-full">
            <a href='https://nicolasmoralesdev.github.io/Agencia-landing-page' className='w-full bg-red-700 text-white text-center h-9 p-1'>visitar </a>
          </div>
          <p></p>
        </div>
        <div className='flex flex-col proyecto_card  w-60 gap-3 p-3' >
          <img src="proyecto5.PNG" alt="proyecto5" width={'100%'} />
          <h2 className='font-extrabold'>Landing Page Hotel</h2>
          <p>Landing Page de Hotel usando Boostrap</p>
          <div className="flex flex-col items-center w-full justify-end h-full">

            <a href='https://hotel-magnus.vercel.app' className='w-full bg-red-700 text-white text-center h-9 p-1'>visitar </a>
          </div>
          <p></p>
        </div>

      </div>
    </div>
  )
}

export default Proyectos