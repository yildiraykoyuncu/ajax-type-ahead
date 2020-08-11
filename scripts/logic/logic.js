'use strict';
console.log('--- loading logic: _');

// either expect or assert, up to you
const expect = chai.expect;


/**
 * It searches for a matches of a string in a array of strings/
 * @param{'string'} wordToMatch String that will be searched for
 * @param{'string[]'} cities Array of strings to be searched among
 * @return{'string[]'} Array of string that matches with search parameter
 */
const findMatches = (wordToMatch, array) => {
    return array.filter(str => {
        const regex = new RegExp(wordToMatch, 'gi');
        return str.match(regex)
    })
}




// write only one top-level describe in this file
describe('findMatches: searches for the strings that matches with search parameter in an array', () => {
    // write as many nested describes as you would like
    describe('findMatches: returns all strings those include search parameter', () => {
        // write as many it's as you want in each describe
        it('can make search for empty strings and returns the whole array', () => {
            // have only one assertion inside each it
            const fruits = ['tomato', 'orange', 'apple', 'pear', 'Banana', 'GRAPE', 'MelloN'];
            const expected = ['tomato', 'orange', 'apple', 'pear', 'Banana', 'GRAPE', 'MelloN'];
            const actual = findMatches('', fruits)
            expect(expected).to.eql(actual)
        });
        it('can make search for single letters and returns an array of strings containing this letter', () => {
            const fruits = ['tomato', 'orange', 'apple', 'pear', 'Banana', 'GRAPE', 'MelloN'];
            const expected = ['tomato', 'orange', 'MelloN'];
            const actual = findMatches('o', fruits);
            expect(expected).to.have.members(actual);
        });
        it('can make search for syllables and returns an array of strings containing this syllable', () => {
            // have only one assertion inside each it
            const fruits = ['tomato', 'orange', 'apple', 'pear', 'Banana', 'GRAPE', 'MelloN'];
            const expected = ['orange', 'Banana'];
            const actual = findMatches('an', fruits)
            expect(expected).to.eql(actual)
        });
        it('can make search for multiple words and returns array of strings containing this words', () => {
            // have only one assertion inside each it
            const fruits = ['red tomato', 'orange orange', 'green apple', 'yellow pear', 'yellow Banana', 'Purple GRAPE', 'Green MelloN'];
            const expected = ['red tomato'];
            const actual = findMatches('red tom', fruits)
            expect(expected).to.eql(actual)
        });
        it('can make searches regardless of case sensitivity', () => {
            // have only one assertion inside each it
            const fruits = ['tomato', 'orange', 'apple', 'pear', 'Banana', 'GRAPE', 'MelloN'];
            const expected = ['GRAPE'];
            const actual = findMatches('gr', fruits)
            expect(expected).to.eql(actual)
        });
    });
});

/* logic functions are pure functions

  NEVER read from the DOM
  NEVER write to the DOM
  NEVER use events
  NEVER use prompt/alert/confirm
  NEVER use variables that are not parameters
  NEVER use variables that are not declared locally

*/