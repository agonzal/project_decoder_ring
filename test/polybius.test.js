/* eslint-disable strict */
// Write your tests here!

const expect = require('chai').expect;
const polybius = require('../src/polybius.js');

describe('polybius', () => {
  it('When encoding, your output should still be a string.', () => {
    let actual = polybius('random');
    expect(actual).to.be.a('string');
  });

  it('When decoding, the number of characters in the string excluding spaces should be even. Otherwise, return false', () => {
    const actual = polybius('44324233521254134', false);
    expect(actual).to.be.false;
  });

  it('Spaces should be maintained throughout.', () => {
    const expected1 = 'hello world';
    const expected2 = '3251131343 2543241341';

    const actual1 = polybius('3251131343 2543241341', false);
    const actual2 = polybius('Hello world');

    expect(actual1).to.equal(expected1) && expect(actual2).to.equal(expected2);
  });

  it('Capital letters can be ignored.', () => {
    const expected = '4432423352125413';

    const lowerCase = polybius('thinkful');
    const upperCase = polybius('THINKFUL');

    expect(lowerCase && upperCase).to.equal(expected);
  });

  it('The letters "I" and "J" share a space. When encoding, both letters can be converted to 42, but when decoding, both letters should somehow be shown.', () => {
    const expected = '42';
    const actualI = polybius('i');
    const actualJ = polybius('j');

    const expectedDecoding = 'th(i/j)nkful';
    const actualDecoding = polybius('4432423352125413', false);

    expect(actualI && actualJ).to.equal(expected) &&
      expect(actualDecoding).to.equal(expectedDecoding);
  });
});
