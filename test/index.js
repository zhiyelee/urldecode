var decode = require('../');
var should = require('chai').should();

describe('urldecode', function(){
    it('url contains special chars, such as %20', function() {
      var str = decode('Become%20Efficient%20or%20Die.md');
      str.should.equal('Become Efficient or Die.md');

    });
    it('url contains invalid chars should return -1', function() {
      var str = decode('%EA');
      str.should.equal(-1);
    });
});
