import React from 'react';
import styles from './Contact.module.css';
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export const Contact = () => {
  return (
    <>
      <section id='contact' className={styles.contact_section}>
        <h2 className={styles.title_contact}>Contact</h2>
        <div className={styles.contact_container}>
          <div className={styles.contacts}>
            <div className={styles.cont}>
              <AiOutlineMail className={styles.icon} />
              <p>eliosdimo97@gmail.com</p>
            </div>
            <div className={styles.cont}>
              <a href='https://github.com/elios-dimo' target='_blank'>
                <AiFillGithub className={styles.icon} />
              </a>
              <a href='https://github.com/elios-dimo' target='_blank'>
                Github
              </a>
            </div>
            <div className={styles.cont}>
              <a href='https://www.linkedin.com/in/elios-dimo/' target='_blank'>
                <AiFillLinkedin className={styles.icon} />
              </a>
              <a href='https://www.linkedin.com/in/elios-dimo/' target='_blank'>
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
