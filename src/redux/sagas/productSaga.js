import {
  call, put, takeLatest, all
} from 'redux-saga/effects';

import { getAllProducts, updateProduct, deleteProduct } from 'services/productService';

import {
  UPDATE_PRODUCT,
  GET_PRODUCTS,
  DELETE_PRODUCT,
  PRODUCT_SUCCESS,
  PRODUCT_FAILED
} from '../actions/types';

export function* onDeleteProductSaga({ payload }) {
  try {
    yield call(deleteProduct, payload);
    yield put({
      type: PRODUCT_SUCCESS,
      payload: { products: payload }
    });
  } catch (error) {
    yield put({
      type: PRODUCT_FAILED,
      payload: { error }
    });
  }
}

export function* onUpdateProductSaga({ payload }) {
  try {
    yield call(updateProduct, payload);
    yield put({
      type: PRODUCT_SUCCESS,
      payload: { products: payload }
    });
  } catch (error) {
    yield put({
      type: PRODUCT_FAILED,
      payload: { error }
    });
  }
}

export function* onGetProductSaga() {
  try {
    const { data } = yield call(getAllProducts);

    yield put({
      type: PRODUCT_SUCCESS,
      payload: data
    });
  } catch (error) {
    yield put({
      type: PRODUCT_FAILED,
      payload: { error }
    });
  }
}

export function* onDelete() {
  yield takeLatest(DELETE_PRODUCT, onDeleteProductSaga);
}

export function* onUpdate() {
  yield takeLatest(UPDATE_PRODUCT, onUpdateProductSaga);
}

export function* onGetProduct() {
  yield takeLatest(GET_PRODUCTS, onGetProductSaga);
}

export function* products() {
  yield all([call(onDelete), call(onUpdate), call(onGetProduct)]);
}
