import React from 'react'
import Link from 'next/link';
import styles from '../../styles/imagesCards.module.css'

interface itemProps {
    item: any;
}


const ImageData1: React.FC<itemProps> = ({ item }) => {
    return (
        <div>

            <div >
                <Link href={`/blogDetails/${item.id}`}>
                    
                    <img className={styles.image} src={item.image} alt="image not found" />
                </Link>
                <p className={styles.dateHeading}>{item.Date}</p>
                <p className={styles.description}>{item.description}</p>
                <div className={styles.display}>
                    <h2 className={styles.read} >{item.read}</h2>
                    <img className={styles.icon} src={item.icon} alt="image not found" />
                </div>
            </div>
        </div>
    )
}

export default ImageData1


