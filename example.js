// Dependencies.
var collapse = require('./index.js');

// Collapse white space:
var result = collapse('\tfoo \n\tbar  \t\r\nbaz');

// Yields:
console.log('text', result);
