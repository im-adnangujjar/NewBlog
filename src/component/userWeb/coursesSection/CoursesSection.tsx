import React from 'react';
import Image from 'next/image';
import styles from "../../../../styles/CoursesSection.module.css";
import icon7 from "../../../assests/icon7.png";
import icon2 from "../../../assests/icon2.png";
import icon4 from "../../../assests/icon4.png";
import icon5 from "../../../assests/icon5.png";
import icon6 from "../../../assests/icon6.png";
import icon1 from "../../../assests/icon1.png";
import icon3 from "../../../assests/icon3.png";
import icon8 from "../../../assests/icon8.png";



const cardsData = [
  { titleA: "WEB", titleB: "DEVELOPMENT", description: "We deliver World-class, competent High-Quality web development solutions at the low-cost price.", icon: icon7 },
  { titleA: "MOBILE APP", titleB: "DEVELOPMENT", description: "Provide sleekly functional, market capturing and comprehensive mobility services and solutions.", icon: icon2 },
  { titleA: "FRAMWORK", titleB: "DEVELOPMENT", description: "We provide you with efficient framework development services, which remain fully equipped with many features.", icon: icon4 },
  { titleA: "E-COMMERCE ", titleB: "DEVELOPMENT", description: "Right mix of web development methodologies along with highly competitive marketing strategies.", icon: icon5 },
  { titleA: "DEDICATED", titleB: "RESOURCES", description: "Hire dedicated resources on full time or hourly basis starting at most competitive price.", icon: icon6 },
  { titleA: "WEB DESIGN", titleB: "SERVICES", description: "Our procedures are designed to provide a structured process that is simple, supportive, informative and flexible.", icon: icon1 },
  { titleA: "DIGITAL", titleB: "MARKETING", description: "Brain Technosys bring to you an assortment of Digital Marketing Services all under one roof.", icon: icon8 },
  { titleA: "UI/UX &", titleB: "DEVELOPMENT", description: "We can deliver the best solutions for your web, mobile and desktop applications for your brand.", icon: icon3 },
]

function CoursesSection() {
  return (  
   <div className={`${styles.coursesSection} mainContainer`} id="courses">
    <div className={`${styles.coursesTitleContainer}`}>
        <h3 className="title">Courses</h3>
        <span className="paragraph">At Creation World Safety our goal is to create a safer work environment for all your employees and your business as a whole. We do this through educating workers of all backgrounds about avoidable hazards and equipping these workers to handle hazards that cannot be eliminated. Our full range of corporate training courses includes first aid training, forklift safety training and much more. Browse our full course selection below.</span>
    </div> 
    <div  className={`${styles.container}`}>
    {cardsData.map((item,i)=>(  
      <div key={i} className={`${styles.card}`}>
          <Image src={item.icon}/>
          <h5 className={`heading ${styles.cardHeading}`}>{item.titleA} <br/> {item.titleB} </h5>
          <p className="paragraph">{item.description}</p>
      </div>
      ))}  
    </div> 
   </div>
  )
}

export default CoursesSection;
