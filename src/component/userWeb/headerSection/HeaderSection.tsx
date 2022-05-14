import React from 'react';
import Image from 'next/image';
import book from "../../../assests/book.png";
import { Row, Col } from 'react-bootstrap';
import CommontButton from "../../../commonComponent/commonButton/CommonButton";
import styles from "../../../../styles/HeaderSection.module.css";
import TextTransition, { presets } from "react-text-transition";
const TEXTS = [
  "Empower Yourself",
  "Soothing Courses to Enrich your life",
  "Secrets of Life",
  "Join Us Now"
];

const HeaderSection = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className={`mainContainer bgColor ${styles.headerSection}`}>
      <Row className="align-items-center" style={{ marginLeft: 0 }}>
        <Col xs={12} sm={12} md={12} lg={6} style={{ paddingLeft: 0 }}>
          <div className={`${styles.text_align}`}>
            <h1 className={`title ${styles.sectionTitle}`}>
              <TextTransition
                text={TEXTS[index % TEXTS.length]}
                springConfig={presets.wobbly}
              /></h1>
            <p className="paragraph">Thousands of Free online courses with Certificates and Diplomas
              Get Career Guidance and Boost Your Resume.No enrollment or subscription fees.
              Get Skilled. Get Certified. Get Hired.</p>
            <CommontButton title="Sign Up Now" />
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} className="d-flex justify-content-center">
          <div className={`${styles.courseImage}`}>
            <Image src={book} alt="courseImage" className={`${styles.imgFluid}`} />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default HeaderSection;