import Head from 'next/head'
import Portada from '../components/Portada'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Bienvenidos a mi Pagina web donde muestro mis mejores proyectos y poco mas de mi" />
      </Head>
      <Portada/>
    </div>
  )
}
