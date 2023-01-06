import Link from 'next/link'
import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer className='w-full  bg-stone-900	h-36 relative bottom-0  text-white p-5'>
            <ul className="flex max-md:flex-col max-md:items-center flex-row justify-center gap-2 ">
                <li><Link href="https://www.linkedin.com/in/juannicolasmorales/" className='flex gap-2'> <BsLinkedin/> Linkedin  </Link></li>
                <li><Link href="https://github.com/NicolasMoralesDev?tab=repositories"  className='flex gap-2'> <BsGithub/>Github </Link></li>
            </ul>
            <div className='w-full flex justify-center'>
                <h2 className='absolute bottom-0 pb-3'>© 2023 copyright - Nicolas Morales</h2>

            </div>
        </footer>
    )
}

export default Footer