import style from './SmallScreensPopup.module.css';
import logoSmall from '../../assets/images/logoSmall.png';

const SmallScreensPopup = () => {
    
  
    return (
      <section 
        className={style.smallScreensPopupSection}
      >
        <section 
          className={style.smallScreensPopup}
        >
          <div className={style.smallScreensPopupImage}>
            <img src={logoSmall} alt="logo" />
          </div>
  
          <div className={style.smallScreensPopupHeadingContainer}>
                <h2 className={style.smallScreensPopupHeading}>This Application is NOT mobile friendly. Please use a Tablet, Laptop or desktop to view site</h2>
          </div>
        </section>
      </section>
    )
  };

export default SmallScreensPopup;
