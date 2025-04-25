import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../cart/cartSlice';

export default function ProductList() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          {product.name} - ${product.price}
          <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
