import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getProductsBySlug } from "../../../actions";
import { getProductDetailsById } from '../../../actions';
import Card from "../../../components/UI/Card";
import { MdEuroSymbol } from 'react-icons/md';
import { Link } from "react-router-dom";
import "./style.css";
import { generatePublicUrl } from '../../../urlConfig';

/**
* @author
* @function StoreEssentials
**/

const StoreEssentials = (props) => {
    const product = useSelector((state) => state.product);
    const dispatch = useDispatch();
  
    useEffect(() => {
      const { match } = props;
      dispatch(getProductsBySlug(match.params.slug));
    }, []);
  
    return (
      
      <div style={{ padding: "10px" }}>
        <br></br>
        <br></br>
        <Card
          style={{
            boxSizing: "border-box",
            padding: "10px",
            display: "flex",
          }}
        >
          {product.products.map((product, item, thumb, img) => (
            <div className="caContainer">
              <Link
                className="caImgContainer"
                to={`/${product.slug}/${product._id}/p`}
              >
                
                <img  //src={product.productPictures[0].img}
                    src={generatePublicUrl(product.productPictures[0].img)} alt="IMG"
                   // src={generatePublicUrl(product.img)} alt=""
                  //src={generatePublicUrl(img)} alt={thumb.img } 
                 // src={generatePublicUrl(thumb.img)} alt={thumb.img}
                 // src={generatePublicUrl(product.productDetails.productPictures[0].img)} alt={`${product.productDetails.productPictures[0].img}`}
                />
                </Link>
              <div>
                <div className="caProductName">{product.name}</div>
                <div className="caProductPrice">
                  <MdEuroSymbol />  
                  {product.price}
                </div>
              </div>
            </div>
          ))}
        </Card>
      </div>
    );

 }

export default StoreEssentials