import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = [];
const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;

  switch (actionType) {
    case "ADD_TO_CART":
      {
        const { id } = actionPayload;
        const productInCartIndex = state.findIndex(item => item.id === id);

        if (productInCartIndex >= 0) {
          const newstate = structuredClone(state);
          newstate[productInCartIndex].quantity++;
          return newstate;
        }

        return[
            ...state,
            {
                ...actionPayload,
                quantity: 1
            }
        ]
      }

      case 'REMOVE_FROM_CART':{
        const {id} = actionPayload;
        return state.filter(item => item.id != id)
      }

      case 'CLEAN_CART':{
        return initialState;
      }
  }
  return state;
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = product => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })

  const removeFomCart = product => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })

  const cleanCart = dispatch({
    type: 'CLEAN_CART'
  })

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
