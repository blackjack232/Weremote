import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Header from './components/header'
import Home from './Home/index'
import SaludProvider from './context/provider'
import Search from './components/search'
import { HelmetProvider } from 'react-helmet-async';

export default function App() {


  const [estadoMenus, setEstadoMenuS] = useState();

  const handleEstadoMenu = async (estado) => {

    setEstadoMenuS(estado);


  }

  useEffect(() => {

    handleEstadoMenu();
  }, [])


  return (
    <HelmetProvider>
      <div className='w-[100%]'>
        <Head>
      
          <title>Revista De Buenos Habitos para tú Salud y Belleza</title>
          <meta
           name="description" 
           content="Revista De Buenos Habitos para tú Salud y Belleza"
            />
           
          <link rel="canonical" href="/Principal"/>
          <link rel="icon" href="/icono.png" />
        </Head>

        <Header estadoMenu={handleEstadoMenu} />


        {!estadoMenus ? (< Home />) : (<SaludProvider><Search /></SaludProvider>)}

        {/* <div className='pt-[200px]'>
        eso!!!!
         <PageSearch/>

      </div> */}



        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Creado por FAEG{' '}
            <span className={styles.logo}>
              <Image src="/icono.png" alt="Logo Salud y vida" width={40} height={40} />
            </span>
          </a>
        </footer>
      </div>
    </HelmetProvider>
  )
}
