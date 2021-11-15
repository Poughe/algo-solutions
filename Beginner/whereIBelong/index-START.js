/*
Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted. The
returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).
*/

function whereIBelong(arr, num) {
   arr.sort(function (a, b) {
      return a - b;
   });
   for (let i = 0; i < arr.length; i++) {
      if (num <= arr[i]) {
         return i;
      }
   }
   return arr.length;
}



module.exports = whereIBelong


//Params
   //we are passing in an array and a number
   //is there negative nums, does it only pass in nums?
   //can the array be empty

//Result
   //is a number, this is the index of where the number is inserted
   //

//Example


//Pseudocode
   //sorting the array
   //loop through the array & check where we position the number