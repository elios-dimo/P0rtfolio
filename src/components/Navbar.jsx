import React from 'react';
import styles from './Navbar.module.css';
import { HiMenu } from 'react-icons/hi';
import { useState, useEffect } from 'react';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuIconClick = () => {
    if (window.innerWidth <= 860) {
      setMenuOpen(!menuOpen);
    }
  };

  const handleWindowResize = () => {
    if (window.innerWidth > 860) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
  }, []);

  return (
    <nav>
      <div className={styles.nav_container}>
        <a href='#'>
          <h2>Elios Dimo</h2>
        </a>
        <HiMenu
          className={`${styles.menu_icon}`}
          onClick={handleMenuIconClick}
        />

        <div
          className={` ${
            menuOpen ? styles.menu_items_open : styles.menu_items
          }`}
        >
          <a href='#home' className={styles.menu}>
            Home
          </a>

          <a href='#about' className={styles.menu}>
            About
          </a>

          <a href='#projects' className={styles.menu}>
            Projects
          </a>

          <a href='#contact' className={styles.menu}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};
