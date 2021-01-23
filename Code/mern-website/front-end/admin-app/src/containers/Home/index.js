import React from 'react'
import { Jumbotron } from 'react-bootstrap';
import Layout from '../../components/Layout';

/**
* @author
* @function Home
**/

const Home = (props) => {
  return(
    <Layout>
        <Jumbotron>
            <h1>Welcome</h1>
        </Jumbotron>
    </Layout>
   )

 }

export default Home;