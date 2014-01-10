'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

function doTest(test) {
  test.expect(3);

  var actual = grunt.file.read('tmp/fixtures/myProject/otherfolder/Potato.java');
  var expected = grunt.file.read('test/expected/myProject/otherfolder/Potato.java');
  test.equal(actual, expected, 'Should be equal if templato worked well');

  actual = grunt.file.read('tmp/fixtures/myProject/subfolder/foo.html');
  expected = grunt.file.read('test/expected/myProject/subfolder/foo.html');
  test.equal(actual, expected, 'Should be equal if templato worked well');

  actual = grunt.file.read('tmp/fixtures/myProject/index.js');
  expected = grunt.file.read('test/expected/myProject/index.js');
  test.equal(actual, expected, 'Should be equal if templato worked well');

  test.done();
}

exports.templato = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  jsonConfig: doTest,
  defaultConfig: doTest
};
