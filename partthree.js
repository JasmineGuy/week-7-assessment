//Sum Zero
// Write a function that takes in an array of numbers. The function should return True if any two numbers in list sum to 0, and false otherwise.

let numbers = [-5, 1, -40, 20, 6, 8, 7 ]

function addToZero(array){
    for (let i =0; i< array.length; i++){
        for (let j= i+1; j<array.length; j++){
            if(array[i] + array[j]===0){
                return true
            }
        }
    } return false
}

addToZero(numbers)
//Runtime: O(n^2)
// Space: O(n) 

// Unique Characters
// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

function unique(string)
{
    for(let i = 0; i < string.length; i++)
        for(let j = i + 1; j < string.length; j++)
            if (string[i] == string[j])
                return false;
 
  
    return true;
}
//Runtime: O(n^2)
// Space: O(n) 

// Pangram Sentence¶
// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”Write a function to check a sentence to see if it is a pangram or not.



//Runtime: 

// Longest Word¶
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.
let words = ['hi', 'goodbye', 'bug']

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

longestWord(words)

//Runtime: O(n^2)
// Space: O(n) 