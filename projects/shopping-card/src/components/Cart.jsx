import { useId } from "react";
import { CartIcon, RemoveFromCartIcon, ClearCartIcon } from "./Icons.jsx";
import './cart.css';

export function Cart() {
  const cartCheackboxId = useId();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheackboxId}>
        <CartIcon />
      </label>
      <input id={cartCheackboxId} type="checkbox" hidden />
      <aside className="cart">
        <ul>
          <li>
            <img
              src="https://cdn.dummyjson.com/product-images/25/thumbnail.jpg"
              alt="iPhone"
            />
            <div>
                <strong>iPhone</strong> - $1499
            </div>
            <footer>
                <small>
                    Qty:1
                </small>
                <button>+</button>
            </footer>
          </li>
        </ul>
        <button>
            <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
