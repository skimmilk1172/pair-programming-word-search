const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });
    it("should return true if the word is present", function() {
      const result = wordSearch([
        ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
        ['S', 'E', 'I', 'G', 'F', 'E', 'L', 'D'],
        ['Y', 'F', 'C', 'E', 'Q', 'U', 'A', 'L'],
        ['H', 'M', 'J', 'O', 'E', 'V', 'R', 'G'],
        ['W', 'H', 'C', 'R', 'Y', 'E', 'R', 'L'],
        ['B', 'F', 'R', 'G', 'N', 'E', 'Y', 'B'],
        ['U', 'B', 'T', 'E', 'A', 'P', 'A', 'I'],
        ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
        ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
      ], 'GEORGE')
  
      assert.isTrue(result);
    });
    it("should return false if the word array is empty", function() {
      const result = wordSearch([], 'GEORGE')
  
      assert.isFalse(result);
    });
    it("should return true if there is no word", function() {
      const result = wordSearch([        
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'G', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'E', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'O', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'R', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'G', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'E', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L']
    ], '')
  
      assert.isTrue(result);
    });
});
