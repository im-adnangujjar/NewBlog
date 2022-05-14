import React from 'react'
import styles from '../../styles/Card.module.css'

import Link from 'next/link'



interface DesignProps {
    Design: any,
}
const DesignDetails: React.FC<DesignProps> = ({ Design }: DesignProps) => {

    return (
        <div>
            <div className={styles.display}>
                <div>
                    <Link href={`/blogDetails/${Design.id}`}><img className={styles.image} src={Design.image} alt="image not found" /></Link>
                </div>
                <div className={styles.cardItem}>
                    <h1 className={styles.dateHeading}>{Design.date} </h1>
                    <p className={styles.description}> {Design.description}</p>
                    <div className={styles.display1}>
                        <p className={styles.read}>{Design.read}</p>
                        <img className={styles.icon} src={Design.icon} alt="icon not found" />
                    </div>
                </div>
            </div>
           

        </div>
    )
}

export default DesignDetails