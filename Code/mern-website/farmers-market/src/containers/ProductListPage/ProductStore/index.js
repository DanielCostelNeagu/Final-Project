import React ,{useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsBySlug } from '../../../actions';
import Card from "../../../components/UI/Card";
import { generatePublicUrl } from '../../../urlConfig';
import './style.css';
import {Link} from "react-router-dom";
import { MdEuroSymbol } from 'react-icons/md';

/**
* @author
* @function ProductStore

**/

const ProductStore = (props) => {

    const product = useSelector(state => state.product);
    const [priceRange, setPriceRange] = useState({
        under2: 2,
        under5: 5,
        under10: 10,
        under20: 20,
        under50: 50,
        under5000: 5000,
    });

    const dispatch = useDispatch();

    useEffect(() => {
        const { match } = props;
        dispatch(getProductsBySlug(match.params.slug));
    }, []);

  return(
    <>
         {
                Object.keys(product.productsByPrice).map((key, index) => {
                    return(
                        <Card 
                            headerLeft={`${props.match.params.slug} products under Euro ${priceRange[key]}`}
                            headerRight={<button>View All</button>}
                            style={{
                                width: "calc(100% - 40px)",
                                margin: "20px",
                            }}
                            >  
                            <div style={{ display: 'flex'}}>
                                {
                                    product.productsByPrice[key].map(product =>
                                        <Link 
                                        to= {`/${product.slug}/${product._id}/p`}
                                        style={{
                                            display: 'block'
                                            }} className="productContainer">
                                            <div className="productImgContainer">
                                                <img src={generatePublicUrl(product.productPictures[0].img)} alt="" />
                                            </div>                                        
                                            <div className="productInfo">
                                                <div style={{ margin: '5px 0' }}>{product.name}</div>
                                                <div>
                                                    <span>4.9</span>&nbsp;
                                                    <span>394</span>
                                                </div>
                                                <div className="productPrice">{product.price}</div>
                                            </div>
                                        </Link>
                                    )
                                }
                            </div>
                        </Card>
                    );
                })
            } 
    </>
   )

 }

export default ProductStore
