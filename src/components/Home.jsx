import React from 'react';
import styles from './Home.module.css';
import mainPhoto from '../assets/mainPhoto.jpg';
import css from '../assets/css.png';
import html from '../assets/html.png';
import js from '../assets/js.png';
import reactIcon from '../assets/react.png';

export const Home = () => {
  return (
    <section className={styles.home} id='home'>
      <div className={styles.home_container}>
        <img src={mainPhoto} alt='My photo' className={styles.home_photo} />

        <div className={styles.home_info}>
          <div className={styles.home_text}>
            <p className={styles.par_one}>Hello I'm</p>
            <p className={styles.par_two}>Elios Dimo</p>
            <p className={styles.par_three}>Frontend Developer</p>
          </div>
          <div className={styles.home_icons}>
            <p className={styles.par_four}>Tech stack |</p>
            <div>
              {' '}
              <img src={html} className={styles.icon} />
              <img src={css} className={styles.icon} />
              <img src={js} className={styles.icon} />
              <img src={reactIcon} className={styles.icon} />
            </div>
          </div>
          <div>
            <a className={styles.contact} href='#contact'>
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
