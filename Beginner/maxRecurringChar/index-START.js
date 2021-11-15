/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/

//DOES NOT CARE ABOUT CAPITAL LETTER
function maxRecurringChar(text) {
    let arr = text.split('');
    let textObj = arr
        .map(el => el.toString())
        .reduce((allLetters, letters) => {
            if (letters in allLetters) {
                allLetters[letters]++;
            } else {
                allLetters[letters] = 1;
            }
            return allLetters;
        }, {});
    console.log(textObj);
    let count = 0;
    let bigLetter = '';
    for (let letter in textObj) {
        if (textObj[letter] > count) {
            count = textObj[letter];
            bigLetter = letter;
        }
    }
    console.log('hi');
    console.log(bigLetter);
    return bigLetter;
}

module.exports = maxRecurringChar;

// PARAMETERS: take in a string of text | Will it be an empty string? 
// RETURN: returning the most recurring character.
// EXAMPLE: ('Gabby') // will return 'b'.
/* PSEUDO:
1. function with one parameter (string of text)
2. variables assigned to a split method (characters) and declared a variable called 'textObj' that assign to the 'arr' variable.
3. map method to find which element has the most recurring character from that string.
4. reduce method to allLetters (which is an empty object)
5. if/else conditionals | creates an object and count the properties in the object.
6. console log the most recurring character.
7. declare a variable called count that assigns to 0, bigLetter is assigned to a string.
8. for loop: declare letter in character
*/
