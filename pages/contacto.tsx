import React from 'react'
import Head from 'next/head'
import Contacto from '../components/Contacto'

const contacto = () => {
  return (
    <>
      <Head>
        <title>contacto</title>
        <meta name="description" content="contactame si queres saber mas sobre mis servicios o proyectos" />
      </Head>
   <Contacto/>
    </>
  )
}

export default contacto