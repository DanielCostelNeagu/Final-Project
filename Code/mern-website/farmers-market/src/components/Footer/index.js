import React from 'react';
import './style.css';
import farmersMarketLogo from '../../images/logo/Logo.PNG';
import googleStoreLogo from '../../images/google-store.png';
import appleStoreLogo from '../../images/app-store.png';

/**
* @author
* @function Footer
**/

const Footer = (props) => {
  return (
    <div className="footer">
            <div class="row-2">
                <div class="footer-col-1">
                    <h3>Download The App</h3>
                    <p>Download the Application for Android and IOS devices. </p>
                    <div class="app-logo">
                        <img src={googleStoreLogo} alt=""/>
                        <img src={appleStoreLogo} alt=""/>
                    </div>
                </div>
                <div class="footer-col-2">
                   <img style={{margin: "10px 0" }}src={farmersMarketLogo} alt=""/>
                   <p class="copyright">Copyright 2021 - Farmers Market &#169;</p>
                </div>
                <div class="footer-col-3">
                    <h3 >Useful Links</h3>
                    <ul>
                        <li>Coupons</li>
                        <li>Click and Collect</li>
                        <li>Return Policy</li>

                    </ul>
                </div>
                <div class="footer-col-4">
                    <h3>Follow us</h3>
                    <ul>
                        <li>LinkedIn</li>
                        <li>GitHub</li>
                        <li>Facebook</li>
                    </ul>
                </div>                
            </div>      
    </div>
  );

}

export default Footer