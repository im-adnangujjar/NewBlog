import React from 'react'
import { Design } from "../../../constants/Constant";
import { Grid } from '@mui/material'
import styles from "../../../../styles/DesignTab.module.css";
import { Card2 } from '../../../constants/Constant';
import Related from '../../../commonComponent/related/Related';
import DesignDetails from "../../../../pages/blogDetails/DesignDetails"

function DesignTab() {
  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <img className={styles.image} src={"/design1.jpg"} alt="image not found" />
          <h1 className={styles.dateHeading}>December 08, 2021</h1>

          <p className={styles.description}>Designing the Best elearning Platform: Our Ergonomic Process That Converts</p>
          <div>
            <div className={styles.display1}>
              <p className={styles.read}>READ ARTICLE </p>
              <img className={styles.icon} src={"/right-arrow.png"} alt="image not found" />
            </div>
          </div>


        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Grid container spacing={0}>

            {
              Design.map((item, index) => {
                return <Grid item xs={12} sm={6} md={4} lg={12} key={index}><DesignDetails Design={item} />  </Grid>
              })}
          </Grid>

        </Grid>
      </Grid>

      <Grid container spacing={0}>
        {
          Card2.map((item, index) => {
            return <Grid item xs={12} sm={6} md={4} lg={4} key={index}><Related Card2={item} />  </Grid>
          })
        }
      </Grid>

    </div>
  )
}

export default DesignTab