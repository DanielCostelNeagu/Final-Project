import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import MenuHeader from '../MenuHeader'
import './style.css';

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
    <>
      <div className="page-container">
        <div className="content-wrap">
          <Header />
                <MenuHeader />
                {props.children}
        </div> 
        <div className="footer">    
          <Footer />
        </div>
      </div>   
    

    </>
   )

 }

export default Layout