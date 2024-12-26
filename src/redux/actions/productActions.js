import axios from 'axios';
import { PRODUCTS_ACTIONS } from './types';

const api = axios.create({
  baseURL: 'https://fakestoreapi.com'
});

export const fetchProducts = () => async (dispatch) => {
  dispatch({ type: PRODUCTS_ACTIONS.SET_LOADING, payload: true });
  try {
    const response = await api.get('/products');
    dispatch({
      type: PRODUCTS_ACTIONS.SET_PRODUCTS,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: PRODUCTS_ACTIONS.SET_ERROR,
      payload: error.message
    });
  } finally {
    dispatch({ type: PRODUCTS_ACTIONS.SET_LOADING, payload: false });
  }
};

export const fetchProductById = (id) => async (dispatch) => {
  dispatch({ type: PRODUCTS_ACTIONS.SET_LOADING, payload: true });
  try {
    const response = await api.get(`/products/${id}`);
    dispatch({
      type: PRODUCTS_ACTIONS.SELECTED_PRODUCT,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: PRODUCTS_ACTIONS.SET_ERROR,
      payload: error.message
    });
  } finally {
    dispatch({ type: PRODUCTS_ACTIONS.SET_LOADING, payload: false });
  }
};

export const removeSelectedProduct = () => ({
  type: PRODUCTS_ACTIONS.REMOVE_SELECTED_PRODUCT
});