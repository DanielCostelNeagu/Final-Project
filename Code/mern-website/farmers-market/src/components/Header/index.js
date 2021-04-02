import React, { useEffect, useState } from 'react';
import './style.css';
import farmersMarketLogo from '../../images/logo/Logo.PNG';
import goldenStar from '../../images/logo/favicon.ico.PNG';
import { IoIosArrowDown, IoIosCart, IoIosSearch } from 'react-icons/io';
import {
  Modal,
  MaterialInput,
  MaterialButton,
  DropdownMenu
} from '../MaterialUI';
import { useDispatch, useSelector } from 'react-redux';
import { login, signout } from '../../actions/auth.actions';

/**
* @author
* @function Header
**/

const Header = (props) => {

  const [loginModal, setLoginModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const userLogin = () => {
    dispatch(login({ email, password }));
  }

  const logout = () => {
    dispatch(signout());
  }

  useEffect(() => {
    if (auth.authenticate) {
      setLoginModal(false)
    }
  }, [auth.authenticate]);

  const renderLoggedInMenu = () => {
    return (
      <DropdownMenu
        menu={
          <a className="fullName">
            {auth.user.fullName}
          </a>
        }
        menus={[
          { label: 'My Profile', href: '', icon: null },
          { label: 'Farmers Market Plus Zone', href: '', icon: null },
          { label: 'Orders', href: '', icon: null },
          { label: 'Wishlist', href: '', icon: null },
          { label: 'Rewards', href: '', icon: null },
          { label: 'Gift Cards', href: '', icon: null },
          { label: 'Logout', href: '', icon: null , onClick: logout },
        ]}        
      />
    );
  }

  const renderNonLoggedInMenu = () => {
    return (
      <DropdownMenu
        menu={
          <a className="loginButton" onClick={() => setLoginModal(true)}>
            Login
              </a>
        }
        menus={[         
          { label: 'Farmers Market Plus Zone', href: '', icon: null },
          { label: 'Wishlist', href: '', icon: null },
          { label: 'Rewards Program', href: '', icon: null },
          { label: 'Buy a Gift Card', href: '', icon: null },
        ]}
        firstMenu={
          <div className="firstmenu">
            <span>New Customer?</span>
            <a style={{ color: '#2874f0' }}>Sign Up</a>
          </div>
        }
      />
    );
  }

  return (
    <div className="header">
      <Modal
        visible={loginModal}
        onClose={() => setLoginModal(false)}
      >
        <div className="authContainer">
          <div className="row">
            <div className="leftspace">
            
              <h2>Login</h2>
              <p>Get access to your Orders, Wishlist and Recommendations</p>
            
            </div>
            <div className="rightspace">

              <MaterialInput
                type="text"
                label="Enter Email/Enter Mobile Number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <MaterialInput
                type="password"
                label="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                rightElement={<a href="#">Forgot?</a>}
              />
              <MaterialButton
                title="Login"
                bgColor="#0c8108"
                textColor="#ffffff"
                style={{
                  margin: '40px 0'
                }}
                onClick={userLogin}
              />
              
              <p>Login to get access to your Orders, Wishlist and Recommendations</p>
            

            </div>
          </div>
        </div>
      </Modal>
      <div className="subHeader">
        <div className="logo">
          <a href="">
            <img src={farmersMarketLogo} className="logoimage" alt="" />
          </a>


        </div>
        <div style={{
          padding: '0 10px'
        }}>
          <div className="searchInputContainer">
            <input
              className="searchInput"
              placeholder={'Search for products'}
            />
            <div className="searchIconContainer">
              <IoIosSearch style={{
                color: '#2874f0'
              }} />
            </div>

          </div>
        </div>
        <div className="rightMenu">
         { auth.authenticate ?
         renderLoggedInMenu() : renderNonLoggedInMenu()}
          <DropdownMenu
            menu={
              <a className="more">
                <span>More</span>
                <IoIosArrowDown />
              </a>
            }
            menus={[
              { label: 'Notification Preference', href: '', icon: null },
              { label: 'Sell on Farmers Market', href: '', icon: null },
              { label: '24x7 Customer Care', href: '', icon: null },
              { label: 'Advertise', href: '', icon: null },
              { label: 'Download App', href: '', icon: null }
            ]}
          />
          <div>
            <a className="cart">
              <IoIosCart />
              <span style={{ margin: '0 10px' }}>Cart</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  )

}

export default Header