import style from './ExistingProducts.module.css'

const ExistingProductsHeader = () => {
    return (
        <thead className={style.existingProductsTableHeader}>
          <tr className={style.existingProductsTableRowHeader}>
            <th>#</th>
            <th>Product Name</th>
            <th>Product ID</th>
            <th>Product Price</th>
            <th>Product Quantity</th>
            <th>Order Frequency</th>
            <th>Edit Order</th>
            <th>Delete Order</th>
            <th>Add to Order</th>
          </tr>
        </thead>
      )
    };

export default ExistingProductsHeader;
