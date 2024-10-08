///
// TITLE: .eleventy.js
// PURPOSE: A config module that allows specific methods that are called on the website, using 11ty and nunjacks.
// MADE BY: Kernen Yabut
// DATE CREATED: 5/22/2024
// LAST UPDATED: 5/30/2024
///

// Filters
const dateFilter = require('./src/filters/date-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');

//Plugins
const rssPlugin = require('@11ty/eleventy-plugin-rss');


//Variables
const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');


module.exports = config =>
{

    // Add filters
    config.addFilter('dateFilter', dateFilter);
    config.addFilter('w3DateFilter', w3DateFilter);

    //Adds plugins
    config.addPlugin(rssPlugin);

    //Set directories to pass through to the dist folder
    config.addPassthroughCopy('./src/images/');

    //Returns work items, sorted by display order
    config.addCollection('work', collection =>{

        // Note to self - this is like LINQ
        // Returns an array by calling the 11ty collection API 
        return sortByDisplayOrder(collection.getFilteredByGlob('./src/work/*.md'));
    });

    //Returns featured work, sorted by display order
    config.addCollection('featuredWork', collection =>{

        // Returns an array by calling the 11ty collection API 
        return sortByDisplayOrder(collection.getFilteredByGlob('./src/work/*.md'))
            .filter(x => x.data.featured);
    });

    //Returns a collection of blog posts in reverse date order
    config.addCollection('blog', collection =>{
        return [...collection.getFilteredByGlob('./src/posts/*.md')].reverse();
    });

    //Returns a list of people ordered by filename
    config.addCollection('people', collection =>{
        return collection.getFilteredByGlob('./src/people/*.md').sort((a, b) => {
            return Number(a.fileSlug) > Number(b.fileSlug) ? 1 : -1;
          });
    });

    // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
    config.setUseGitIgnore(false);

    //Returns function nunjucks declarations
    return{

        //Nunjucks statement declarations
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',

        dir: {
            input: 'src',
            output: 'dist'
        }
    };
};