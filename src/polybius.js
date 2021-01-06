/* eslint-disable strict */
//

function polybius(input, encode = true) {
  if (!input) return false;
  if (typeof input !== 'string') return false; // verify our input is a string return false otherwise. 
  
  //if((input.trim().length)%2 != 0) return false
    let specialChars = '~`!#$%^&*+=-[]\\\';,/{}|":<>?';   // regex for special characters. 
  for (let i = 0; i < input.length; i++) {
    
    if (specialChars.indexOf(input[i]) !== -1) return false; 
  }

 
  const inputs = input.toLowerCase();
  if (encode) {
    const polyGrid = {
      a: 11,
      b: 21,
      c: 31,
      d: 41,
      e: 51,
      f: 12,
      g: 22,
      h: 32,
      i: 42,
      j: 42,
      k: 52,
      l: 13,
      m: 23,
      n: 33,
      o: 43,
      p: 53,
      q: 14,
      r: 24,
      s: 34,
      t: 44,
      u: 54,
      v: 15,
      w: 25,
      x: 35,
      y: 45,
      z: 55,
      ' ': ' ',
    };
    return inputs
      .split('')
      .map((char) => {
        return polyGrid[char];
      })
      .join('');
  }
  if (!encode) {
   
    const whiteSpace = inputs.replace(/[ ]+/g, 56);  // preserve white-space. 
    if (whiteSpace.length % 2 !== 0) return false; // input length not even ? return false. 
    const polyGrid = {
      11: 'a',
      21: 'b',
      31: 'c',
      41: 'd',
      51: 'e',
      12: 'f',
      22: 'g',
      32: 'h',
      42: '(i/j)',  // special case for i/j 
      52: 'k',
      13: 'l',
      23: 'm',
      33: 'n',
      43: 'o',
      53: 'p',
      14: 'q',
      24: 'r',
      34: 's',
      44: 't',
      54: 'u',
      15: 'v',
      25: 'w',
      35: 'x',
      45: 'y',
      55: 'z',
      56: ' ',
    };
    let results = [];
    for (let i = 0; i < whiteSpace.length; i += 2) {
      let num = whiteSpace[i] + whiteSpace[i + 1];
      results.push(polyGrid[num]);
    }
    return results.join('');
  }
}

module.exports = polybius;
