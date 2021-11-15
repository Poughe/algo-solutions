/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function reverseString(text) {
    return text.split('').reverse().join('')
}

module.exports = reverseString

//Params
    //string of text, will it always be a string or empty string?
//Results
    //string will be reversed
//Example
    //reverseString("coffee") => returns "eeffoc"
//Pseudocode
    //create a function - reverseString
    //.split text into array of characters
    //.reverse order of arrays elements
    //.join elements to produce reversed text