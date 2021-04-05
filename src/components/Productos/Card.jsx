import React from "react";

export const Card = ({producto}) => {
  const { image, product, seller, price } = producto;
  return (
    <div className="card">
      <img src={image} alt={product} className="mb-2" />
      <p className="product-name mb-2 mt-2">{product}</p>
      <p className="product-seller mb-2">{seller.name}</p>
      <p className="product-price mb-2">$ {price}</p>
    </div>
  );
};
