import { Button, Modal } from 'antd';
import { forwardRef, useImperativeHandle, useState } from 'react';

const ProductModal = forwardRef((props, ref) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [product, setProduct] = useState(null);

  useImperativeHandle(ref, () => ({
    openModel(data) {
      setProduct(data)
      setModal(true)
    }
  }))

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setModal(false)
  };

  return (

    <Modal
      open={modal}
      title="Product detail"
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    ><span>{JSON.stringify(product)}</span>
    </Modal>
  );
})
export default ProductModal;
