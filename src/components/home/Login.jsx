import style from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import logoSmall from '../../assets/images/logoSmall.png';
import { RiCloseCircleFill } from 'react-icons/ri';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = ({showLogin, setShowLogin}) => {

  const navigate = useNavigate()

  useEffect(() => {
    window.sessionStorage.removeItem('userName')
    window.sessionStorage.removeItem('userId')
  }, [])

  // Use useState to manage form data
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  function handleClose(e) {
    if (e.target.id === 'login') {
      setShowLogin(false);
    }
  }

  function handleEmailChange(e) {
    // Update email in form data
    setFormData((prevFormData) => ({
      ...prevFormData,
      email: e.target.value,
    }));
  }

  function handlePasswordChange(e) {
    // Update password in form data
    setFormData((prevFormData) => ({
      ...prevFormData,
      password: e.target.value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // if (formData.password !== formData.confirmPassword) {
    //   toast('Passwords did not match, Please retry')
    //   setFormData((prevFormData) => ({
    //     ...prevFormData,
    //     password: '',
    //     confirmPassword: '',
    //   }));
    //   return;
    // }

    setLoading(true);

    const email = formData.email;
    const password = formData.password;

    try {
      const res = await axios.post('https://inquisitive-ray-jersey.cyclic.cloud/users/login', {email, password});
      console.log(res);
      console.log(res.data);
      console.log(res.data.message)
      console.log(res.data.success)
      
      if (res.data.success === false) {
        toast(res.data.message)
        setFormData((prevFormData) => ({
          ...prevFormData,
          password: ''
        }));
      } else {
        window.sessionStorage.setItem('userName', res.data.userName)
        window.sessionStorage.setItem('userId', res.data.id)
       
        setFormData((prevFormData) => ({
          ...prevFormData,
          password: ''
        }));
        navigate('/dashboard');
      }

      setLoading(false);

    } catch (err) {
      console.error(err);
      setLoading(false);
      // Handle error, show error message, etc.
    }
  };
  

  return (
    <>
      <ToastContainer 
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      <section 
        className={style.loginFormSection}
      >
        <div className={style.loginFormIconContainer}>
          <RiCloseCircleFill 
            onClick={() => setShowLogin(false)}
            className={style.loginFormIcon}
          />
        </div>

        <form 
          onSubmit={handleSubmit}
          className={style.loginForm}
        >
          <div className={style.loginFormImage}>
            <img src={logoSmall} alt="logo" />
          </div>
          <div className={style.loginFormInputs}>
            <input
              className={style.loginInput}
              required
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleEmailChange}
            />
            <input
              className={style.loginInput}
              required
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handlePasswordChange}
            />
            <button
              className={style.loginSubmit}
              disabled={
                !formData.email || 
                !formData.password
              }
              type="submit"
              value="Submit"
            >
              {loading ? 'Logging in...' : 'Log In'}
            </button>
          </div>
        </form>
      </section>
    </>
  )
};

export default Login;
