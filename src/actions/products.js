import { db } from "../firebase/firebaseConfig";
import { types } from '../types/types';
import { loadLastProducts } from "../helpers/loadProducts";

export const startLoadingLastProducts = () => {
    return async ( dispatch ) => {
        const productos = await loadLastProducts();
        dispatch( setProductos ( productos ) )
    }
}

export const setProductos = ( productos ) => ({
    type: types.productosLoadLast10,
    payload: productos,
})