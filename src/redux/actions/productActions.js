import {
  GET_PRODUCTS,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT_SAGA,
  DELETE_PRODUCT_SAGA
} from './types';

export const postProduct = (payload) => ({
  type: UPDATE_PRODUCT,
  payload
});

export const deleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  payload: id
});

export const getProducts = () => ({
  type: GET_PRODUCTS
});

export const postProductSaga = (payload) => ({
  type: UPDATE_PRODUCT_SAGA,
  payload
});

export const deleteProductSaga = (id) => ({
  type: DELETE_PRODUCT_SAGA,
  payload: id
});
