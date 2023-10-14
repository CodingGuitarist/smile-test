import style from './OrderForm.module.css'

const OderFormHeader = () => {
    return (
        <thead className={style.orderFormTableHeader}>
          <tr className={style.orderFormTableRowHeader}>
            <th>#</th>
            <th>Product Name</th>
            <th>Product ID</th>
            <th>Product Price</th>
            <th>Product Quantity</th>
            <th>Order Frequency</th>
            <th>Edit Order</th>
            <th>Remove Product</th>
          </tr>
        </thead>
      )
    };

export default OderFormHeader;
