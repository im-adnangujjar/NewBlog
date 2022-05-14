import { Grid } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react'
import Button from '../../src/commonComponent/button/Button';
import { allData } from '../../src/constants/Constant';
import styles from '../../styles/ImagesData.module.css'
import Link from 'next/link'

const AllDetails = () => {
  const router = useRouter();
  const { slug } = router.query;
  console.log("slug", slug);

  const data = allData.filter((item) => item !== slug)[slug];
  console.log('log', data);

  return (
    <div>
      
      <div key={data?.id} className="ssrStyle">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <img className={styles.image} src={data?.image} alt="image not found" />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div className={styles.bgColor}>
              <p className={styles.description}>{data?.description}</p>
              <p className={styles.date}>{data?.date}</p>
            </div>
          </Grid>
        </Grid>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={7} lg={7} xl={8}>
          <div className={styles.itemMargin}>
            <p className={styles.paragraph}>{data?.paragraph}</p>
            <p className={styles.paragraph}>{data?.paragraph1}</p>
            <div>
              {data?.image1 ? <img className={styles.image1} src={data?.image1} alt="image not found" />
                :
                <></>
              }
            </div>
            <p className={styles.paragraph}>{data?.paragraph2}</p>
            <h1>{data?.heading1}</h1>
            <p className={styles.paragraph}>{data?.paragraph3}</p>
            <p className={styles.paragraph}>{data?.paragraph4}</p>
            <p className={styles.paragraph1}>{data?.paragraph5}</p>
            <p className={styles.paragraph}>{data?.paragraph6}</p>
            <p className={styles.paragraph}>{data?.paragraph7}</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5} xl={4}>
          <div className={styles.scroll}>
            <div className={styles.box}>
              <p className={styles.subscribe}>Subscribe to our newsletter:</p>
              <div className={styles.inputDisplay}>
                <input className={styles.input} type='text' placeholder='Enter email and subscribe to new' />
                <div className={styles.icon}><img className={styles.imageIcon} src={"/right-arrow.png"} alt="" /></div>

              </div>

              <div className={styles.bgColor1}>
                <h3 className={styles.title}>Are you ready to work with us?</h3>
                <p className={styles.description1}>'We develop your project and turn it into a completed product'</p>
                <Button />
              </div>
              <p>Share:</p>
              <div className={styles.icon_display}>
                <div className={styles.icon_bg}>
                  <img className={styles.iconImage} src={"/facebook-black.svg"} alt="facebook" />

                </div>
                <div className={styles.icon_bg} >
                  <img className={styles.iconImage} src={"/twitter-black.svg"} alt="twitter" />
                </div>
                <div className={styles.icon_bg}>
                  <img className={styles.iconImage} src={"/linkedin-black.svg"} alt="linkedin" />

                </div>
              </div>
            </div>
          </div>
        </Grid>

      </Grid>
      <div className={styles.data_margin}>
        <h1 className={styles.heading}>
          Related Articles
        </h1>
        <Grid container spacing={0}>
          {
            data?.data2?.map((item: any) => {
              return (
                <Grid item sm={6} md={4} lg={4}>
                  <div className={styles.subDiv}>
                    <Link href={`/blogDetails/${item.id}`} >


                      <img className={styles.related_image} src={item?.img} alt="image not found" />
                    </Link>
                    <h1 className={styles.dateHeading}>{item.date}</h1>
                    <p className={styles.par_description}>{item.description}</p>
                    <div className={styles.display}>
                      <p className={styles.read}>{item.read}</p>
                      <img className={styles.displayIcon} src={item.icon} alt="icon is not found" />
                    </div>
                  </div>
                </Grid>
              )

            })
          }

        </Grid>
      </div>




    </div >
  )
}

export default AllDetails