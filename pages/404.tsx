import Link from 'next/link';
import React from 'react';
import styles from '../styles/ErrorPage.module.css'
export default function Custom404() {
    return (
        <div className={`${styles.align} mainContainer`} >
            <span className={`${styles.error} `}>
                404
            </span>
            <p className={`${styles.notFound} heading`}>OOPS! NOTHING WAS FOUND</p>
            <p className={`${styles.info} paragraph`}>The page you are looking for might have been removed had its name changed or is temporarily unavailable. <Link href='/' ><a className={`${styles.returnLink} linkText`}>Return to home page</a></Link></p>
        </div>
    )


}
