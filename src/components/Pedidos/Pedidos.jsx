import React, { useEffect, useState } from 'react'
import { clienteAxios } from '../../config/axios';

export const Pedidos = () => {
  const [pedidos, setPedidos] = useState([]);

  const obtenerPedidos = async () => {
    const pedidosResponse = await clienteAxios.get('/pedidos');
    console.log(pedidosResponse.data);
    setPedidos(pedidosResponse.data);
  };

  useEffect(() => {
    obtenerPedidos()
  }, [])

  return (
    <div className='container'>
      <h1>Lista de pedidos desde mongo</h1>
      <table className='table'>
        <thead className='table__header'>
          <tr className='table__header__row'>
            <th>Solicitado por</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody className='body'>
         
            {
              pedidos && (
                pedidos.map((pedido,index) => {
                  return (
                    <tr className='table__body__row'>
                      <td>{pedido.cliente}</td>
                      <td>{pedido.pedido[0].producto.product}</td>
                      <td>{pedido.pedido[0].cantidad}</td>
                      <td>{pedido.pedido[0].producto.price}</td>
                    </tr>
                  )
                })
              ) 
            }

        </tbody>
      </table>
    </div>
  )
}
