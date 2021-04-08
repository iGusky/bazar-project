import React from "react";
import { Link } from "react-router-dom";

export const Card = ({producto}) => {
  const { id, image, product, seller, price } = producto;
  return (
    <div className="card">
      <Link to = {`/item/${id}`} className="image-div">
        <img src={image} alt={product} className="mb-2" />
      </Link>
      <div>
        <Link to = {`/item/${id}`}>
          <p className="product-name mb-2 mt-2">{product}</p>
        </Link>
        <p className="product-seller mb-2">{seller.name}</p>
        <p className="product-price mb-2">$ {price}</p>
      </div>
    </div>
  );
};
