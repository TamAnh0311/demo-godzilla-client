import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from 'redux/actions/productActions';
import { useKeycloak } from '@react-keycloak/web'

function Dashboard() {
  const dispatch = useDispatch();
  const { keycloak } = useKeycloak()
  const products = useSelector((state) => state.productReducers.products);

  console.log('products', products)

  useEffect(() => {
    if (keycloak.authenticated) {
      dispatch(getProducts());
    }
  }, [dispatch]);

  return (
    <h1>
      Dashboard
    </h1>
  );
}

export default Dashboard;
