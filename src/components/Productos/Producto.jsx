import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startLoadingItem } from "../../actions/products";

export const Producto = (props) => {
  const { idProducto } = props.match.params;
  const dispatch = useDispatch();

  const item = useSelector((state) => state.products?.item);

  console.log(item);
  useEffect(() => {
    dispatch(startLoadingItem(idProducto));
  }, []);

  return (
    <div className="producto__container">
      <img 
        src={item?.image} 
        alt={item?.product} 
        className="producto__imagen" 
      />
      <div className="producto__informacion-contenedor">
        <p className="producto__nombre mt-2">{item?.product}</p>
        <p className="producto__precio mt-2">${ item?.price }</p>
        <p className="producto__descripcion mt-2">{ item?.description }</p>
        <p className="producto__vendedor mt-2">Vendedor&nbsp;	 
          <Link 
            to = { `/seller/${item?.seller._id}` }
            className="producto__vendedor-link">
            { item?.seller.name }
          </Link>
        </p>
        <button className="producto__agregar-a-carrito mt-3">
          <i class="fas fa-shopping-cart"></i>
          &nbsp;
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};
