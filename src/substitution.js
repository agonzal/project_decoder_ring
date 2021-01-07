/* eslint-disable strict */

/*  Simple substitution cipher with key. 
    Albert Gonzalez <albertg@cerveau.us>
    */

function isUnique(str) {
  return new Set(str).size === str.length;
}

function substitution(input, alphabet, encode = true) {
  const theAlphabet = 'abcdefghijklmnopqrstuvwxyz'; // self explanatory
  // const sorted = alphabet.split('').join(''); // split then sort then join input. 
  // if (!input || alphabet.length !== 26 || typeof alphabet !== 'string' || typeof input !== 'string') return false;

  if (!alphabet || alphabet.length !== 26 || !input) return false;

  if ( isUnique(alphabet) === false) return false; 

  

  const sortedAlphabet = theAlphabet.split('');
  const randomAlphabet = alphabet.split('').join('');
  const result = [];

  if (encode) { // default unless stated otherwise. 
    input
      .toLowerCase() // ignore uppercase - could be diff value.  
      .split(' ')   // divide string => substrings => array
      .forEach((words) => {
        let tmpVar = '';

        // we split again to pull out each character. 
        words.split('').forEach((character) => {

          // match character at index location from key.  
          tmpVar += randomAlphabet[sortedAlphabet.indexOf(character)];
        });
        result.push(tmpVar); // push to result array. Ss
      });
  } else { // now we do it reverse to decode. use sortedAlphabet now. 
    input
      .toLowerCase() // ignoring case. let's make all strings lowercase.
      .split(' ')
      .forEach((words) => {
        let tmpVar = '';
        words.split('').forEach((character) => {
          
          // match character at index from alphabet. 
          tmpVar += sortedAlphabet[randomAlphabet.indexOf(character)];
        });
        result.push(tmpVar); // push to [result]
      });
  }
  return result.join(' '); // return [result]
}

module.exports = substitution;
