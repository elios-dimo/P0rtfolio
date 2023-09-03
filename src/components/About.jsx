import React from 'react';
import styles from './About.module.css';
import { BsArrowDown } from 'react-icons/bs';
import { useState } from 'react';

export const About = () => {
  const [firstq, setFirstq] = useState(false);
  const [secondq, setSecondq] = useState(false);
  const [thirdq, setThirdq] = useState(false);
  const [fourthq, setFourthq] = useState(false);
  const [fifthq, setFifthq] = useState(false);
  const [sixthq, setSixthq] = useState(false);

  const handleOne = () => {
    setFirstq(!firstq);
    setSecondq(false);
    setThirdq(false);
    setFourthq(false);
    setFifthq(false);
    setSixthq(false);
  };
  const handleTwo = () => {
    setFirstq(false);
    setSecondq(!secondq);
    setThirdq(false);
    setFourthq(false);
    setFifthq(false);
    setSixthq(false);
  };
  const handleThree = () => {
    setFirstq(false);
    setSecondq(false);
    setThirdq(!thirdq);
    setFourthq(false);
    setFifthq(false);
    setSixthq(false);
  };
  const handleFour = () => {
    setFirstq(false);
    setSecondq(false);
    setThirdq(false);
    setFourthq(!fourthq);
    setFifthq(false);
    setSixthq(false);
  };
  const handleFive = () => {
    setFirstq(false);
    setSecondq(false);
    setThirdq(false);
    setFourthq(false);
    setFifthq(!fifthq);
    setSixthq(false);
  };
  const handleSix = () => {
    setFirstq(false);
    setSecondq(false);
    setThirdq(false);
    setFourthq(false);
    setFifthq(false);
    setSixthq(!sixthq);
  };
  return (
    <>
      <div id='about' className={styles.about_section}>
        <h2 className={styles.title_about}>About</h2>
        <div className={styles.about}>
          <div className={styles.about_container}>
            <div className={styles.firstq} onClick={handleOne}>
              <div
                className={`${styles.questions} ${firstq ? styles.active : ''}`}
              >
                <div> Who am I?</div>
                <BsArrowDown />
              </div>
            </div>
            {firstq && (
              <p className={styles.answer}>
                My name is Elios Dimo, I am of Albanian ethnicity and I grew up
                in Greece. I'm 26 years old and I live in Korydallos, Athens.
              </p>
            )}
            <div className={styles.secondq} onClick={handleTwo}>
              <div
                className={`${styles.questions} ${
                  secondq ? styles.active : ''
                }`}
              >
                <div> Education/Skills</div>
                <BsArrowDown />
              </div>
            </div>
            {secondq && (
              <p className={styles.answer}>
                I am a passionate college student at the University of West
                Attica, very close to acquiring my Bachelor's degree in Computer
                and Informatics Engineering, with only one subject left! <br />{' '}
                I didn't know specifically what I wanted to do in my life until
                the last 1-2 years when frontend development caught my
                attention. Since then, on top of what I've learned at
                university, which includes the fundamentals of almost all
                programming languages (C, C++, Java, JavaScript, Python), and
                basic knowledge in the hardware and networks fields, I became
                self-taught and put all my focus on learning HTML, CSS,
                JavaScript, and React.js.
              </p>
            )}
            <div className={styles.thirdq} onClick={handleThree}>
              <div
                className={`${styles.questions} ${thirdq ? styles.active : ''}`}
              >
                <div> Personality</div>
                <BsArrowDown />
              </div>
            </div>
            {thirdq && (
              <p className={styles.answer}>
                I have worked really hard for everything in my life since
                nothing ever came easy to me. Working under pressure and facing
                new challenges or uncomfortable situations are some of my strong
                points. I am patient and pay attention to detail and quality. I
                am easy to get along with and can work either within a team or
                on my own. Open minded and willing to learn new technologies to
                enchance my skills. I have self-confidence in my abilities and,
                with proper guidance, I can develop very easily and quickly.
              </p>
            )}
            <div className={styles.fourthq} onClick={handleFour}>
              <div
                className={`${styles.questions} ${
                  fourthq ? styles.active : ''
                }`}
              >
                <div>Hobbies </div>
                <BsArrowDown />
              </div>
            </div>
            {fourthq && (
              <p className={styles.answer}>
                I enjoy everything watchable—movies, series, and anime. I create
                rap beats when I feel like it. As a kid, I played a ton of
                football, so I really enjoy playing it under the right
                circumstances. I also hit the gym from time to time. During the
                last years, and mostly the last half, I have put everything
                aside to focus and achieve my goal, which is to find a frontend
                developer job!
              </p>
            )}
            <div className={styles.sixthq} onClick={handleFive}>
              <div
                className={`${styles.questions} ${fifthq ? styles.active : ''}`}
              >
                <div>Current/Future Goals </div>
                <BsArrowDown />
              </div>
            </div>
            {fifthq && (
              <p className={styles.answer}>
                My current goal is to find a junior position job in frontend. I
                already completed an internship at a company from January to May
                2023, but it was an advertising company and I didn't have the
                chance to focus that much on the frontend part. Now I need
                something that specializes in frontend development to grow and,
                at the same time, contribute to the company that put faith in
                me. <br /> Throughout the years, I want to become an expert in
                frontend development and also learn new technologies. In the
                future, I would like to own my own company, maybe a SaaS, or
                even become a freelancer.
              </p>
            )}
            <div className={styles.sixthq} onClick={handleSix}>
              <div
                className={`${styles.questions} ${sixthq ? styles.active : ''}`}
              >
                <div> Conclusion</div>
                <BsArrowDown />
              </div>
            </div>
            {sixthq && (
              <p className={styles.answer}>
                Thank you for reading everything and taking the time
                to consider me as a candidate for the job. I would like to
                highlight that I am in search of an entry/junior position
                however as I mentioned before I can take up any challenge. I am
                determined to succeed in the frontend field and I plan to keep
                working until I achieve my goal!
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
