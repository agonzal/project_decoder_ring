
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

function caesar(input, shift, encode = true) {
  
  // validate parameters. 

  if (!shift || shift > 25 || shift < -25 || shift === 0) return false;
  

  let result = [];

  if (!encode) shift = 0 - shift; // 

  const words = input.toLowerCase().split(' '); // iterate over input, split string into individual words.  
  

  for (let word in words) { // iterate over [words] 
    
    const currentWord = words[word];
    let emptyStr = '';

    for (let letter in currentWord) { // iterate each word to retrieve each character. 
     
      const current0 = currentWord[letter];

      let charIndex = alphabet.indexOf(current0) + shift; // use index location to find corresponding substitution character. 

      if (charIndex > 25) { 
        charIndex -= 26;      // if true subtract 26. 
      } else if (charIndex < 0) {   
        charIndex += 26;      // Add 26 when false. 
      }
     
      emptyStr += alphabet[charIndex];

      // push character at that index point + shift value to result array.
    }
    result.push(emptyStr);
    
  }
  
  return result.join(' ');   // return the final result adding whitespaces. 
}

module.exports = caesar;




