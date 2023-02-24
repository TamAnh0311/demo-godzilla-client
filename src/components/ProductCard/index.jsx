import { Button, Card, Image } from 'antd';
import {
  HeartFilled,
  HeartOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons';
import { useState } from 'react';
import { IMG_FALLBACK } from 'utils/constant';

const styles = {

  cardBody: {
    padding: '10px'
  },
  discount: {
    textDecoration: 'line-through'
  }
}

function ProductCard({ product }) {
  const [favorite, setFavorite] = useState(false)

  return (
    <Card
      bodyStyle={styles.cardBody}
    >
      <div>
        <div className="d-flex justify-center align-center">
          <Image
            width={220}
            height={220}
            src="error"
            fallback={IMG_FALLBACK}
          />
        </div>
        <div className="mt-3 mx-1 text-left">
          <p className="text-h6 text-capitalize">{product.productName}</p>
          <p className="text-subtitle-2">{product.description ? product.description : 'No description'}</p>
          <p
            className={`text-h5 ${product.discount ? 'text-decoration-line-through text-red-darken-3' : 'text-grey-darken-2'}`}
          >${product.price ? product.price : 0}
          </p>
          <div className="d-flex justify-space-between align-center">
            {product.status > 0 ? <p className="text-green-darken-2">AVAILABLE</p> : <p className="text-red">OUT OF STOCK</p>}
            <div className="d-flex align-center text-h6">
              <ShoppingCartOutlined className="text-green-darken-3" style={{ fontSize: 24 }} />
              <Button
                className="text-red-darken-3 ml-3"
                type="text"
                onClick={() => setFavorite(!favorite)}
                icon={favorite ? <HeartFilled /> : <HeartOutlined />}
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default ProductCard;
