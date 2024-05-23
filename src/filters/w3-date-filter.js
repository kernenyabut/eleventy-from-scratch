///
// TITLE: w3-date-filter.js
// PURPOSE: Filters a given W3 date.
// MADE BY: Kernen Yabut
// DATE CREATED: 5/23/2024
// LAST UPDATED: 5/23/2024
///

module.exports = value => {
    const dateObject = new Date(value);

    return dateObject.toISOString();
};