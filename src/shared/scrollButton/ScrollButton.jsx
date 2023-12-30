"use client"
import { useEffect, useState } from 'react';
import styles from './ScrollButton.module.css'; // CSS file for styling

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when the page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY> 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior:'smooth', // For smooth scrolling
    });
  };

  return (
    <div className={styles.scrollButton}>
      {isVisible && (
        <button onClick={scrollToTop} className={styles.scrollBtn}>
          <span>↑</span>
          <span className={styles.screenReaderText}>Back to Top</span>
        </button>
      )}
    </div>
  );
};

export default ScrollButton;
