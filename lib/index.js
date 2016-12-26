/*
 * biojs-io-sample
 * https://github.com/ApunniM/biojs-io-sample
 *
 * Copyright (c) 2016 ApunniM
 * Licensed under the MIT license.
 */

/**
@class biojsiosample
 */


var  biojsiosample;
module.exports = biojsiosample = function(opts){
  this.el = opts.el;
  this.el.textContent = biojsiosample.hello(opts.text);
};

/**
 * Private Methods
 */

/*
 * Public Methods
 */

/**
 * Method responsible to say Hello
 *
 * @example
 *
 *     biojsiosample.hello('biojs');
 *
 * @method hello
 * @param {String} name Name of a person
 * @return {String} Returns hello name
 */


biojsiosample.hello = function (name) {

  return 'hello ' + name;
};

