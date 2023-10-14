import OrderFormDashBoard from "../components/OrderFormDashboard/OrderFormDashBoard";
import {useEffect} from 'react'

const OrderFormPage = ({productId, setProductId, setSignedIn, order, setOrder, toast}) => {

  useEffect(() => {
    setSignedIn(true)
  }, [])

  return (
    <>
      <OrderFormDashBoard productId={productId} setProductId={setProductId} order={order} setOrder={setOrder} toast={toast}/>
    </>
  )
};

export default OrderFormPage;

