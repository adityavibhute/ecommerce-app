import { storeState } from "./store.constants";

export const initialState = {
    total: 0,
    products: []
};

export const updateProducts = (state = initialState, action) => {
    const {
        type,
        payload,
    } = action;

    switch(type){
        case storeState.ADD_TO_CART:
            return {
                total: payload.total,
                products: payload.products
            }
        case storeState.REMOVE_FROM_CART:
            break;
        default:
            return {...state}
    }
}