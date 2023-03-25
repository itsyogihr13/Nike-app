import { ADD_FAV, ADD_PROD, REMOVE_PROD, REMOVE_FAV } from "./ActionType";

let init = {
  cart: [],
  fav: [],
};
export const CartReducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_PROD:
      const isItemInCart = state.cart.find((item) => item.id.id === payload.id);
      if (isItemInCart) {
        return state;
      } else {
        return {
          ...state,
          cart: [
            ...state.cart,
            {
              id: payload,
            },
          ],
        };
      }
    case ADD_FAV:
      const isItemInFav = state.fav.find((item) => item.id.id === payload.id);
      if (isItemInFav) {
        return state;
      } else {
        return {
          ...state,
          fav: [
            ...state.fav,
            {
              id: payload,
            },
          ],
        };
      }
    case REMOVE_PROD: {
      const data = state.cart.filter((el) => el.id.id !== payload);
      return {
        ...state,
        cart: data,
      };
    }
    case REMOVE_FAV: {
      const favData = state.fav.filter((el) => el.id.id !== payload);
      return {
        ...state,
        fav: favData,
      };
    }

    default:
      return state;
  }
};
