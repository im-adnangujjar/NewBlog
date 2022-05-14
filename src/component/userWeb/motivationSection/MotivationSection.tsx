import React from "react";
import Image from "next/image";
import styles from "../../../../styles/MotivationSection.module.css";
import MotivationImage from "../../../assests/mt-about-img.png";


const MotivationSection = () => {
  return (
    <div className={`mainContainer`}>
      <div className={`${styles.row} about-container`}>
        <div className='col-lg-6 background order-lg-2 order-1 wow fadeInUp'>
        <Image src={MotivationImage} alt='mt_image' />
        </div>
        <div className='col-lg-6 content order-lg-1 order-2'>
          <h4>Your success. Our passion.</h4>
          Trained, Certified, Hired: we believe this simple formula is the key
          to long-term career success.
          <div className={`${styles.iconbox}`} style={{marginTop:"1.5rem"}}>
            <div className={`${styles.icon}`}>
                <img src="https://img.icons8.com/ios/40/000000/bag-front-view.png"/>
            </div>
            <h4 className={`${styles.title}`}>Trained</h4>
            <p className={`${styles.description}`}>Acquire or refine the skills and knowledge needed for career advancement or re-entry into the workforce</p>
          </div>
          <div className={`${styles.iconbox}`}>
            <div className={`${styles.icon}`}>
                <img src="https://img.icons8.com/ios/40/000000/contract.png"/>
            </div>
            <h4 className={`${styles.title}`}>Certified</h4>
            <p className={`${styles.description}`}>Acquire or refine the skills and knowledge needed for career advancement or re-entry into the workforce</p>
          </div>
          <div className={`${styles.iconbox}`}>
            <div className={`${styles.icon}`}>
              <img src="https://img.icons8.com/ios/40/000000/men-age-group-5.png"/> 
            </div>
            <h4 className={`${styles.title}`}>Hired</h4>
            <p className={`${styles.description}`}>Acquire or refine the skills and knowledge needed for career advancement or re-entry into the workforce</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MotivationSection;


