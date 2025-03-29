import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';

export const useLetterAnimation = (options = {}) => {
  const elementRef = useRef(null);
  const { i18n } = useTranslation();
  const [textContent, setTextContent] = useState('');

  const {
    duration = 0.5,
    stagger = 0.1,
    ease = 'power2.out',
    delay = 0.5,
    ...gsapOptions
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    element.style.opacity = '0';

    return () => {
      element.style.opacity = '1';
    };
  }, []);

  // Capture the text content when it changes
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Store the current text content
    setTextContent(element.textContent);
  }, [i18n.language]);

  // Snimate the text when textContent changes
  useEffect(() => {
    const element = elementRef.current;
    if (!element || !textContent) return;

    element.innerHTML = '';

    // Make the container visible again
    element.style.opacity = '1';

    // Split text into words
    const words = textContent.split(' ');

    // Create a wrapper for each word
    words.forEach((word, wordIndex) => {
      // Create a word wrapper span
      const wordSpan = document.createElement('span');
      wordSpan.style.display = 'inline-block';
      wordSpan.style.whiteSpace = 'nowrap';
      wordSpan.style.marginRight = '0';

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
      ...gsapOptions,
    });

    // Cleanup function
    return () => {
      gsap.killTweensOf(letterSpans);
    };
  }, [textContent, duration, stagger, ease, delay, gsapOptions]);

  return elementRef;
};
