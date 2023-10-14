import style from './UserProfileBtns.module.css'
import { useNavigate } from 'react-router-dom'

const UserProfileExistingProductsBtn = () => {

    const navigate = useNavigate();

  return (
    <>
        <button
          className={style.UserProfileBtns}
          onClick={() => navigate(`/existing-products`)}
          >Existing Products
        </button>
    </>
  )
};

export default UserProfileExistingProductsBtn;
