define(function(require, exports, module) {
  var a = require('src/example');

  describe("A suite", function() {
    it("contains spec with an expectation", function() {
      expect(a()).toBe(true);
    });
  });

});