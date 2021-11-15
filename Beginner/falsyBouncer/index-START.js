/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/

function falsyBouncer(array) {
    let result = [];
    array.forEach(el => {
        if (el) {
            result.push(el);
        }
    });
    return result;
}

module.exports = falsyBouncer

//Params
    //take in an array - are there any values that the array doesn't take?

//Result
    //returning an array of only truthy values

//Example
    //[1,3, true, null, 0] >>>> [1,3,true]

//Pseudocode
    //1. declare variable that hold empty array
    //2. create forOf loop that iterates through array
    //3. inside forOf loop, conditional is set up to determine whether element from array is either truthy or falsy
    //4. if element is truthy, element is pushed into result array, if element is falsy, continue loop