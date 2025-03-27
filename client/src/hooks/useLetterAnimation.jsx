import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useLetterAnimation = (options = {}) => {
  const elementRef = useRef(null);
  
  const {
    duration = 0.5,
    stagger = 0.1,
    ease = "power2.out",
    delay = 0.5,
    ...gsapOptions
  } = options;
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    const text = element.textContent;
    
    element.innerHTML = '';
    
    // Split text into words
    const words = text.split(' ');
    
    // Create a wrapper for each word
    words.forEach((word, wordIndex) => {
      // Create a word wrapper span
      const wordSpan = document.createElement('span');
      wordSpan.style.display = 'inline-block';
      wordSpan.style.whiteSpace = 'nowrap';
      wordSpan.style.marginRight = '0'; // Add space between words
      
      // Create spans for each letter in the word
      [...word].forEach((letter) => {
        const letterSpan = document.createElement('span');
        letterSpan.textContent = letter;
        letterSpan.style.opacity = '0';
        letterSpan.style.display = 'inline-block';
        wordSpan.appendChild(letterSpan);
      });
      
      // Add the word to the element
      element.appendChild(wordSpan);
      
      // Add a line break if it's the last word and there are more words
      if (wordIndex < words.length - 1) {
        // Allow natural line breaks between words
        element.appendChild(document.createTextNode(' '));
      }
    });
    
    // Get all letter spans for animation
    const letterSpans = element.querySelectorAll('span > span');
    
    // Animate each letter
    gsap.to(letterSpans, {
      opacity: 1,
      duration,
      stagger,
      ease,
      delay,
      ...gsapOptions
    });
    
    // Cleanup function
    return () => {
      gsap.killTweensOf(letterSpans);
    };
  }, [duration, stagger, ease, delay, gsapOptions]);
  
  return elementRef;
};
