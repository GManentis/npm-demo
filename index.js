const _ = require('underscore');
const { Custom } = require('./custom');
require('../npm-demo/custom');

const hasParam = _.contains([0,1,2], 5);

//console.log(hasParam);
const myClass = new Custom();
console.log(myClass.param);