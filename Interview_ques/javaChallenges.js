
import podcasts from "./data.js"
import {candy, products, mediaData} from "./Candy.js"
// import products from './products.js'

/* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"

.split() .join()
*/
function panic(str){
    return str
        .split(' ')
        .join(' 😱 ')
        .toUpperCase() + "!";
}


function panic2(str) {
    return str
            .split(" ")
            .join(' 😱 ')
            .toUpperCase()
}
// Test your function
console.log(panic2("I'm almost out of coffee")); 
console.log(panic2("winter is coming"))

/* Whispering function 
Write a function `whisper` that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function should also remove an exclamation point
at the end of the sentence, if there is one. 

Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

Hint: endsWith and slice
*/
function whisper(str) {
    let str2 = str.split(" ")
    str2.unshift("shh... ")
    
    if (str2[str2.length-1].endsWith("!") ) {
        let str3 = str2.pop()
        //let str3 = str2[str2.length-1]
        let str4 = str3.split("!")
        str2.push(str4)
    }
    return str2.join(" ")
        .toLowerCase()
    
}

console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("MA'AM, this is a Wendy's!"));

function whisper2(str){
    if(str.endsWith("!")){
        // scrimba!
        return "shh... " + str.slice(0, -1).toLowerCase();
    }
    return "shh... " + str.toLowerCase();
}

console.log(whisper2("PLEASE STOP SHOUTING."));
console.log(whisper2("MA'AM, this is a Wendy's!"));

/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

function altCaps(str){
    // assemble each character back into a new string
    let newStr = '';
    // loop through the string
    for(let i = 0; i < str.length; i++){
        // uppercase every character with an even index
        if(i % 2 === 0){
            newStr += str[i].toUpperCase();
        } else {
            newStr += str[i]
        }
    }
    return newStr;
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));


/* toTitleCase
Write a function that will capitalize every word in a sentence.  

Example Input: "everything, everywhere, all at once"
Example Output: "Everything, Everywhere, All At Once"
*/

/* 
First, write a function that takes in one word and 
capitalizes the first letter of that word.

Example Input: "scrimba"
Example Output: "Scrimba"

Hint: Trying using slice() and .toUpperCase()
*/

function capitalizeWord(word){
    return word[0].toUpperCase() + word.slice(1);    
}

/* 
Now write a function that capitalizes every word in a sentence. 
How can you reuse the function you just wrote? 
*/ 

function toTitleCase(str){

    //split the str
    let str2 = str.split(" ")
    //capatalize each sub str
    return str2.map(item => capitalizeWord(item)).join(" ")
    //join str and return 
    // let retstr = str3.join(" ")
    // return retstr
}

// Test your functions
console.log(capitalizeWord("pumpkin"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));

//join str and return 

/* Totally Not Another FizzBuzz 

Scrimba CEO Per Borgen wants you to write a program to grant special bonuses to all his employees 
based on their employee ID numbers! 

Scrimba has 100 employees and their employee ID numbers range from 1 - 100. If the employee's
 ID number is: 

Divisible by 3 - Vacation! 
Divisible by 5 - $100,000 bonus! 
Divisible by both 3 and 5 - JACKPOT! 1 Million and a Yacht!
Not divisible by 3 or 5 - :(
    
Write a program to loop through all the ID numbers and print their prize. 
Your function's output should look something like this: 

1 - :(
2 - :(
3 - Vacation! 
4 - :(
5 - $100,000 bonus!

Hint: Remainder operator, modulo 
 */

function awardBonuses(){
    for (let i=1; i<=100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`${i} - JACKPOT! 1 Million and a Yacht!`);
        } else if (i % 3 === 0) {
            console.log(i + " - Vacation!")
        } else if (i % 5 === 0) {
            console.log(i + " - $100,000 bonus!")
        } else {
            console.log(i +" - :(")
        }
    }
}

awardBonuses();

/*  Emojify!

Popular services like Slack and Github allow for emoji shortscodes, meaning 
they will detect when a word in a sentence begins and ends with a colon (:)
and automatically replace that word with an emoji. 

These shortcodes allow users to add an emoji to their messages by typing a 
code rather than searching for an emoji from a list. 

For example, typing :smile: will replace that text with 😊 

*/

