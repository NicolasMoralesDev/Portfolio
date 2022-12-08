import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-gray-800	text-white w-full h-15 p-3 flex ">
      <ul className='flex w-full justify-center '>
     <li className='pr-3'><Link href='/'>Home</Link></li> 
       <li className='pr-3'> <Link href='/'>Contacto</Link></li>
       <li className='pr-3'> <Link href='/'>Mis Proyectos</Link></li>
  
      </ul>
        

    </nav>
  )
}

export default Navbar