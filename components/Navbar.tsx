import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-gray-800	text-white w-full h-15 p-3 flex ">
      <ul className='flex w-full justify-center gap-2 '>
       <li><Link href='/'>Home</Link></li> 
       <li> <Link href='/contacto'>Contacto</Link></li>
       <li> <Link href='/proyectos'>Mis Proyectos</Link></li>

      </ul>
        

    </nav>
  )
}

export default Navbar