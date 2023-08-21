import {
  REMOVE_PROD,
  ADD_PROD,
  ADD_FAV,
  REMOVE_FAV,
  LOGIN,
  LOGOUT,
} from "./ActionType";

export const AddProdToCart = (el, size) => (dispatch) => {
  dispatch({
    type: ADD_PROD,
    payload: el,
    size: size,
  });
};

export const RemoveProdToCart = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_PROD,
    payload: id,
  });
};

export const AddToFav = (id) => (dispatch) => {
  dispatch({
    type: ADD_FAV,
    payload: id,
  });
};

export const RemoveProdFromFav = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_FAV,
    payload: id,
  });
};
export const loginUser = (userData) => ({
  type: LOGIN,
  payload: userData,
});

export const logoutUser = (dispatch) => dispatch({ type: LOGOUT });
