import style from './HeroSection.module.css';
import logo from "../../assets/images/logo.webp"

const HeroSection = () => {
  
  return (
    <section className={style.heroSection}>
        <img  className={style.heroImage} src={logo} alt="logo" />
        <p className={style.heroP}>Your Dental Inventory Solution. Effortlessly manage supplies, minimize spoilage, and optimize stock levels with our tailored ordering algorithm, ensuring a well-stocked, cost-efficient dental practice.</p>
    </section>
  )
};

export default HeroSection;
