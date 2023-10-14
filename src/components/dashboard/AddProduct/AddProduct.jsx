import style from './AddProduct.module.css'
import {useState, useEffect} from 'react'
import logoSmall from '../../../assets/images/logoSmall.png';
import {RiCloseCircleFill} from 'react-icons/ri'
import {BsToggleOff, BsToggleOn} from 'react-icons/bs'
import axios from 'axios'

const AddProduct = ({setShowAddProduct, toast}) => {
    const [formData, setFormData] = useState({
        name: '',
        productId: '',
        price: 0,
        quantity: 0,
        frequency: 0,
        order: false
    });

    const [userId, setUserId] = useState('');

    useEffect(() => {
        const id = window.sessionStorage.getItem('userId')
        setUserId(id)
      },[])

    const [showFrequency, setShowFrequency] = useState(true)

    function toggleFrequency() {
        setShowFrequency(!showFrequency)
    }

    function handleClose(e) {
        if (e.target.id === 'addProduct') {
            setShowAddProduct(false);
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

const checkFrequency = () => {
    if (formData.frequency === 0) {
        setFormData((prevFormData) => ({
            ...prevFormData,
            frequency: 0
        }))
    }
}

const handleSubmit = async (e) => {
    checkFrequency()
    e.preventDefault()
    
    const name = formData.name
    const productId = formData.productId
    const price = formData.price
    const quantity = formData.quantity
    const frequency = formData.frequency
    const order = formData.order


    try {
        const res = await axios.post('https://inquisitive-ray-jersey.cyclic.cloud/products/createProduct', {name, productId, price, quantity, frequency, userId, order})
        console.log(res);
        console.log(res.data);

        if (res.request.status === 200) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                name: '',
                productId: '',
                price: 0,
                quantity: 0,
                frequency: 0
              }))
              setShowAddProduct(false)
              toast.success('Successfully added product', {
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
        } else {
            toast.success('Error adding product', {
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

    } catch (err) {
        console.error(err)
    }
}

  return (
    <>
        <section
            id='addProduct'
            onClick={handleClose}
            className={style.addProductFormSection}
        >
            <div  
                className={style.addProductFormIconContainer}>
                    <RiCloseCircleFill 
                        onClick={() => setShowAddProduct(false)}
                        className={style.addProductFormIcon}
                    />
            </div>
            <form
                className={style.addProductForm}
                onSubmit={handleSubmit}
            >
            <div className={style.addProductFormImage}>
            <img src={logoSmall} alt="logo" />
            </div>
            <div className={style.addProductFormInputs}>
                <input
                    className={style.addProductInput}
                    required
                    type='text'
                    name='name'
                    placeholder='Product Name'
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    className={style.addProductInput}
                    required
                    type='text'
                    name='productId'
                    placeholder='Product Id'
                    value={formData.productId}
                    onChange={handleChange}
                />
                <input
                    className={style.addProductInput}
                    required
                    type='text'
                    name='price'
                    placeholder={formData.price === 0 ? 'Product Price' : 'Product Price'}
                    value={formData.price === 0 ? '' : formData.price}
                    onChange={handleChange}
                />
                <input
                    className={style.addProductInput}
                    required
                    type='text'
                    name='quantity'
                    placeholder={formData.quantity === 0 ? 'Product Quantity' :'Product Quantity'}
                    value={formData.quantity === 0 ? '' : formData.quantity}
                    onChange={handleChange}
                />
                {showFrequency && <input
                    className={style.addProductInput}
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
                    className={style.addProductSubmit}
                    disabled={
                        !formData.name ||
                        !formData.productId ||
                        !formData.price ||
                        !formData.quantity 
                    }
                    type='submit'
                    value='Add Product'
                />
            </div>
            </form>
        </section>
    </>
  )
};

export default AddProduct;
