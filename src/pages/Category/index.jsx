import { useKeycloak } from '@react-keycloak/web';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from 'redux/actions/productActions';
import BaseService from 'services/baseService';

function Category() {
  const dispatch = useDispatch();
  const { keycloak } = useKeycloak()
  const products = useSelector((state) => state.productReducers.products);

  console.log('2: ', products)

  useEffect(() => {
    if (keycloak.authenticated) {
      dispatch(getProducts());
    }
  }, [dispatch]);

  return (
    <div>abc ds</div>
  )
}

export default Category;
