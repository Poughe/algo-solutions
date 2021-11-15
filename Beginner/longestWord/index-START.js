/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function longestWord(text) {
    let phrase = text.split(' ')
    let longest = phrase[0]
    for (let i = 1; i < phrase.length; i++) {
        if (longest.length < phrase[i].length) {
            longest = phrase[i]
        }
    }
    return longest
}


module.exports = longestWord

//params input a text. Is it all caps or lower? Does it matter? Will it ever not be a string? 
//result return the longest word in the string
//example (car, cat, duck) the longest word would be duck 
//pseudo we create a variable names phrase and assign it the value of text.split('') which split means it turns the string into an array and the space in between the '' means we split it wherever there is a space.
// we create another variable names longest and assignt it the first word from the array .
// we create a loop, we start off at index one which is the seccond word in the phrase. We loop while the index is less than the length of the phrase. the i++ means it is incrementing each time it loops. We then check if the length of the word stored in the longest variable is less than the current word that is being looped. If true then we re assignt the variabl longest to that word. Once we reach the end of the string we return longest. 
