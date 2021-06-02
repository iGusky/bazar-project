import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startLoadingItem } from "../../actions/products";
import { clienteAxios } from "../../config/axios";
import Swal from "sweetalert2";

export const Producto = (props) => {
  const { idProducto } = props.match.params;
  const dispatch = useDispatch();

  const item = useSelector((state) => state.products?.item);
  const {name} = useSelector((state) => state.auth);

  const handleAgragarPedido = () => {
    const data = {
      cliente: name,
      pedido: [{producto: {...item,idProducto}, cantidad: 1}],
      total: item.price
    }
    const respuesta = clienteAxios.post('/pedidos', data);
    console.log(respuesta);
    Swal.fire({
      icon: "success",
      title: 'Exito',
      text: 'Pedido agregado'
    });
  }

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
        <button className="producto__agregar-a-carrito mt-3"
        onClick={handleAgragarPedido}>
          <i class="fas fa-shopping-cart"></i>
          &nbsp;
          Comprar
        </button>
      </div>
    </div>
  );
};
