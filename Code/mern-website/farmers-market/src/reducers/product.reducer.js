import { productConstants } from "../actions/constants"

const initState = {
    products: [],
    productsByPrice: {
        under2: [],
        under5: [],
        under10: [],
        under20: [],
        under50: [],
        under5000: [],
    },
    
    productDetails: {},
    loading: false,
}

export default (state = initState, action) => {
    switch(action.type){
        case productConstants.GET_PRODUCTS_BY_SLUG:
            state = {
                ...state,
                products: action.payload.products,
                productsByPrice: {
                    ...action.payload.productsByPrice
                }
            }
            break;
        case productConstants.GET_PRODUCT_DETAILS_BY_ID_REQUEST:
            state = {
                ...state,
                loading: true
                }            
            break;
        case productConstants.GET_PRODUCT_DETAILS_BY_ID_SUCCESS:
            state = {
                ...state,
                loading: false,
                productDetails: action.payload.productDetails
                }            
            break;
        case productConstants.GET_PRODUCT_DETAILS_BY_ID_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error
                }            
            break;
    }
    return state;
}