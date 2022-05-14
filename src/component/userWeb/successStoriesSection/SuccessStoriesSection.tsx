import React from 'react'
import Image from 'next/image';
import { Card,Button,Carousel,Col,Row } from 'react-bootstrap';
import styles from "../../../../styles/SuccessStoriesSection.module.css";
import CommonButton from '../../../commonComponent/commonButton/CommonButton';
import img4 from "../../../assests/Img4.jpg";
import img6 from "../../../assests/Img6.jpg";
import img8 from "../../../assests/Img8.jpg";

import CommonCarousel from '../../../commonComponent/commonCarousel/CommonCarousel';

const successStories = [
  {title:"BLOG",description:"Are Microservices the real game changer to product-driven businesses?",image:img8},
  {title:"ARTICLE",description:"Successful Migration to Microservices - Why When and How?",image:img4},
  {title:"KNOW MORE",description:"Predicting ROIs to a Microservices Migration – Sowing Seeds to Success",image:img6},
  {title:"BLOG",description:"Are Microservices the real game changer to product-driven businesses?",image:img8},
  {title:"ARTICLE",description:"Successful Migration to Microservices - Why When and How?",image:img4},
  {title:"KNOW MORE",description:"Predicting ROIs to a Microservices Migration – Sowing Seeds to Success",image:img6},
  
]

const SuccessStoriesSection = () => {
  return (
    <div className = {`mainContainer ${styles.successStoriesSection}`}>
      <div className={`${styles.successTitleContainer}`}>
        <h3 className="title">Success Stories</h3>
      </div>
      <div className = {`${styles.wrapper}`}>
          <CommonCarousel 
          show={3}
          infiniteLoop={true}>
            {successStories.map((item,i)=>(
                 <Card key={`${item}${i}`} className={`${styles.c}`} /* style={{ width: '18.3rem',margin:"0 0.5rem 0 0.4rem"}} */>
                 <div className={`${styles.cardHeader}`}>
                 <Image src={item.image}/>
                 <div className={`${styles.cardOverlay}`}>{item.title}</div>
                 </div>
                 <Card.Body>
                   <Card.Text className="paragraph">
                     {item.description}
                   </Card.Text>
                   <div className={`${styles.cardFooter}`} style={{width:"100%",textAlign:"center"}}>
                   <CommonButton title={item.title}/>
                   </div>
                 </Card.Body>
               </Card>
            ))}
          </CommonCarousel>
      </div>
    </div>
  )
}

export default SuccessStoriesSection