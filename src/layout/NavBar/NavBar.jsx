import logo from '../../assets/images/logo.webp'
import style from './NavBar.module.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const NavBar = ({setShowLogin, setShowSignup, signedIn}) => {
    const [navExpanded, setNavExpanded] = useState(false)
    const navigate = useNavigate()

    const openNav = () => {
        setNavExpanded(!navExpanded)
    }
    const closeNav = () => setNavExpanded(false)

    return (
        <header>
            <nav className={style.nav}>
                <Link 
                  to={'/'}>
                  <img 
                    className={style.logo} 
                    src={logo} 
                    alt={logo} 
                  />
                </Link>
                <ul 
                className={navExpanded ? `${style.navLinks} ${style.expanded}` : style.navLinks}
                >
                  <li>
                      <span  
                          onClick={() => { 
                            closeNav(),
                            navigate('/'),
                            setShowSignup(false), 
                            setShowLogin(false)
                        }}
                      >Home</span>
                  </li>
                  {!signedIn && <li>
                        <span 
                          onClick={() => { closeNav(), setShowLogin(true), setShowSignup(false) }}
                      >Login</span>
                  </li>}
                  {!signedIn && <li>
                       <span 
                          onClick={() => { closeNav(), setShowSignup(true), setShowLogin(false) }}
                      >Sign Up</span>
                  </li>}
                  {signedIn && <li>
                    <span  
                          onClick={() => { 
                            navigate('/dashboard') 
                        }}
                      >Dashboard</span>
                  </li>}
                  {signedIn && <li>
                    <span  
                          onClick={() => { 
                            navigate('/order-form') 
                        }}
                      >Order Form</span>
                  </li>}
                  {signedIn && <li>
                    <span  
                          onClick={() => { 
                            navigate('/'),
                            setShowSignup(false), 
                            setShowLogin(false)
                        }}
                      >Log Out</span>
                  </li>}
                </ul>
                <div 
                    className={navExpanded ? `${style['icon-three']} ${style['active-three']}` : style['icon-three']}
                    onClick={openNav}
                >
                    <div className={`${style['hamburger']} ${style['hamburger-three']}`}></div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar
