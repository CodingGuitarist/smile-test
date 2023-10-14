import style from './OrderForm.module.css'
import OrderFormCard from "./OrderFormCard";
import OrderFormHeader from './OderFormHeader'
import {useState} from 'react'

const OrderForm = ({setShowEditProduct, setProductId, order, setOrder, toast}) => {

  const [totalPrice, setTotalPrice] = useState(0)

    return (
        <section className={style.orderFormSection}>
          <h2 className={style.orderFormHeading}>Order Form</h2>
          <table className={style.orderFormTable}>
            <OrderFormHeader />
            <OrderFormCard setShowEditProduct={setShowEditProduct} setProductId={setProductId} order={order} setOrder={setOrder} toast={toast} setTotalPrice={setTotalPrice}/>     
          </table>
          <section className={style.orderFormTotal}>
            <h3>Grand Total: ${totalPrice}</h3>
          </section>
        </section>
      )
    };

export default OrderForm;
