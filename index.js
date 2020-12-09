/*Student Note: I had a really hard time wrapping my head around referencing back to and comparing values inside arrays and just didn't have enough time this week to finish. 
I would appreciate a chance to resubmit after I've had the opportunity to revisit the treehouse lessons as well as supplemental research re: converting strings to individual
characters. 
RE: question 2, I'm not sure where I'm going wrong with my prompts not re-initialising upon recieving no response from the user. It's probably just fatigue at the moment and I 
will have another look at it after a good night's sleep. However, I would appreciate any guidance on how to proceed. 

Thanks!! 
- Shy
*/



//------------------------ Question 1---------------------------
//Write a function that ask the user for two numbers and return the product of them. But the challenge here is that you can't use the operator * (you can't make the product)
//hint: multiplication is a sequence of sums

 //@param {number} number1
 //@param {number} number2
 //@return {number} product

 let num1;
 let num2;
 let result;


const multiplication = (num1, num2) => {
  num1 = parseInt( prompt('Enter the first number' ) );
  console.log(`1st number ${num1}`);
  num2 = parseInt( prompt('Enter the second number') );
  console.log(`2nd number ${num2}`)
  result = 0;

  while( num1 > 0) {
    result += num2;
    num1--;
  }

  return result;
}

const answer1 = multiplication()
console.log('answer1', answer1)

const htmlTarget = document.getElementById('a-1')
htmlTarget.innerHTML = answer1



//------------------------ Question 2 ---------------------------
// Write a function that recieves a string as a parameter and evaluate each character of the string to determinate if the character is vowel or a consonant. 
//you have to store each character on separate arrays, one for vowels and the other one for consonants.
// after separating the characters concatenate both arrays. ask the user if wants the vowels first or consonants first in the final array.
//hint:

//@param {string}
//@return {character} => array of characters

//separated the alphabet into vowels and consonents

const letters = [
    [ 'a', 'e', 'i', 'o', 'u'],
    ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z']
];

//blank arrays to recive character push
const blankVowel = [];
const blankConst = [];

//1st prompt to user


const wordInput = prompt("Type a word to separate the vowels from the consonents");

if (wordInput > 0) { 
  let vowelOrConst = prompt("would you like vowels or consonents first?");
}

if (vowelOrConsonant === "vowel") {
       blankVowel.push(vowelOrConsonant);

} else if (vowelOrConsonant === "consonent"){
      blankConsonent.push(vowelOrConsonant);
} else if (!wordInput) { 
        let message = alert("You must type a word");
}




for (i = 0; i < letters.length; i++) {
    console.log(wordInput);  
  }
 


vowelOrConsonant = () => {
  
  
  return;
}

const answer2 = vowelOrConsonant()

const htmlTarget2 = document.getElementById('a-2')
htmlTarget2.innerHTML = answer2




//------------------------ Question 3 ---------------------------
//Now let's create a small game. The game consists in a player (ask the user for the name).The player has 3 oportunities to guess a number. The number is a random number between 10 - 50.
//If the player don't find the number, the program must displays an alert and stop the game, but if the player finds the number, then the program must show a congratulations message (alert) with the name of the player in upperCase letters and stop the game
//You must have to store the player information in a 'player' object. The Player object contains the following Properties:
// {string} name, {number} lives, {numbers} fail_numbers[]
//where: name, saves the name of the player. Lives, represents the remaining oportunities each time the player fails. Fail_numbers, is an array of numbers that stores the fail numbers the player has used

//@return {string} win / gameOver => the string that says if the user wasted the three oportunities showing the fails numbers or the name if the player wins





guessTheNumber  = () => {
  return
}

const answer3 = guessTheNumber()

const htmlTarget3 = document.getElementById('a-3')
htmlTarget3.innerHTML = answer3



//------------------------ Question 4 ---------------------------
// In the function below we are giving you an array of objects, each one with the same properties. Ask to the user for 3 diferentes options to sorting the array from the 
//highest to lowest. In the case of a string, the criteria to sort must be the length of the string. The first one is sorting the array of objects based on the title property.
// The second one sorting the array of objects based on the author property, the third one based on the library property. finally, the return value has to be the string sorted of 
//the property selected separeted with a semicolon. Remember you have to sort all of the array based on the selected property
//example: if the user select sorting by title the return value must be: "Mockingjay: The Final Book of The Hunger Games; Walter Isaacson; The Road Ahead"



sort = () => {

  var library = [
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];

  return
}

const title = `$[library]`;

const answer4 = sort()

const htmlTarget4 = document.getElementById('a-4')
htmlTarget4.innerHTML = answer4
