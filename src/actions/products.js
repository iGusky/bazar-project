import { types } from '../types/types';
import { loadLastProducts, loadItem } from "../helpers/loadProducts";

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

const setItem = ( item ) => ({
  type: types.productosLoadItem,
  payload: item
})

export const startLoadingItem = ( idProducto ) => {
  return async ( dispatch ) => {
    const producto = await loadItem( idProducto );
    dispatch( setItem( producto ) )
  }
}