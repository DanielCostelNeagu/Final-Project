import React from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import Layout from '../../components/Layout';
import './style.css';
import { NavLink } from 'react-router-dom';
/**
* @author
* @function Home
**/

const Home = (props) => {
  return(
    <Layout >
      <Container fluid>
        <Row>
          <Col md={2} className="sidebar">Side Bar</Col>
          <Col md={10} style ={{marginLeft: "auto"}}>Container</Col>
        </Row>
      </Container>

        {/*<Jumbotron>
            <h1>Welcome</h1>
        </Jumbotron>*/}
    </Layout>
   )

 }

export default Home;