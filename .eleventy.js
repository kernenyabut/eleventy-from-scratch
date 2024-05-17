module.exports = config =>
{
    //Set directories to pass through to the dist folder
    config.addPassthroughCopy('./src/images/');

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