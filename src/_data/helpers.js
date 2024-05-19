///
// TITLE: helpers.js
// PURPOSE: Allows dynamic and active data handling using JavaScript in an 11ty-based site.
// MADE BY: Kernen Yabut
// DATE CREATED: 5/19/2024
// LAST UPDATED: 5/19/2024
///

module.exports = {
    /**
   * Returns back some attributes based on whether the
   * link is active or a parent of an active item
   *
   * @param {String} itemUrl The link in question
   * @param {String} pageUrl The page context
   * @returns {String} The attributes or empty
   */
    getLinkActiveState(itemUrl, pageUrl)
    {
        let response = '';

        //Determines the urls between the item and the page 
        if(itemUrl === pageUrl)
        {
            response = ' aria-current="page"';
        }

        if(itemUrl.length > 1 && pageUrl.indexOf(itemUrl) === 0)
        {
            response += 'data-state="active"';
        }

        return response;
    }
}