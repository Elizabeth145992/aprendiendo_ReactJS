import { createContext, useReducer } from "react";
import { cartReducer, initialState } from "../reducers/cart";

export const CartContext = createContext();

function useCartReducer(){
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = product => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })

  const removeFomCart = product => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })

  const cleanCart = () => dispatch({
    type: 'CLEAN_CART'
  })

  return { state, addToCart, removeFomCart, cleanCart }
}

export function CartProvider({ children }) {
  const {state, addToCart, removeFomCart, cleanCart } = useCartReducer();

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        cleanCart,
        removeFomCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
