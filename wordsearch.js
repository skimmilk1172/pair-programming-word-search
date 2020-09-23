const wordSearch = (letters, word) => { 
    /*
    1. First look horizontally
    2. If word not found horizontally, look vertically
    3. 
    */
    if (letters.length === 0) {
        return false;
    };


    if (word === undefined) {
        return false;
    };

    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    };

    letters = transpose(letters);
    const verticalJoin = letters.map(ls => ls.join(''));
    for (l of verticalJoin) {
        if (l.includes(word)) return true
    }
    
    return false;

};

const transpose = function(matrix) {
    // Put your solution here
    const rows = matrix.length;
    const columns = matrix[0].length;
    const output = []; 
  
    for (let i = 0; i < columns; i++) {
      output[i] = Array(rows);
    }
    for (let j = 0; j < rows; j++) {
      for (let i = 0; i < columns; i++) {
      output[i][j] = matrix[j][i]
      }
    }
    return output;
  };

module.exports = wordSearch

