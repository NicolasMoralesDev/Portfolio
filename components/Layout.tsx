import React, { Fragment } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = (  { children} : any) => {
  return (
    <Fragment>
        <Navbar/>
        {children}
        <Footer/>
    </Fragment>
  )
}

export default Layout