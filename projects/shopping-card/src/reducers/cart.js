
export const initialState = JSON.parse(window.localStorage.getItem('cart')) || [];

export const CART_ACTION_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAN_CART: 'CLEAN_CART' 
}

//update localStorage with state for cart
export const upadateLocalStorage = state =>{
    window.localStorage.setItem('cart', JSON.stringify(state));
}
export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;

  switch (actionType) {
    case CART_ACTION_TYPES.ADD_TO_CART:
      {
        const { id } = actionPayload;
        const productInCartIndex = state.findIndex(item => item.id === id);

        if (productInCartIndex >= 0) {
          const newstate = structuredClone(state);
          newstate[productInCartIndex].quantity++;
          upadateLocalStorage(newstate);
          return newstate;
        }

        const newstate = [
            ...state,
            {
                ...actionPayload,
                quantity: 1
            }
        ]

        upadateLocalStorage(newstate);
        return newstate;
      }

      case CART_ACTION_TYPES.REMOVE_FROM_CART :{
        const {id} = actionPayload;
        const newstate =  state.filter(item => item.id !== id);
        upadateLocalStorage(newstate);
        return newstate;
      }

      case CART_ACTION_TYPES.CLEAN_CART:{
        upadateLocalStorage([]);
        return [];
      }
  }
  return state;
};