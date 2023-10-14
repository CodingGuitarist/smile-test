import style from './UserProfileBtns.module.css'

const UserProfileCreateProductBtn = ({setShowAddProduct}) => {

  return (
    <>
        <button
          className={style.UserProfileBtns}
          onClick={() => setShowAddProduct(true)}
          >Add New Product
        </button>
    </>
  )
};

export default UserProfileCreateProductBtn;