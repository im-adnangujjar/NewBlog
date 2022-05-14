import React from 'react'
import styles from "../../../../styles/FirstSection.module.css";
import { Cards } from '../../../constants/Constant'
import ImagesDetails from "../../../../pages/blogDetails/imagesDetails"

import { Grid } from '@mui/material';

function FirstSection() {
  return (
    <div>
     
     
<Grid container spacing={0}>
 <Grid item xs={12} sm={12} md={12} lg={6}>
      <div className={styles.itemPadding}>
      <a href="/Details"><img className={styles.image} src={'/blog1.jpg'} alt='image not found'/></a>
       <h1 className={styles.dateHeading}> February 22, 2022</h1>
       <p className={styles.description}>The Ultimate Importance of Mobile App Architecture?</p>
       <div className={styles.display1}>
       <p className={styles.read}>READ ARTICLE </p>
       <img className={styles.icon} src={"/right-arrow.png"} alt="image not found" />
       </div>
      
      </div>
      </Grid>

    <Grid item xs={12} sm={12} md={12} lg={6}>
      <Grid container spacing={0}>
        {
          Cards.map((item, index) => {
            return<Grid item xs={12} sm={6} md={4} lg={12} key={index}>
             <ImagesDetails Cards={item} />
             </Grid>
          }
          )}
      </Grid>
       </Grid>
       </Grid>
    </div>
  )
}

export default FirstSection