const emojis = {
    "smile": "😊",
    "angry": "😠",
    "party": "🎉",
    "heart": "💜",
    "cat":   "🐱",
    "dog":   "🐕"
}

/* 1. Write a function that checks if a lowercase word starts and 
ends with a colon. If it does, remove the colons and
look up the word in the emoji object. If the word is in the 
emojis object, return the corresponding emoji.
If it isn't, return the original word.

Example input: ":party:"
Example output: 🎉

Example input: ":flower:"
Example output: "flower"

Example input: "elephant"
Example output: "elephant"
*/ 

function emojifyWord(word){
    
    let retWord = ""
    if (!word.startsWith(":") && !word.endsWith(":")) {
        retWord = word
    } else {
        //starts and ends with :
        retWord = word.slice(1, -1)
    }
    if (emojis[retWord]) {
        return emojis[retWord]
    } else {
        return retWord
    }
}

/* 2. Write a function to find any emoji shortcodes in a phrase.
Your function should map over each word in the phrase, emojify any word
that begins and ends with a colon, then return the emojified phrase. 
Feel free to use your emojify function from the previous exercise!

Example input: "I :heart: my :cat:"
Example output: "I 💜 my 🐱"

Example input: "I :heart: my elephant"
Example output: "I 💜 my elephant"
*/ 

function emojifyPhrase(phrase){
    
    let words = phrase.split(" ")
    let retWords = words.map(word => emojifyWord(word)) 
    return retWords.join(" ")

    // const newPhrase = phrase.split(" ").map(word => emojifyWord(word));
    // console.log(newPhrase.join())
}



console.log(emojifyWord(":heart:"));
console.log(emojifyWord(":flower:"));
console.log(emojifyWord("elephant"));

console.log(emojifyPhrase("I :heart: my :cat:"));
console.log(emojifyPhrase("I :heart: my :elephant:"));

/* 
Anagrams are groups of words that can be spelled with the same letters. 
For example, the letters in "pea" can be rearrange to spell "ape", and 
the letters in "allergy" can be rearranged to spell "gallery."

Example input: "allergy", "gallery"
Example output: true

*/ 

function isAnagram(str1, str2){
    // are the strings the same length? if yes return false. 
    if(str1.length !== str2.length) return false;
    
    // split string into an array
    // sort
    // join the array back together as a string
    const newStr1 = str1.split('').sort().join('');
    
    // repeat with second word
    const newStr2 = str2.split('').sort().join('');

    // are the two words equal? true or false
    return newStr1 === newStr2;
}

console.log(isAnagram("allergy", "gallery"));
console.log(isAnagram("allergy", "gallery"));
console.log(isAnagram("treasure", "measure"));



/* We Come in Peace!   
We've received what (we assume) is a message of peace and brotherhood from 
an alien planet. They almost got it right, but the messages are 
backward. Write functions to reverse the backward messages so we can 
read what they have to say! 
*/ 

const title = ":htraE no od ot ffutS";
const messages = [
            "maerc eci yrT",
            "rewoT leffiE tisiV",
            "noom eht ot snamuh etacoleR",
            "egrahc ni stac tuP", 
        ]

/* Step 1: Reverse a string
Write a function that takes in a string and returns the reverse 
of that string. An interviewer may want to check if you know your
string methods, or may want to know if you can reverse a string manually. 
Practice both ways! 

Example input: !htrae ot emocleW
Example output: Welcome to earth!
*/  

function reverseString(str){
    let retStr = ""
    // str.reverse()

    // return str.split('').reverse().join('');
    
    for (let i=str.length-1; i>=0; i-- ) {
        retStr += str[i] 
    }
    return retStr
}

/*
Step 2: Now we'll reverse all strings in an array. Write a function that takes in
an array of strings and returns a new array with all strings reversed.

You can use reuse your reverseString() function, use string methods, or 
reverse the strings manually. 
*/ 

function reverseStringsInArray(arr){
    // let newArr = []

    return arr.map(item => reverseString(item));

    // for (let item of arr) {
    //     newArr.push(reverseString(item))
    // }
    // return newArr;
}

