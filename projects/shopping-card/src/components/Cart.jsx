import { useId } from "react";
import { CartIcon, RemoveFromCartIcon, ClearCartIcon } from "./Icons.jsx";
import { useCart } from '../hooks/useCart.js'
import './cart.css';

function CartItem({thumbnail, title, price, quantity, addToCart }){
    return(
      <li>
            <img
              src={thumbnail}
              alt={title}
            />
            <div>
                <strong>{title}</strong> - {price}
            </div>
            <footer>
                <small>
                    Qty: {quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>
          </li>
    )
  }

export function Cart() {
  const cartCheackboxId = useId();
  const { cart, cleanCart, addToCart } = useCart();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheackboxId}>
        <CartIcon />
      </label>
      <input id={cartCheackboxId} type="checkbox" hidden />
      <aside className="cart">
        <ul>
          {cart.map(product => (
            <CartItem 
            key={product.id}
            addToCart={() => addToCart(product)}
            {...product} 
            />
          ))}
        </ul>
        <button onClick={cleanCart}>
            <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
