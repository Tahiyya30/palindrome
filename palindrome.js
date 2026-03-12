// MT0202 - Practical Task 2

// Get a word from user
alert("This program will determine if a word is a palindrome.");
let word = prompt("Please enter any word of your choice:");

// Convert user input to lowercase
word = word.toLowerCase();

// Convert user input into an array
array = word.split("");

// Create variable storing length of word
let wordLength = array.length;

// Initialise i for while loop
let i = 0;

// Create string to store word when it is reversed
let reversedWord = "";

// Create a while loop looping through the word. For every letter of the word,
// we move backwards through the array and store each value of the array in a
// string called reversedWord
while (i < wordLength) {
  reversedWord = reversedWord + array[wordLength - 1 - i];
  i++;
}

// If original word matches word when it is reversed, word is a palindrome
if (reversedWord === word) {
  alert(`Your original word: ${word}
  Reversed word: ${reversedWord}
  Congratulations! Your word is a palindrome.`);
} else {
  alert(`Your original word is: ${word}
  Reversed word is: ${reversedWord}
  Sorry, your word is not a palindrome.`);
}
