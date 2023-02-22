import { all, spawn, call } from 'redux-saga/effects';

import { products } from './productSaga';

export default function* rootSaga() {
  const sagas = [products];

  yield all(
    sagas.map((saga) => spawn(function* () {
      while (true) {
        try {
          yield call(saga);
          break;
        } catch (e) {
          console.log(e);
        }
      }
    }))
  );
}
