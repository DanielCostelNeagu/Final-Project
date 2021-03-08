import React from 'react';
import Header from "../Header";
import {Container, Row, Col} from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import './style.css';



/**
* @author
* @function Layout
**/


const Layout = (props) => {
  return (
    <>
      <Header />
      {
        props.sidebar ?
          <Container fluid>
            <Row>
              <Col md={2} className="sidebar">
                <ul>
                  <li>
                    <NavLink exact to={"/"}>HOME</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/page"}>PAGE</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/category"}>CATEGORY</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/products"}>PRODUCTS</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/orders"}>ORDERS</NavLink>
                  </li>
                </ul>
              </Col>
              <Col md={10} style={{ marginLeft: "auto",  paddingTop: '60px' }}>
              {props.children}
              </Col>
            </Row>
          </Container>
          :
          props.children
      }

      
      {/*here I can add with a div the footer*/}
    </>
  )

}

export default Layout;