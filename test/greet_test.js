'use strict';

var expect = require('chai').expect;
var greeting = require('../lib/greeting');

describe('greeting', function() {
  it('should greet a person by name', function() {
    expect(greeting.greet('sam')).to.eql('hello sam');
  });

});
