///
// TITLE: date-filter.js
// PURPOSE: Filters a given date.
// MADE BY: Kernen Yabut
// DATE CREATED: 5/23/2024
// LAST UPDATED: 5/23/2024
///
const moment = require('moment');

module.exports = value => {
    const dateObject = moment(value);
    return `${dateObject.format('Do')} of ${dateObject.format('MMMM YYYY')}`;
};