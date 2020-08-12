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
        return str.city.match(regex) || str.state.match(regex)
    })
}

const testArr = [{
    city: "New York",
    state: "New York"
}, {
    city: "Los Angeles",
    state: "California"
}, {
    city: "Chicago",
    state: "Illinois"
}, {
    city: "Philadelphia",
    state: "Pennsylvania"
}, {
    city: "Memphis",
    state: "Tennessee"
}, {
    city: "Boston",
    state: "Massachusets"
}]




// write only one top-level describe in this file
describe('findMatches: searches for the strings that matches with search parameter in an array of objects', () => {
    // write as many nested describes as you would like
    describe('findMatches: returns all strings those include search parameter', () => {
        // write as many it's as you want in each describe
        it('can make search for empty strings and returns the whole array', () => {
            // have only one assertion inside each it

            const expected = [{
                city: "New York",
                state: "New York"
            }, {
                city: "Los Angeles",
                state: "California"
            }, {
                city: "Chicago",
                state: "Illinois"
            }, {
                city: "Philadelphia",
                state: "Pennsylvania"
            }, {
                city: "Memphis",
                state: "Tennessee"
            }, {
                city: "Boston",
                state: "Massachusets"
            }];
            const actual = findMatches('', testArr)
            expect(actual).to.have.deep.members(expected)
        });
        it('can make search for single letters and returns an array of strings containing this letter', () => {

            const expected = [{
                city: "Los Angeles",
                state: "California"
            }, {
                city: "Chicago",
                state: "Illinois"
            }, {
                city: "Philadelphia",
                state: "Pennsylvania"
            }, ];
            const actual = findMatches('l', testArr);
            expect(actual).to.have.deep.members(expected);
        });
        it('can make search for syllables and returns an array of strings containing this syllable', () => {
            // have only one assertion inside each it

            const expected = [{
                city: "Los Angeles",
                state: "California"
            }, {
                city: "Philadelphia",
                state: "Pennsylvania"
            }, ];
            const actual = findMatches('an', testArr)
            expect(actual).to.eql(expected)
        });
        it('can make search for multiple words and returns array of strings containing this words', () => {
            // have only one assertion inside each it

            const expected = [{
                city: "Los Angeles",
                state: "California"
            }, ];
            const actual = findMatches('Los Angeles', testArr)
            expect(actual).to.eql(expected)
        });
        it('can make searches regardless of case sensitivity', () => {
            // have only one assertion inside each it

            const expected = [{
                city: "Chicago",
                state: "Illinois"
            }, ];
            const actual = findMatches('CHI', testArr)
            expect(actual).to.eql(expected)
        });

        it('can make searches by state name or city name', () => {
            // have only one assertion inside each it

            const expected = [{
                city: "Los Angeles",
                state: "California"
            }, ];
            const actual = findMatches('California', testArr)
            expect(actual).to.eql(expected)
        });
    });
});


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
/* logic functions are pure functions

  NEVER read from the DOM
  NEVER write to the DOM
  NEVER use events
  NEVER use prompt/alert/confirm
  NEVER use variables that are not parameters
  NEVER use variables that are not declared locally

*/