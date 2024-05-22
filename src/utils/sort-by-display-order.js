///
// TITLE: sort-by-display-order.js
// PURPOSE: Utility used to sort the display order of a given collection.
// MADE BY: Kernen Yabut
// DATE CREATED: 5/22/2024
// LAST UPDATED: 5/22/2024
///

/**
 * Takes a collection and returns it back in display order
 *
 * @param {Array} collection The 11ty collection
 * @returns {Array} the sorted collection
 */
module.exports = collection =>
    collection.sort((a, b) =>
      Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1
    );