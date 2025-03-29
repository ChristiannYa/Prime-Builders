import servicesBg from './services-bg.jpg';
import servicesBgSmall from './services-bg-small.jpg';

import customHome from './custom-home.jpg';
import customHomeSmall from './custom-home-small.jpg';

import outdoor from './outdoor.jpg';
import outdoorSmall from './outdoor-small.jpg';

import renovation from './renovation.jpg';
import renovationSmall from './renovation-small.jpg';

import recentWork1 from './recent-work-1.jpg';
import recentWork1Small from './recent-work-1-small.jpg';
import recentWork2 from './recent-work-2.jpg';
import recentWork2Small from './recent-work-2-small.jpg';
import recentWork3 from './recent-work-3.jpg';
import recentWork3Small from './recent-work-3-small.jpg';
import recentWork4 from './recent-work-4.jpg';
import recentWork4Small from './recent-work-4-small.jpg';
import recentWork5 from './recent-work-5.jpg';
import recentWork5Small from './recent-work-5-small.jpg';

export default {
  services: {
    original: servicesBg,
    placeholder: servicesBgSmall,
  },

  customHome: {
    original: customHome,
    placeholder: customHomeSmall,
  },
  renovation: {
    original: renovation,
    placeholder: renovationSmall,
  },
  outdoor: {
    original: outdoor,
    placeholder: outdoorSmall,
  },

  recentWork: [
    {
      key: 1,
      original: recentWork1,
      placeholder: recentWork1Small,
    },
    {
      key: 2,
      original: recentWork2,
      placeholder: recentWork2Small,
    },
    {
      key: 3,
      original: recentWork3,
      placeholder: recentWork3Small,
    },
    {
      key: 4,
      original: recentWork4,
      placeholder: recentWork4Small,
    },
    {
      key: 5,
      original: recentWork5,
      placeholder: recentWork5Small,
    },
  ],
};
