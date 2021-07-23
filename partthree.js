//Sum Zero
// Write a function that takes in an array of numbers. The function should return True if any two numbers in list sum to 0, and false otherwise.

let numbers = [-5, 5 ]

function addToZero(array){
    for (let i =0; i< array.length; i++){
        for (let j= i+1; j<array.length; j++){
            if(array[i] + array[j]===0){
                return true
            }
        }
    } return false
}

console.log('addzerofunction:', addToZero(numbers))
//Runtime: O(n^2)
// Space: O(n) 

// Unique Characters
// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

function unique(string){
    for(let i = 0; i < string.length; i++)
        for(let j = i + 1; j < string.length; j++)
            if (string[i] == string[j]) {
                return false;
 
  
              }  return true;
}

console.log('unique string function:', unique('Moonday'))
//Runtime: O(n^2)
// Space: O(n) 

// Pangram Sentence¶
// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”Write a function to check a sentence to see if it is a pangram or not.

let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')


// function pangram(str){
//   let string = str.replace(/\s/g, '')
//    var array= string.split('')
//   for (let i=0; i<array.length; i++ ){
//       if(alphabet.includes(array[i]){
//         alphabet.pop(array[i])
//       }
//   }
// }


// console.log(alphabet)
// pangram('howdy cowboy')

const isPangram = (str) => {
    if (str.length === 0) {
      return false
    }

    let charMap = {
      "a": 0, 
      "b": 0, 
      "c": 0, 
      "d": 0, 
      "e": 0, 
      "f": 0, 
      "g": 0, 
      "h": 0, 
      "i": 0, 
      "j": 0, 
      "k": 0, 
      "l": 0, 
      "m": 0, 
      "n": 0, 
      "o": 0, 
      "p": 0, 
      "q": 0, 
      "r": 0, 
      "s": 0,
      "t": 0,
      "u": 0,
      "v": 0,
      "w": 0,
      "x": 0,
      "y": 0,
      "z": 0,
    }
  
    let strAsSplitArr = str.toLowerCase().split("")
    for (let char of strAsSplitArr) {
      charMap[char] = charMap[char] + 1 || 1
    }
  
    for (let key in charMap) {
      if (charMap[key] === 0) {
        return false
      }
    } return true
  };

  
  console.log('pangram test:', isPangram('the quick brown fox jumps over the lazy dog'))

//Runtime: 

// Longest Word¶
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.
let words = ['hi', 'goodbye', 'bug', 'fhjsrhfkjrhgudthgldtkghdhtlgh']

function longestWord(list){
  let longest = 0
    for (let i =0; i< list.length; i++){
        for (let j =i +1; j< list.length; j++){
            if(list[j].length > longest){
              longest += list[j].length
            }
        }
    } return longest
}


console.log('longest word function:', longestWord(words))


//Runtime: O(n^2)
// Space: O(n) 