///
// TITLE: fonts.js
// PURPOSE: Imports fonts locally to the site.
// MADE BY: Kernen Yabut
// DATE CREATED: 5/30/2024
// LAST UPDATED: 5/30/2024
///

const {dest, src} = require('gulp');
const GetGoogleFonts = require('get-google-fonts');

const fonts async () => {
    // Setup of the library instance by setting where we want
    // the output to go. CSS is relative to output font directory
    const instance = new GetGoogleFonts({
        outputDir: './dist/fonts',
        cssFile: './fonts.css'
    });

    //Grabs fonts and CSS from google and puts in the dist folder
    const result = await instance.download(
        'https://fonts.googleapis.com/css2?family=Literata:ital,wght@0,400;0,700;1,400&family=Red+Hat+Display:wght@400;900'
    );

    return result;
}

module.exports = fonts;