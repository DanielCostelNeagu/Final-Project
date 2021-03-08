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
    }
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
    }
    return state;
}