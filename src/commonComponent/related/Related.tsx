import React from 'react'
import styles from "../../../styles/Related.module.css"

interface Card2Props{
  Card2:any;
 } 
 const Related: React.FC<Card2Props> = ({Card2}: Card2Props) => {

  return (
    <div className={styles.mainContainer}>

      <img className={styles.image} src={Card2.image} alt="image not found" />

      <div className={styles.cardItem}>
        <h1 className={styles.dateHeading}>{Card2.date} </h1>
        <p className={styles.description}> {Card2.description}</p>
        <div className={styles.display}>
          <p className={styles.read}>{Card2.read}</p>
          <img className={styles.icon} src={Card2.icon} alt="icon not found" />
        </div>

      </div>
    </div>
  )
}

export default Related