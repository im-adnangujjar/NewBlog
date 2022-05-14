
import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Card.module.css'




interface itemProps {
    item: any;
}

const imagesDetails: React.FC<itemProps> = ({ Cards}) => {
    return (
        <div className={styles.display}>
            <Link href={`/blogDetails/${Cards.id}`}>
                <img className={styles.image} src={Cards.image} alt="image not found" />
            </Link>
            <div className={styles.cardItem}>
                <h1 className={styles.dateHeading}>{Cards.date} </h1>
                <p className={styles.description}> {Cards.description}</p>
                <div className={styles.display1}>
                    <p className={styles.read}>{Cards.read}</p>
                    <img className={styles.icon} src={Cards.icon} alt="icon not found" />
                </div>

            </div>
        </div>
    )
}

export default imagesDetails