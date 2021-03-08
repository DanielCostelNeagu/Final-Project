import axios from "../helpers/axios"
import { productConstants } from "./constants";

export const getProductsBySlug = (slug) => {
    return async dispatch =>{
        const res = await axios.get(`/products/${slug}`);
        if (res.status === 200) {
            dispatch({
                type: productConstants.GET_PRODUCTS_BY_SLUG,
                payload: res.data
            });
        }
        /*else{
            dispatch({
                type: 
            })
        }
        */
    }     
        
}
export const getProductPage = (payload ) => {
    return async dispatch =>{
        const { cid, type} = payload;
        const res = await axios.get(`/page/${cid}/${type}`);
        console.log(res);
        if (res.status === 200) {
            
            
        }
        
    }     
        
}