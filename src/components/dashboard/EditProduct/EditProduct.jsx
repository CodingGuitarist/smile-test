import style from './EditProduct.module.css'
import {useState, useEffect} from 'react'
import logoSmall from '../../../assets/images/logoSmall.png';
import {RiCloseCircleFill} from 'react-icons/ri'
import axios from 'axios'
import {BsToggleOff, BsToggleOn} from 'react-icons/bs'

const EditProduct = ({setShowEditProduct, productId, toast}) => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        quantity: '',
        frequency: ''  
    });

    const [showFrequency, setShowFrequency] = useState(true)

    function toggleFrequency() {
        setShowFrequency(!showFrequency)
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                frequency: ''
            }
        })
    }

    // Fetch product information from the server
  useEffect(() => {
    axios.get(`https://inquisitive-ray-jersey.cyclic.cloud/products/getProduct/${productId}`)
      .then(res => {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                name: res.data.name,
                price: res.data.price,
                quantity: res.data.quantity,
                frequency: res.data.frequency,
            }
        })
      })
      .catch(err => console.log(err));
  }, []);

    function handleClose(e) {
        if (e.target.id === 'editProduct') {
            setShowEditProduct(false);
        }
    }

    function handleChange(e) {
        const {name, value} = e.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value,
            }
        })
    }

  // Handle update product submission
  const handleUpdate = (e) => {

    const name = formData.name
    const price = formData.price
    const quantity = formData.quantity
    const frequency = formData.frequency

    e.preventDefault()
    axios.put(`https://inquisitive-ray-jersey.cyclic.cloud/products/updateProduct/${productId}`, {name, price, quantity, frequency})
    .then( (res) => {
      console.log(res)
    } )
    .catch(err => console.log(err)) 
    toast.success('Successfully edited product', {
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
    <section
        id='editProduct'
        onClick={handleClose}
        className={style.editProductFormSection}
    >
        <div  
            className={style.editProductFormIconContainer}>
                <RiCloseCircleFill 
                onClick={() => setShowEditProduct(false)}
                className={style.editProductFormIcon}
                />
        </div>
        <form
            className={style.editProductForm}
            onSubmit={handleUpdate} 
        >
            <div className={style.editProductFormImage}>
            <img src={logoSmall} alt="logo" />
            </div>
            <div className={style.editProductFormInputs}>
                <input
                    className={style.editProductInput}
                    required
                    type='text'
                    name='name'
                    placeholder='Product Name'
                    value={formData.name}
                    onChange={handleChange}
                />
                  <input
                    className={style.editProductInput}
                    required
                    type='text'
                    name='price'
                    placeholder={formData.price === 0 ? 'Product Price' : 'Product Price'}
                    value={formData.price === 0 ? '' : formData.price}
                    onChange={handleChange}
                />
                <input
                    className={style.editProductInput}
                    required
                    type='text'
                    name='quantity'
                    placeholder={formData.quantity === 0 ? 'Product Quantity' :'Product Quantity'}
                    value={formData.quantity === 0 ? '' : formData.quantity}
                    onChange={handleChange}
                />
                {showFrequency && <input
                    className={style.editProductInput}
                    required
                    type='text'
                    name='frequency'
                    placeholder={formData.frequency === 0 ? 'Product Frequency (Weeks)' : 'Product Frequency (Weeks)'}
                    value={formData.frequency === 0 ? '' : formData.frequency}
                    onChange={handleChange}
                />}
                <div onClick={toggleFrequency} className={style.frequecyToggleContainer}>
                    {showFrequency 
                        ? <BsToggleOn className={style.frequencyToggleOn}/> 
                        : <BsToggleOff className={style.frequencyToggleOff}/>
                    }
                    <span>Toggle off if product will not be reordered</span>
                </div>
                <input
                    className={style.editProductSubmit}
                    disabled={
                        !formData.name ||
                        !formData.price ||
                        !formData.quantity 
                    }
                    type='submit'
                    value='Edit Product'
                />
            </div>
        </form>
    </section>
  )
};

export default EditProduct;
