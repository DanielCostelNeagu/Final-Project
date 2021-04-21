import React from 'react'
import Layout from '../../components/Layout';
import getParams from '../../utils/getParams';
import ProductStore from './ProductStore';
import StoreEssentials from "./StoreEssentials";
import ProductPage from "./ProductPage";
import './style.css';

/**
* @author
* @function ProductListPage
**/

const ProductListPage = (props) => {

    const renderProduct = () => {
      console.log(props);
      const params = getParams(props.location.search);
      let content = null;
      switch (params) {
        case "store":
          content = <ProductStore {...props} />;
          break;
        case "page":
          content = <ProductPage {...props} />;
          break;
        default:
          content = <StoreEssentials {...props} />;
      }
  
      return content;
    };
  
    return <Layout>{renderProduct()}</Layout>;
  };

export default ProductListPage