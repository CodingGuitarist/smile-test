import { Link } from 'react-router-dom'
import style from './Footer.module.css'
import { RiTwitterXFill } from 'react-icons/ri';
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className={style.footerContainer}>  
      <footer className={style.footer}>
        <span className={style.footerLogo}>Smile Supply</span>
        <div className={style.footerLinks}>
          <Link to={'/about'}>About Us</Link>
          <Link to={'/terms'}>Terms of Service</Link>
          <Link to={'/privacy'}>Privacy Policy</Link>
        </div>
        <div className={style.footerSocials}>
        <a 
            href='https://twitter.com/StephenVizzusi' 
            target="_blank">
              <RiTwitterXFill className={style.footerSocialsLinks}/>
          </a>
          <a 
            href='https://www.linkedin.com/in/stephen-vizzusi/' 
            target="_blank">
              <FaLinkedinIn className={style.footerSocialsLinks}/>
          </a>
        </div>
      </footer>
    </div>
  )
};

export default Footer;
