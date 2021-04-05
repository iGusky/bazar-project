import { types } from "../types/types";

const initialState = {
    productos: [],
    active: null
}
export const productsReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.productosLoadLast10:
            return {
                ...state,
                productos:[ ...action.payload ]
            }
    
        default:
            return state;
    }
}