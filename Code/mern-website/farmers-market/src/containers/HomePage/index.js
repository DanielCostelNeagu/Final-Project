import React from 'react';
import Layout from '../../components/Layout';
import genericVeg from '../../images/generic.jpg';
import vegetables from '../../images/vegetables.jpg';
import fruits from '../../images/fruits.jpg';
import bakery from '../../images/bakery.jpg';

import "./style.css";
/**
* @author
* @function HomePage

**/

const HomePage
  = (props) => {
    return (
      <Layout>
        
        <div className="categories">
          <div className="small-container">
            <div className="row-1" style={{ textAlign: 'center' }} >

              <div className="col-2" >
                <h1>From Farm  <br></br>To Table</h1>
                <p>Locally grown and locally produced</p>

              </div>

              <div className="col-2">
                <img src={genericVeg} alt="generic vegetables" />
              </div>
            </div>
          </div>
        </div>
        
        <h3 style={{ textAlign: 'center' }}>Our Market is serving the local community by providing the best products
                        that are made and outsourced locally by farmers and producers.</h3>
                        
        <br></br>
        <br></br>
        
        <div className="categories">
          <div className="small-container">
            <h2 className="title">Fresh Produces By Categories</h2>
            <div className="row-1" style={{ textAlign: 'center' }}>
              <div className="col-3">
                <img src={vegetables} alt="" />
                <h4>Vegetables</h4>
              </div>
              <div className="col-3">
                <img src={fruits} alt="fruits" />
                <h4>Fruits</h4>

              </div>
              <div className="col-3">
                <img src={bakery} alt="" />
                <h4>Bakery</h4>
              </div>

            </div>
          </div>
        </div>


      </Layout>
    )

  }

export default HomePage
