import React, { useEffect, useState } from 'react';
import './style.css';
import farmersMarketLogo from '../../images/logo/Logo.PNG';
import { IoIosArrowDown, IoIosCart, IoIosSearch } from 'react-icons/io';
import {
  Modal,
  MaterialInput,
  MaterialButton,
  DropdownMenu
} from '../MaterialUI';
import { useDispatch, useSelector } from 'react-redux';
import { login, signout, signup as _signup } from '../../actions/auth.actions';
import Cart from "../UI/Cart";
import { Link } from 'react-router-dom';

/**
* @author
* @function Header
**/

const Header = (props) => {

  const [loginModal, setLoginModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useSelector(state => state.auth);
  const [signup, setSignup] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const userLogin = () => {
    if (signup) {
      userSignup();
    } else {
      dispatch(login({ email, password }));
    }
  }

  const logout = () => {
    dispatch(signout());
  }

  const userSignup = () => {
    const user = { firstName, lastName, email, password };
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      return;
    }
    dispatch(_signup(user));
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
          { label: 'Orders', href: `/account/orders`, icon: null },
          { label: 'Wishlist', href: '', icon: null },
          { label: 'Rewards', href: '', icon: null },
          { label: 'Gift Cards', href: '', icon: null },
          { label: 'Logout', href: '', icon: null, onClick: logout },
        ]}
      />
    );
  }

  const renderNonLoggedInMenu = () => {
    return (
      <DropdownMenu
        menu={
          <a className="loginButton" onClick={() => {
            setSignup(false);
            setLoginModal(true)
          }}>
            Login
              </a>
        }
        menus={[
          {
            label: 'Farmers Market Plus Zone', href: '', icon: null,
            onClick: () => {
              !auth.authenticate && setLoginModal(true);
            },
          },
          {
            label: 'Wishlist', href: '', icon: null,
            onClick: () => {
              !auth.authenticate && setLoginModal(true);
            },
          },
          {
            label: 'Rewards Program', href: '', icon: null,
            onClick: () => {
              !auth.authenticate && setLoginModal(true);
            },
          },
          {
            label: 'Buy a Gift Card', href: '', icon: null,
            onClick: () => {
              !auth.authenticate && setLoginModal(true);
            },
          },
        ]}
        firstMenu={
          <div className="firstmenu">
            <span>New Customer?</span>
            <a onClick={() => {
              setLoginModal(true);
              setSignup(true);
            }}
              style={{ color: '#4B0082' }}>Sign Up</a>
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

              <div className="loginInputContainer">
                {auth.error && (
                  <div style={{ color: "red", fontSize: 12 }}>{auth.error}</div>
                )}
                {signup && (
                  <MaterialInput
                    type="text"
                    label="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                )}
                {signup && (
                  <MaterialInput
                    type="text"
                    label="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                )}
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
                  rightElement={<Link to="#">Forgot details?</Link>}
                />
                <MaterialButton
                  title={signup ? "Register" : "Login"}
                  bgColor="#0c8108"
                  textColor="#ffffff"
                  style={{
                    margin: '40px 0'
                  }}
                  onClick={userLogin}
                />
                <p /*style={{textAlign: 'center'}}*/>REGISTER to get Recommendations and More</p>
                
                  <MaterialButton
                    title={signup ? "LOGIN" : "REGISTER" }
                    bgColor="#0c8108"
                    textColor="#ffffff"
                    onClick={() => {
                      setLoginModal(true);
                      setSignup(true);
                      //userSignup(true);
                    }}
                    style={{
                      margin: "20px 0",
                    }}
                  />
                 


              </div>
            </div>
          </div>
        </div>
      </Modal>
      <div className="subHeader">
        <div className="logo">
          <Link to={'/'}>
            <img src={farmersMarketLogo} className="logoimage" alt="" />
          </Link>


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
                color: '#4B0082'
              }} />
            </div>

          </div>
        </div>
        <div className="rightMenu">
          {auth.authenticate ?
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
            <Link to={`/cart`} className="cart">

              <Cart count={Object.keys(cart.cartItems).length} />
              <span style={{ margin: '0 10px' }}></span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  )

}

export default Header