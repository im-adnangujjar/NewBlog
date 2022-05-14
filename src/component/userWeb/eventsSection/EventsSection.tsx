import React from 'react'
import Image from 'next/image';
import styles from '../../../../styles/EventsSection.module.css'
import arrowIcon from "../../../assests/right-arrow.png";
const n = 3;

const EventsSection = () => {
  return (
    <div className={`${styles.eventsSection} mainContainer bgColor`}>
        <h2  className="title">Events</h2>
        <div className={`${styles.cardsContainer}`}>
            {[...Array(n)].map(i=>(
            <div key={i} className={`${styles.card}`}>
                <h6 className="heading">Event Type</h6>
                <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus amet voluptatib </p>
                <div className={`${styles.cardActions}`}>
                    <Image src={arrowIcon}/>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default EventsSection;