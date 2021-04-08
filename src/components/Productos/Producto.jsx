import React, { useEffect, useState } from 'react'
import { loadProduct } from '../../helpers/loadProducts'

export const Producto = ( props ) => {
  
  const { idProducto } = props.match.params
  const [producto, setProducto] = useState({});


  useEffect(() => {
    // Hacer con redux
  }, [])

  return (
    <div>
      
    </div>
  )
}
