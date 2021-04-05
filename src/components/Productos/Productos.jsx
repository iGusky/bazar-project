import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingLastProducts } from "../../actions/products";
import { Card } from "./Card";

export const Productos = () => {
  const { productos } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( startLoadingLastProducts() );
  }, [ ]);

  return (
    <div className="products-grid">
      {
        productos.map( producto => {
          return <Card key={producto.id} producto={producto} />;
        })
      }
    </div>
  );
};
