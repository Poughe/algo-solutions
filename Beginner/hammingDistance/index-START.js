/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/

function hammingDistance(stringA, stringB) {
    if (stringA.length !== stringB.length) {
        return 0;
    }
    let count = 0;
    for (let i = 0; i < stringA.length; i += 1) {
        if (stringA[i] !== stringB[i]) {
            count += 1;
        }
    }
    return count;
}

module.exports = hammingDistance

//PREP
// PARAM: two strings -> will always be strings of equal length and never empty

// RETURN: a number (hamming distance) -> number of letters that need to change

// EX: hammingDist('river', 'rover') // return 1
// hammingDist('cat', 'dog') // return 3
// hammingDist('butt', 'butt') // return 0

// PSEUDO:
// declare a count variable
// loop (for loop) through one of your strings
// checking if each letter in one string equal to the letter in the other
// if letters are not the same, it will increase the count
