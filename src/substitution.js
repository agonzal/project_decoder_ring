/* eslint-disable strict */

/*  Simple substitution cipher with key. 
    Albert Gonzalez <albertg@cerveau.us>
    */

function substitution(input, alphabet, encode = true) {
  const theAlphabet = 'abcdefghijklmnopqrstuvwxyz'; // self explanatory
  const sorted = alphabet.split('').sort().join(''); // split then sort then join input. 
  if (alphabet.length !== 26 || theAlphabet !== sorted) return false;

  const sortedAlphabet = theAlphabet.split('');
  const randomAlphabet = alphabet.split('');
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
        result.push(tmpVar); // push to result array. 
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
