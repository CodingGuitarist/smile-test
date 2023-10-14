import style from './ReorderReminder.module.css'

const ReorderReminderHeader = () => {
  return (
    <thead className={style.reorderReminderTableHeader}>
      <tr className={style.reorderReminderTableRowHeader}>
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

export default ReorderReminderHeader;