console.log(reverseString(title));
console.log(reverseStringsInArray(messages));

// Solution 1: for loop 
function isPalindrome(str){
    let str2= reverseString(str)
    console.log(str2)
    // return (str2 === str) ? true : false
    return (str === str2)
        // return true 

    
}   


// Test your function
console.log(isPalindrome("abba"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("octopus"));


//remove dup charaters
const password = "9338dsabbbadjdjdj2sdfdfdf282ff8fdsd888ss8cfgfg332q23";  

 // removes consecutive dup chars
function removeDupeChars(chars){
    let i=0, j=1;
    let retStr = ""
    while (j < password.length) {
        while(password[i] === password[j]) {
            j +=1
        }
        retStr += password[i]
        i=j
        j +=1
    }
    return retStr
}

// removes all duplicate chars
function removeDupeChars2(chars) {

    let dupsRem = ""

    for (let i=0; i< chars.length; i++) {
        if(!dupsRem.includes(chars[i]) ) {
            dupsRem += chars[i]
        }
        // else just keep incrementing
    }
    return dupsRem
}

console.log(removeDupeChars2(password));

/* 
How often do the letters in your name repeat? 

Write a function that counts how many times each letter of your name
occurs. Your function should take in your first and last name and return
an object where the keys are each character in your name, and the value
is how many times that character appears in your name. 

Example input: "Peggy Porth"
Example output: {p: 2, e: 1, g: 2, y: 1, o: 1, r: 1, t: 1, h: 1}

Your function should NOT count spaces and should not be case sensitive (a
lowercase t and a capital T should be considered the same character).

*/ 

function countChars(str){
    // initialize a new empty object to hold the letter counte
    let count = {}
    // lower case the string and remove spaces
    let name = str.toLowerCase().split(" ").join('')
    //loop thr each char in string and count the occ
    for(let i=0;i<name.length; i++) {
        // if the character is not the obj, add it, give it a value of 1
        if(!count[name[i]]) {
            count[name[i]] = 1
        } 
        else {
            // if the character is already in the object, increment that char's value
            count[name[i]] += 1
        }
    }
    return count
}

console.log(countChars("samina"));


/* Chef Mario's Recipe Book 
Chef Mario was in the middle of writing his cookbook masterpiece
when he spilled coffee on his keyboard! Now all his recipes have repeat
ingredients.

Help save Chef Mario's cookbook by writing a function that takes in an array 
and returns a new array with all the duplicates removed. 

Example input: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"];
Example output: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops"];
*/ 

const eggScrambleRecipe = [
    "🥓 bacon",
    "🥓 bacon", 
    "🍳 eggs",
    "🫑 green peppers",
    "🧀 cheese",
    "🌶️ hot sauce",
    "🥓 bacon",
    "🥦 broccoli", 
    "🧀 cheese",
    "🥦 broccoli", 
    "🌶️ hot sauce"
]

// if millions of items then it takes along time
function removeDupesFromArray(arr) {

    let uniqueItems = []
    // 1st loop - main arr
    arr.forEach(element => {
        // 2nd loop - this will again loop thr all the items in the 2nd array to find a match 
        if(!uniqueItems.includes(element)) {
            uniqueItems.push(element)
        }
    });

    return uniqueItems
}



function removeDupesFromArray2(arr){
    // create a new object to keep track of duplicates 
    // use filter to loop thorugh each item in the arr
        // for each item in arr
            // look up the item in the lookup table
            // if the item does NOT exist in the lookup, add it and return true
        // return false

    let dupsRemObj = {}
    return arr.filter(item => {
        if (!dupsRemObj[item]) {
            dupsRemObj[item] = true
            return true
        }
        return false
    })
}

//Set automatically filters out duplicate elements
//use spread operator in combination with Set
function removeDupesFromArray3(arr){
    // set will remove dup elements for us, then we can convert 
    // it back into an array using the spread operator
    return [... new Set(arr)];
}

console.log(removeDupesFromArray3(eggScrambleRecipe));

/* 
Scrimba mascot Pumpkin has won the grand prize at an international 
cat show. Below are Pumpkin's scores from the judges, as well as all the 
prizes he's won. In all the excitement of victory,
they've become a jumbled mess of nested arrays. Let's 
help Pumpkin by sorting it out. 

Write a function to flatten nested arrays of strings or
numbers into a single array. There's a method
for this, but pratice both doing it manually and using the method. 

Example input: [1, [4,5], [4,7,6,4], 3, 5]
Example output: [1, 4, 5, 4, 7, 6, 4, 3, 5]
*/

const kittyScores = [
    [39, 99, 76], 89, 98, [87, 56, 90], 
    [96, 95], 40, 78, 50, [63]
];

const kittyPrizes = [
    ["💰", "🐟", "🐟"], "🏆", "💐", "💵", ["💵", "🏆"],
    ["🐟","💐", "💐"], "💵", "💵", ["🐟"], "🐟"
];

function flatten(arr){
    return arr.flat();
}

function flatten2(arr) {

    let retArr=[]
    arr.forEach(element => {
        if (Array.isArray(element)) {
            element.forEach(item => retArr.push(item))
        } else {
            retArr.push(element)
        }
    })
    return retArr;
}

console.log(flatten2(kittyPrizes));

/*
Alex from Scrimba wants to know how many new students have attended 
Scrimba's weekly Town Hall event this year. 

He has an array of first-time attendees for each month of the year. 
Help him find the total number of attendees! Your function should
take in an array and return a number representing the total number
of new attendees. 

Example input: [1,2,3]
Example output: 6
 */

const studentCount = [50,53,61,67,60,70,78,80,80,81,90,110];

function sumArray(arr){
    
    let total = 0
    //use reduce to practice more
    arr.forEach(item => total += item);
    return total
}

function sumArray2(arr){

        // return arr.reduce(function(total, next) { return total + next})
        return arr.reduce((total , next) => total+next)
        
}
console.log(sumArray2(studentCount));

/* Pizza Night? 
It's the weekend and you and your friends can't agree on 
what to order for dinner, so you put it to a vote. 

Write a function to find the food with the highest number of votes. 

Your function should take in a food object and find the food
with the most votes. It should log the winner, along with 
how many votes it received.  

Example input: {"🐈 cats": 19, "🐕 dogs": 17} 
Example output: The winner is 🐈 cats with 19 votes!
*/ 

const gameNightFood = {
    "🍕 pizza": 3, 
    "🌮 tacos": 10, 
    "🥗 salads": 7,
    "🍝 pasta": 5
}

function findTheWinner(obj){
    // initialize some new variable to: 
        // keep track of the current highest vote number
        let highestVotes = 0;
        // keep track of the current winning item
        let winningItem = "";
    // for each food option in the food object
    for(let food in obj){
          // is the current value higher than the value of highestVotes?
          if(obj[food] > highestVotes){
              // yes: the new value of highestVotes in the current value and
              highestVotes = obj[food];
              // winningItem = the current property
              winningItem = food;
          }
        console.log(highestVotes, winningItem)    
            
    }
      
    // return string announcing the winner using winningItme and highestVote variables
    return `The winner is ${winningItem} with ${highestVotes}`
}

console.log(findTheWinner(gameNightFood));


/* Find Free Podcasts 

We have a list of podcasts and need the ability to filter by only
podcasts which are free.

Write a function that takes in the podcast data and returns an new
array of only those podcasts which are free.

Additionally, your new array should return only 
objects containing only the podcast title, rating, and whether or 
not it is paid. 

Expected output: 
[
    {title: "Scrimba Podcast", rating: 10, paid: false}, 
    {title: "Something about Witches", rating: 8, paid: false}, 
    {title: "Coding Corner", rating: 9, paid: false}
]
*/

function getFreePodcasts(data){
    
    // filter list by paid prop
    // use map to create a new array of objects with only the specified properties 
        
    return data
        .filter(item => item.paid === false)
        .map(podcast => {
            return {
                title: podcast.title,
                rating: podcast.rating,
                paid: podcast.paid
            }
        });
            
}

console.log(getFreePodcasts(podcasts))



/*
   It's the day after Halloween 🎃 and all the candy is on sale!
   
   To buy up all the candy, use map() and filter() to put all the
   candy into a `shoppingCart` array. 
   
   The new array should contain only the item and the price, like
   this: 
   
   Expected output: 
   [
       {item: "🍭", price: 2.99},
       {item: "🍫", price: 1.99}, 
       {item: "🍬", price: 0.89}
    ]
*/
function getSaleItems2(data){

    return data
              .filter(element => element.type === "sweet")
              .map(candyItem => {
                return {
                    item: candyItem.item,
                    price: candyItem.price
                }
              })
}







function getSaleItems(data){
    // filter the data by product.type -- only sweet
    return data
                .filter(product => product.type === "sweet")
                // loop through the data using map 
                .map(({item, price}) => {
                    // for every candy, return a new object with only item and price
                    return {
                        item,
                        price
                    }
        // return {
        //     item: item,
        //     price: price
        // }
    });
};

const shoppingCart = getSaleItems2(candy);
console.log(shoppingCart);

/*  
Use reduce() to total the groceries. 
Then find a method that will round the total to 2 decimal places.

Example output: 73.44
*/

//reduce is diff then other higher order funcs. It takes a callback and an initial value, say 0.
//lets make the call back an anonymous func and which also takes 2 values which is called the 
// accumulator and the current value. The idea with reduce is that we are gonna use the callback 
// to loop thr the values in the array and add them to our initial value until we have reduced our
// array down to a single value. The acc is like our runnig total or the thing we are going to build upon 
// and the second element represnts the current element in the array that we are looping thr

// function total(arr){
//     arr.reduce(callback, 0)
// }


// function total(arr){
//     arr.reduce((acc, curr), 0)
// }

// function total(arr){
//     arr.reduce((acc, curr) => {
        
//     }, 0)
// }

function total(arr) {

    const total = arr.reduce((acc, curr) => {
        return acc+ curr.price
    },0)

    // return total with only 2 decimal places
    return total.toFixed(2)
}

console.log("total is " + total(candy));

/*
Use reduce() and only reduce() to calculate and return 
the total cost of only the savory
items in the shopping cart.

Expected output: 9.97  
*/
function totalSavory(arr){
    return arr
            .filter(element => element.type === "savory")
            .reduce((acc, curr) => {
                return acc + curr.price
            },0)
}

function totalSavory2(arr){
    return arr.reduce((acc, curr) => {
        // check if the current item has a type of "savory"
            // if yes, return acc += curr.price
        if(curr.type === "savory") return acc += curr.price;
            // if no, return acc
        return acc;
    }, 0);
}

console.log(totalSavory(candy));
// console.log(totalSavory2(candy));

/*
    You're online shopping for holiday gifts, but money is tight
    so we need to look at the cheapest items first. 
    Use the built in sort() method to write a function that returns a new array of
    products sorted by price, cheapest to most expensive. 
    
    Then log the item and the price to the console: 
    
    💕,0
    🍬,0.89
    🍫,0.99
    🧁,0.99
    📚,0.99
    ... continued
*/

/* 

positive num - a before b 
neg - b before a 
0 - nothing changes 

*/ 

/*
a - b sorts numbers in ascending order and 
b - a sorts numbers in descending order 
*/ 

function sortProducts(data){
    return data.sort((a,b) => {
        return a.price - b.price
    });
}

const listByCheapest = sortProducts(products);
// console.log(listByCheapest);

listByCheapest.forEach(item => console.log(item.product, item.price));


/* Find All Unique Tags 

As a software dev at ScrimFlix, you're working on a feature 
to let users browse TV shows by tag. The first step is to collect all 
the tags from our data into a new array. Then we'll need 
to filter out the duplicate tags. 

Write a function that takes in the media data and returns
a flat array of unique tags.

Expected output: 
["supernatural", "horror", "drama",
"fantasy", "reality", "home improvement", "comedy", "sci-fi", "adventure"]

*/ 

function getUniqueTags(data) {
    let finalTag = [];
    data.forEach(item => {
        item.tags.forEach(tag => {
            if (!finalTag.includes(tag) ){
                finalTag.push(tag)        
            }
        })       
    })
    return finalTag
}

// function getUniqueTags2(data) {
//     da
// }


console.log(getUniqueTags(mediaData));


