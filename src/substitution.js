/*  Simple substitution cipher with key. 
    Albert Gonzalez <albertg@cerveau.us>
    */

function isUnique(str) {
  return new Set(str).size === str.length; // input alphabet must be unique.
}

function substitution(input, alphabet, encode = true) {
  const theAlphabet = "abcdefghijklmnopqrstuvwxyz"; // self explanatory

  if (
    !alphabet ||
    alphabet.length !== 26 ||
    !input ||
    isUnique(alphabet) === false
  )
    return false;

  const sortedAlphabet = theAlphabet.split("");
  const randomAlphabet = alphabet.split("").join("");
  const result = [];

  if (encode) {
    // default unless stated otherwise.
    input
      .toLowerCase() // ignore uppercase - could be diff value.
      .split(" ") // divide string => substrings => array
      .forEach((words) => {
        let tmpVar = "";

        words.split("").forEach((char) => {
          // we split again to pull out each character.

          tmpVar += randomAlphabet[sortedAlphabet.indexOf(char)]; // match char at index location from key (randomAlphabet)
        });
        result.push(tmpVar); // push to result array.
      });
  } else {
    input
      .toLowerCase() // ignoring case. let's make all strings lowercase.
      .split(" ")
      .forEach((words) => {
        let tmpVar = "";
        words.split("").forEach((char) => {
          tmpVar += sortedAlphabet[randomAlphabet.indexOf(char)]; // match char at index from sortedAlphabet
        });
        result.push(tmpVar); // push to [result]
      });
  }
  return result.join(" "); // return [result]
}

module.exports = substitution;
