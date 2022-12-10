import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 	text-white w-full h-16 p-5 flex ">
      <ul className='flex w-full justify-center gap-2 '>
        <li><Link  id='home' className='active:font-bold' href='/' >Home</Link></li> 
        <li> <Link id='/contacto'className='target:font-bold' href='/contacto'>Contacto</Link></li>
        <li> <Link id='/proyectos'className='target:font-bold' href='/proyectos'>Mis Proyectos</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar