
import { db } from "../firebase/firebaseConfig";

export const loadLastProducts = async () => {
    const productosSnap = await db.collection( 'productos' ).get();
    const productos = [];

    productosSnap.forEach( productoHijo => {
        productos.push({
            id: productoHijo.id,
            ...productoHijo.data()
        })
    });

    return productos;
};

export const loadItem = async ( idProducto ) => {
  const producto = await db.collection( 'productos' ).doc(idProducto).get();
  return producto.data();
}