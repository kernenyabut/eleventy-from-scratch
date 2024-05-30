///
// TITLE: global.js
// PURPOSE: Javascript file for the global aspect of the site
// MADE BY: Kernen Yabut
// DATE CREATED: 5/23/2024
// LAST UPDATED: 5/23/2024
///

// Creates a hash
module.exports = {
    random() {
      const segment = () => {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      };
      return `${segment()}-${segment()}-${segment()}`;
    }
  };