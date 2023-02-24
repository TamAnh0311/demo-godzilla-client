import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from 'redux/actions/productActions';

function Dashboard() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducers.products);

  useEffect(() => {
    dispatch(getProducts());
    console.log('products', products)
  }, []);

  return (
    <h1>
      Dashboard
    </h1>
  );
}

export default Dashboard;
