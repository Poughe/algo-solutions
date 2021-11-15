/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


function vowelsCounter(text) {
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let arr = text
        .toLowerCase()
        .split('')
        .map(el => {
            if (vowels.includes(el)) {
                count++;
            }
        });
    return count;
}



module.exports = vowelsCounter;
