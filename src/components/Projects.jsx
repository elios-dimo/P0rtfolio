import React from 'react';
import styles from './Projects.module.css';
import Todo from '../assets/Todo.gif';
import MovieApp from '../assets/MovieApp.gif';
import GlobalHotel from '../assets/GlobalHotel.gif';
import IceTea from '../assets/IceTea.gif';
import { useState } from 'react';
import {
  PiArrowSquareLeftFill,
  PiArrowSquareRightFill,
  PiArrowSquareOutBold,
} from 'react-icons/pi';

import { AiFillGithub } from 'react-icons/ai';

export const Projects = () => {
  const projects = [
    {
      title: 'Todo App',
      gif: Todo,
      desc: 'A simple todo app. User enters his input and by clicking add button it is added in the list. He can check if his todo is completed or delete it. Upon refreshing page list remains there cause of local storage.',
      github: 'https://github.com/elios-dimo/Todoapp',
      website: 'https://elios-dimo.github.io/Todoapp/',
    },
    {
      title: 'Movie App',
      gif: MovieApp,
      desc: 'A movie info app with where the user enters the name of a movie and gets a list of related ones. Clicking one of the movies in the list redirects him to that movie title, year, director, poster and plot.',
      github: 'https://github.com/elios-dimo/MovieAppInfo',
      website: 'https://elios-dimo.github.io/MovieAppInfo/',
    },
    {
      title: 'Hotel App',
      gif: GlobalHotel,
      desc: 'A hotel search that gives you hotel options and prices depending on destination, dates and number of people visiting. Upon clicking on hotel you can see the hotel photos and description. I used booking API. Keep in mind that since I use free version there is a limit in API calls every month.',
      github: 'https://github.com/elios-dimo/GlobalHotel',
      website: 'https://elios-dimo.github.io/GlobalHotel/',
    },
    {
      title: 'IceTea e-shop',
      gif: IceTea,
      desc: 'Ice tea e-commerce website. I am showcasing filter functionality depending on company, price, flavor and user input. Lastly there is cart functionality showing price for each item and total price aswell. My database is custom made using skroutz.gr products info.',
      github: 'https://github.com/elios-dimo/IceTea',
      website: 'https://elios-dimo.github.io/IceTea/',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const goNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <>
      <div id='projects' className={styles.projects_section}>
        <h2 className={styles.title_projects}>Projects</h2>

        <div className={styles.projects_container}>
        <PiArrowSquareLeftFill className={styles.arrow} onClick={goPrev} />
          <div className={styles.projects}>
            <img
              className={styles.projects_gif}
              src={projects[currentIndex].gif}
              alt={projects[currentIndex].desc}
            />
            <div className={styles.line}></div>
            <div className={styles.projects_text}>
              <div className={styles.projects_title}>
                <h3>{projects[currentIndex].title}</h3>
              </div>
              <div className={styles.projects_desc}>
                {projects[currentIndex].desc}
              </div>
              <div className={styles.links}>
                <div className={styles.link}>
                  <AiFillGithub className={styles.icon} />
                  <a
                    href={projects[currentIndex].github}
                    target='_blank'
                    className={styles.link_name}
                  >
                    Github
                  </a>
                </div>
                <div className={styles.link}>
                  <PiArrowSquareOutBold className={styles.icon} />
                  <a
                    href={projects[currentIndex].website}
                    target='_blank'
                    className={styles.link_name}
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        <PiArrowSquareRightFill className={styles.arrow} onClick={goNext} />
        </div>
      </div>
    </>
  );
};
