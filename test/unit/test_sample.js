/*
 * biojs-io-sample
 * https://github.com/ApunniM/biojs-io-sample
 *
 * Copyright (c) 2015 ApunniM
 * Licensed under the MIT license.
 */

// chai is an assertion library
var chai = require('chai');

// @see http://chaijs.com/api/assert/
var assert = chai.assert;

// register alternative styles
// @see http://chaijs.com/api/bdd/
chai.expect();
chai.should();

// requires your main app (specified in index.js)
var sample = require('../');

describe('biojs-io-sample module', function(){
  describe('#hello()', function(){
    it('should return a hello', function(){

      assert.equal(sample.hello('biojs'), ("hello biojs"));
      
      // alternative styles
      sample.hello('biojs').should.equal("hello biojs");
    });
  });
});
