import style from './OrderFormDashboard.module.css'
import OrderForm from './OrderFormDisplay/OrderForm'
import {useState} from 'react'
import EditProduct from '../dashboard/EditProduct/EditProduct'


const OrderFormDashBoard = ({productId, setProductId, order, setOrder, toast}) => {

  const [showEditProduct, setShowEditProduct] = useState(false)
    return (
      <section className={style.orderFormDashboardSection}>
        {showEditProduct && <EditProduct setShowEditProduct={setShowEditProduct} productId={productId} setProductId={setProductId} toast={toast}/>}
        <section className={style.orderForm}>
          <OrderForm setShowEditProduct={setShowEditProduct} order={order} setOrder={setOrder} toast={toast} setProductId={setProductId}/>
        </section>    
      </section>    
      )
    };

export default OrderFormDashBoard;
