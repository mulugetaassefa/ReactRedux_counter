import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from './cartSlice';

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? <p>Cart is empty</p> : (
        <>
          {cart.map((item) => (
            <div key={item.id}>
              {item.name} x {item.quantity} = ${item.price * item.quantity}
              <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
            </div>
          ))}
          <h3>Total: ${total}</h3>
        </>
      )}
    </div>
  );
}
