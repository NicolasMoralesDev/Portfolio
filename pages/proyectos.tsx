import React from 'react'
import Head from 'next/head'
import Proyectos from '../components/Proyectos'

const proyectos = () => {
    return (
        <>
            <Head>
                <title>Mis Proyectos</title>
                <meta name="description" content="Estos son mis proyectos realizados en diferentes tecnologias" />
            </Head>
        <Proyectos/>
        </>
    )
}

export default proyectos