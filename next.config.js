// next.config.js
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const nextImageConfig = {
    images: {
        domains: ['suggestrank.com'], // your domain
    },
};

module.exports = withPlugins([
  [optimizedImages, {
    /* config for next-optimized-images */
  }],
 
  
  // your other plugins here

],
nextImageConfig);
