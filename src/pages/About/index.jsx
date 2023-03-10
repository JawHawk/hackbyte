import React from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import styles from "./styles.module.scss";
import Photo_1 from "../../assets/Photo-1.jpg";
import Photo_2 from "../../assets/Photo-2.jpg";
import Photo_3 from "../../assets/Photo-3.jpg";
import Photo_4 from "../../assets/Photo-4.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PageHeading from "../../components/PageHeading";
import PageContainer from "../../components/PageContainer";
import Button from "../../components/Button";
import FAQ from "../FAQ";


const About = () => {
  return (
    <PageContainer>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className={styles.container}
      >
        <PageHeading title='ABOUT' subHeading='What is Hackbyte?' />
        <div className={styles.text}>
          <p>
            Hackbyte is the annual hackathon of IIIT Jabalpur taking place from
            <span style={{
              color: "#fff",
              fontWeight: "bold",
            }}> 7th to 9th April</span> and is organised
            by <span style={{
              color: "#fff",
              fontWeight: "bold",
            }}> The Programming Club (TPC)</span> run by students of our institute. This will
            bring together developers and problem solvers from diverse
            backgrounds to collaborate on innovative projects. The event offers
            a unique and challenging learning experience for participants,
            providing them the opportunity to work with the latest technologies
            and expand their skills.
          </p>
        </div>
        <div className={styles.opportunity}>
          <div className={styles.innerFlex}>
            <div className={styles.left}>
              <h2>Opportunities for Participants</h2>
              <p>
                Participants will have the opportunity to work on projects in
                teams, and the best projects will be awarded prizes, including
                domain-specific prizes. In addition to the hackathon, we will be
                hosting workshops, mentorship sessions, and networking
                opportunities for participants to connect with industry
                professionals and developer communities from around the world.
              </p>
            </div>
            {/* <div className={styles.right}>
              <img src={man} width='400px' />
            </div> */}
          </div>
        </div>
        <div className={styles.gallery}>
          <p>Past Events Gallery</p>
          <div className={styles.photos}>
            <div className={styles.photo}>
              <LazyLoadImage
                src={Photo_1}
                alt=''
                effect='blur'
                placeholderSrc={Photo_1}
              />
            </div>
            <div className={styles.photo}>
              <LazyLoadImage
                src={Photo_2}
                alt=''
                effect='blur'
                placeholderSrc={Photo_2}
              />
            </div>
            <div className={styles.photo}>
              <LazyLoadImage
                src={Photo_3}
                alt=''
                effect='blur'
                placeholderSrc={Photo_3}
              />
            </div>
            <div className={styles.photo}>
              <LazyLoadImage
                src={Photo_4}
                alt=''
                effect='blur'
                placeholderSrc={Photo_4}
              />
            </div>
          </div>
        </div>
        {/* FAQ SECTION */}
        <div className={styles.faq}>
          <FAQ />
        </div>
      </motion.div>
    </PageContainer>
  );
};
export default About;
