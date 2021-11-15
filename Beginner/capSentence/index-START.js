/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/




function capSentence(str) {
  let strArr = str.split(' ');
  let result = strArr.map(el => {
    console.log(el.slice(1));
    return el[0].toUpperCase() + el.slice(1).toLowerCase();
  });
  return result.join(' ');
}



module.exports = capSentence