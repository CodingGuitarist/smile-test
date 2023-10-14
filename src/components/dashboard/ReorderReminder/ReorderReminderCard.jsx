import style from './ReorderReminder.module.css'
import { BsTrash } from 'react-icons/bs'
import { AiOutlineEdit, AiOutlineShoppingCart } from 'react-icons/ai'
import axios from 'axios';
import {useState, useEffect} from 'react'


const ReorderReminderCard = ({setShowEditProduct, setProductId, order, setOrder, toast}) => {


   // State to store the Products
   const [products, setProducts] = useState([]);

   // State to store the User id
   const [userId, setUserId] = useState();

    // Fetch UserName from the server on component mount
    useEffect(() => {
      const id = window.sessionStorage.getItem('userId')
      console.log("UserId from sessionStorage:", id);
      setUserId(id)
  }, []);

    // Fetch products from the server on component mount
    useEffect(() => {
      const fetchData = async () => {
          try {
              const res = await axios.get(`https://inquisitive-ray-jersey.cyclic.cloud/products/getProducts/${userId}`)
              console.log(res.data);
              setProducts(res.data);
          } catch (err) {
              console.log(err);
          }
      };
  
      if (userId) {
          fetchData();
      }
  }, [userId]);

  const handleDelete = (id) => {
    axios.delete(`https://inquisitive-ray-jersey.cyclic.cloud/products/deleteProduct/${id}`)
        .then(() => {
            // Remove the deleted product from the local state
            setProducts((prevProducts) => prevProducts.filter((product) => product._id !== id));
        })
        .catch((err) => console.log(err));
        toast.success('Successfully deleted product', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
          setTimeout(() => {
            location.reload()
          }, 3000)
  };

  const addToOrder = (id) => {
    setOrder(true)
    axios.put(`https://inquisitive-ray-jersey.cyclic.cloud/products/orderProduct/${id}`, {order: true})
    .then( (res) => {
      console.log(res)
    } )
    .catch(err => console.log(err)) 
    toast.success('Successfully added product to order form', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
      setTimeout(() => {
        location.reload()
      }, 3000) 
  }

  return (
    <tbody className={style.reorderReminderTableBody}>
      {products.filter(product => product.frequency !== 0).map((product, index) => {
          return (
        <tr 
          className={style.reorderReminderTableRowCard} 
          key={product._id}>
          <td>{index +1}</td>
          <td>{product.name}</td>
          <td>{product.productId}</td>
          <td>${product.price}</td>
          <td>{product.quantity}</td>
          <td>{product.frequency === 0 ? 'Non-Recurring' : product.frequency + ' Weeks'}</td>
          <td>
            <span className={style.reorderReminderEditBtn}
              ><AiOutlineEdit
                onClick={() => {
                  setShowEditProduct(true)
                  setProductId(product._id)
                }}
              />
            </span>
          </td>
          <td>
            <span 
              onClick={() => handleDelete(product._id)}
              className={style.reorderReminderDeleteBtn}
              ><BsTrash />
            </span>
          </td>
          <td>
          <span 
              onClick={() => {
                addToOrder(product._id)
                
              }} 
              className={style.reorderReminderCartBtn}
              ><AiOutlineShoppingCart />
            </span>
          </td>
        </tr>
          )
        })}
    </tbody>
  )
};

export default ReorderReminderCard;
