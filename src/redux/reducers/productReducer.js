import { PRODUCTS_ACTIONS } from '../actions/types';

const initialProductState = {
  products: [],
  loading: false,
  error: null,
};

export const productReducer = (
  state = initialProductState,
  { type, payload }
) => {
  switch (type) {
    case PRODUCTS_ACTIONS.SET_PRODUCTS:
      return { ...state, products: payload, error: null };
    case PRODUCTS_ACTIONS.SET_LOADING:
      return { ...state, loading: payload };
    case PRODUCTS_ACTIONS.SET_ERROR:
      return { ...state, error: payload, products: [] };
    default:
      return state;
  }
};

const initialSelectedProductState = {
  product: null,
  loading: false,
  error: null,
};

export const selectedProductReducer = (
  state = initialSelectedProductState,
  { type, payload }
) => {
  switch (type) {
    case PRODUCTS_ACTIONS.SELECTED_PRODUCT:
      return { ...state, product: payload, error: null };
    case PRODUCTS_ACTIONS.REMOVE_SELECTED_PRODUCT:
      return { ...initialSelectedProductState };
    case PRODUCTS_ACTIONS.SET_LOADING:
      return { ...state, loading: payload };
    case PRODUCTS_ACTIONS.SET_ERROR:
      return { ...state, error: payload, product: null };
    default:
      return state;
  }
};
