///
// TITLE: helpers.js
// PURPOSE: Allows dynamic and active data handling using JavaScript in an 11ty-based site.
// MADE BY: Kernen Yabut
// DATE CREATED: 5/19/2024
// LAST UPDATED: 5/27/2024
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
    },

    /**
     * Filters out the passed item from the passed collection
     * and randomises and limits them based on flags
     *
     * @param {Array} collection The 11ty collection we want to take from
     * @param {Object} item The item we want to exclude (often current page)
     * @param {Number} limit=3 How many items we want back
     * @param {Boolean} random=true Wether or not this should be randomised
     * @returns {Array} The resulting collection
     */
    getSiblingContent(collection, item, limit = 3, random = true) {

        //Gets all filtered items that is not the current blog post
        let filteredItems = collection.filter(x => x.url !== item.url);

        if(random)
        {
            let counter = filteredItems.length;

            while(counter > 0)
            {
                //Picks a random index
                let index = Math.floor(Math.random() * counter);

                counter--;

                let temp = filteredItems[counter];

                //Swap the last element with the random one
                filteredItems[counter] = filteredItems[index];
                filteredItems[index] = temp;

            }
        }

        //Trim to length
        if(limit > 0)
        {
            filteredItems = filteredItems.slice(0, limit);
        }

        return filteredItems;
    },

    /**
     * Take an array of keys and return back items that match.
     * Note: items in the collection must have a key attribute in
     * Front Matter
     *
     * @param {Array} collection 11ty collection
     * @param {Array} keys collection of keys
     * @returns {Array} result collection or empty
     */
    filterCollectionByKeys(collection, keys) {
        return collection.filter(x => keys.includes(x.data.key));
    },
  
};