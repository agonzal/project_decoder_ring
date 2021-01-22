function caesar(input, shift, encode = true) {
  if (!shift || shift > 25 || shift < -25 || shift === 0) return false;

  if (!encode) shift = 0 - shift; // set initial shift

  const alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("");
  let res = "";

  for (let i = 0; i < input.length; i++) {
    const char = input[i].toLowerCase();
    const idx = alphabetArr.indexOf(char);

    // if it is not a letter, don`t shift it
    if (idx === -1) {
      res += char;
      continue;
    }

    // only 26 letters in alphabet, if > 26 it wraps around
    const encodedIdx = (idx + shift) % 26;
    res += alphabetArr[encodedIdx];
  }
  return res;
}

module.exports = caesar;
