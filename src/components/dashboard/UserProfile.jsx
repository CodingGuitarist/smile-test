import style from './UserProfile.module.css'
import UserProfileWelcome from './UserProfileWelcome/UserProfileWelcome';
import UserProfileExistingProductsBtn from './UserProfileBtns/UserProfileExistingProductsBtn';
import UserProfileCreateProductBtn from './UserProfileBtns/UserProfileCreateProductBtn';
import ReorderReminder from './ReorderReminder/ReorderReminder';
import AddProduct from './AddProduct/AddProduct';
import EditProduct from './EditProduct/EditProduct';
import {useState} from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const UserProfile = ({productId, setProductId, order, setOrder, toast}) => {

  const [showAddProduct, setShowAddProduct] = useState(false)
  const [showEditProduct, setShowEditProduct] = useState(false)

  return (
    <section className={style.userProfileSection}>
      {showAddProduct && <AddProduct setShowAddProduct={setShowAddProduct} toast={toast}/>}
      {showEditProduct && <EditProduct setShowEditProduct={setShowEditProduct} productId={productId} setProductId={setProductId} toast={toast}/>}
      <div className={style.userProfileTopSection}>
        <UserProfileWelcome />
        <div className={style.userProfileButtons}>
          <UserProfileExistingProductsBtn />
          <UserProfileCreateProductBtn setShowAddProduct={setShowAddProduct}/>
        </div>
      </div>
      <section className={style.reorderReminder}>
        <ReorderReminder setShowEditProduct={setShowEditProduct} productId={productId} setProductId={setProductId} order={order} setOrder={setOrder} toast={toast}/>
      </section>
    </section>
  )
};

export default UserProfile;
