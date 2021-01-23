import React from 'react';

import Header from "../Header";



/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
    <>
        <Header />
        
            {props.children}
        
        
        {/*here I can add with a div the footer*/}
    </>
   )

 }

export default Layout;