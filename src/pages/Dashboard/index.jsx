import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from 'redux/actions/productActions';
import ProductCard from 'components/ProductCard';
import ProductModal from 'components/ProductModal';

const styles = {
  cardWrapper: {
    width: '17%',
    margin: '0 10px'
  }
}

function Dashboard() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducers.products);

  const ref = useRef()

  const viewProduct = (product) => {
    ref.current.openModel(product)
  }

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const productList = () => products?.map((product) => (
    <div
      style={styles.cardWrapper}
      key={product.productCode}
      onClick={() => viewProduct(product)}
      aria-hidden="true"
    >
      <ProductCard product={product} />
    </div>
  ))

  return (
    <>
      <div className="d-flex ">
        {
          products?.length ? productList() : null
        }
      </div>
      <ProductModal ref={ref} />
    </>
  )
}

export default Dashboard;
