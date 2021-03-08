import React from 'react'
import Layout from '../../components/Layout';
import getParams from '../../utils/getParams';
import ProductStore from './ProductStore';
import './style.css';

/**
* @author
* @function ProductListPage
**/

const ProductListPage = (props) => {

    const renderProduct = () => {
        console.log(props);
        const params = getParams(props.location.search);
        console.log(params);
    }

    return (
        <Layout>
                  <ProductStore {...props} />
                  {renderProduct()}
        </Layout >
    )
}

export default ProductListPage