/* eslint-disable strict */
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

function caesar(input, shift, encode = true) {
  
  // validate parameters. 

  if (!shift || shift > 25 || shift < -25 || shift === 0) return false;
  

  let result = [];

  if (!encode) shift = 0 - shift; // 

  const words = input.toLowerCase().split(' '); // iterate over input, split string into individual words.  
  

  for (let word in words) { // iterate over [words] 
    
    const currentWord = words[word];

    for (let letter in currentWord) { // iterate each word to retrieve each character. 
     
      const current0 = currentWord[letter];

      let charIndex = alphabet.indexOf(current0); // use index location to find corresponding substitution character. 

      if (charIndex + shift > 25) { 
        charIndex -= 26;      // if true subtract 26. 
      } else if (charIndex + shift < -25) {   
        charIndex += 26;      // Add 26 when false. 
      }
     
      result.push(alphabet[charIndex + shift]);
      // push character at that index point + shift value to result array.
    }
    result.push(' ');
    
  }
  result.pop();
  return result.join('');   // return the final result adding whitespaces. 
}

module.exports = caesar;
