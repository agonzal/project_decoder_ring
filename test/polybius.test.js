/* eslint-disable strict */
// Write your tests here!

const expect = require('chai').expect;
const polybius = require('../src/polybius.js');

describe('polybius', () => {

  it("Should actually encodes", () => {
    const expected = '4432423352125413';
    const actual = polybius('thinkful');
    expect(expected).to.equal(actual);
  })

  it('Should return false if the input is not a string', () => {
    const actual = polybius(31);
    expect(actual).to.be.false;
  })

  it("Should only allow spaces and letters will be included.", () => {
    const expected = '3251131343 2543241341 3251131343 2543241341';
    const actual = polybius('He!ll!o ??world#@ He!ll!o ??world#@');
    expect(actual).to.be.false;
  });

  it("Should ignore capital letters", () => {
    const expected = '4432423352125413';
    const actual = polybius('THINKFUL');
    expect(expected).to.equal(actual);
  })

  it("Should decode the given input", () => {
    const expected = 'hello world';
    const actual = polybius('3251131343 2543241341', false);
    expect(expected).to.equal(actual);
  })

  it('Should convert i & j to 42', () => {
    const expected = '4242';
    const actual = polybius('ij');
    expect(expected).to.equal(actual);
  })

  it("When decoding, 42 should translate to i/j.", () => {
    const expected = 'th(i/j)nkful';
    const actual = polybius('4432423352125413', false);
    expect(expected).to.equal(actual);
  });

  it("When decoding, the length of the string excluding spaces should be even", () => {
    const actual = polybius('44324233521254134', false);
    expect(actual).to.be.false;
  });

  it('Should return false input is missing', () => {
    const actual = polybius("", false);
    expect(actual).to.be.false;
  });

});