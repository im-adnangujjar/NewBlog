import React from 'react'
import { Card1 } from "../../../constants/Constant"
import { Grid } from '@mui/material'
import ImageData1 from "../../../../pages/blogDetails/imageData1"


function SecondSection() {
  return (
    <div>
      <Grid container spacing={2}>

        {
          Card1.map((item, index) => {
            return <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
              <ImageData1 item={item} />
            </Grid>
          }
          )}
      </Grid>
    </div>
  )
}

export default SecondSection