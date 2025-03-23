// Background image and its pixelated version
import aboutBg from './about-bg.jpg';
import aboutBgSmall from './about-bg-small.jpg';

// Team member images
import male1 from './male1.jpg';
import male1Small from './male1-small.jpg';

import male2 from './male2.jpg';
import male2Small from './male2-small.jpg';

import male3 from './male3.jpg';
import male3Small from './male3-small.jpg';

import female1 from './female1.jpg';
import female1Small from './female1-small.jpg';

import female2 from './female2.jpg';
import female2Small from './female2-small.jpg';

export default {
  about: {
    original: aboutBg,
    placeholder: aboutBgSmall,
  },

  team: {
    male1: {
      original: male1,
      placeholder: male1Small,
    },
    male2: {
      original: male2,
      placeholder: male2Small,
    },
    male3: {
      original: male3,
      placeholder: male3Small,
    },
    female1: {
      original: female1,
      placeholder: female1Small,
    },
    female2: {
      original: female2,
      placeholder: female2Small,
    },
  },
};
