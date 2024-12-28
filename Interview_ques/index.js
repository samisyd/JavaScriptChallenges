/**
 * Front End Interview Questions: Falsy Values
 * 
 * Q: What are falsey values in JavaScript?
 */

import data from "../React/React_proj5_travelJournal/src/data";

console.log("there")

if(null) {
    console.log('null')
}

if(undefined) {
    console.log('undefined')
}

const arr = [];

if(arr.length > 0) {
    console.log('0')
}

const word = '';

if(word.length > 0) {
    console.log('empty')
}

if(false) {
    console.log('false')
}

// 1 compares the value while the other compares thge type and the value 
/**
* Front End Interview Questions: == vs ===
* 
* Q: How does == vs === differ?
*/

const value1 = 5;
const value2 = '5';

console.log(value1 == value2);

/**
 * Front End Interview Questions: undefined vs null
 * 
 * Q: What is the difference between undefined and null?
 */
//Undefined - something that doesnt have a value. null is intentionally 
// setting of saying that it is defined but yet to have a value
const user = {
    firstName: null
};

const user2 = {
    
};

console.log(user.firstName);
console.log(user2.firstName)

/**
 * Front End Interview Questions: Data Types
 * 
 * Q: What are some JavaScript data types?
 */
// boolean, strings, numbers, BigInt, Symbol
// [], {}, Map, Set

/**
 * Front End Interview Questions: Spread & Rest Operators
 * 
 * Q: What do the spread and rest operators do?
 */

const users = ['Dylan', 'Per', 'Dollan'];
const allUsers = ['Olivia', ...users];
console.log(allUsers);

// spread opeator - unwrap an array or an object

const user3 = { firstName: 'Dylan', lastName: 'Israel', channel: 'codingtutorials360' };
const defaults = { channel: 'scrimba', ...user3 };
console.log(defaults);

const {channel, ...remainder } = defaults;

console.log(remainder)

// /* Rest operator - similar to above but  we dont want to pass an array but a series of nums.
function addNums(...nums){
    return nums.reduce((total, current) => { return total + current; }, 0)
}

console.log(addNums(1,2,3))
console.log(addNums(1,2))

/**
 * Front End Interview Questions: Destructing Objects and Arrays
 * 
 * Q: What is and why might you destructure an object or array?
 */

// to make the code easily readable - for readability
const dob = [10, 25, 1987];
const [day, month, year] = dob;

const user4 = {
    f: 'Dylan',
    l: 'Israel'
 };
 
 const {f: firstName, l: lastName } = user4;
 console.log(user4.l)
 console.log(user)

 /**
 * Front End Interview Questions: Git Fundamentals
 * 
 * Q: What is Git? Why do you use it? What are some common commands you use?
 * Bonus Resource: https://try.github.io/
 */

//  Git is used for version controlling.

// branch
// stage / add 
// commit -m
// pull - get code to ur dir
// push - push code up to ur branch

/**
* Front End Interview Questions: Agile & Scrum
* 
* Q: What is Agile? What is Scrum?
*
* Bonus Resource: https://scrumguides.org/
*/

// sprint - typically 2 weeks that we deliver some value, have stand ups, - what si blocking, 
// what we are doing, keep all aware and on same page. keep flowing. agile and scrum is all 
// abt team agreements, like when is work done, evry org does it different, have retrospective
// at the end of what went well, any changes, sprint planning, what tickets u can take, 
// reasonable to get done, teams how they work together

// /
// *
// * Front End Interview Questions: Responsive Design
// * 
// * Q: What is responsive design and how might you implement it?
// *
// * Bonus Resource: https://scrimba.com/course/gresponsive
// */

/* we can use media queries to keep track of the width and change the layout 
and to help with that CSS now supports flex box and grid which handles similar
in past it was difficult . also sizing of items we can use REM units or M units 
and percentage for some of the fonmts and images
 */


/**
 * Front End Interview Questions: Number Issues
 * 
 * Q: What are some issues with numbers in JavaScript you may have to protect against?
 BIG INT is available which solves the issue, use math.round or fix to deal with numbers
 */

 console.log(0.2 + 0.1);
 /* // ans - 0.30000000000000004 */

 /**
 * Front End Interview Questions: Promises
 * 
 * Q: What are Promises and why might you use them?
 * 
 * Bonus Resource: https://jsonplaceholder.typicode.com/
 */
/* 
 Resolved promises quiz

 1. What is a promise (in your own words)?
 A promise that an operation that normally takes a bit of time
 will eventually finish running. I.O.U. (I owe you)
 
 2. Which part of the code we have so far is a promise?
 The fetch request returns a promise object.
 
 3. What are the three states a promise can be in?
 (1) Pending, (2) Resolved (fulfilled), (3) Rejected
 
 4. What does it mean when a promise is "resolved" (or fulfilled)?
 The task we wanted to perform finished successfully.
 
 5. How do we tell the code to do something only AFTER a
    promise is resolved?
 .then() method */

//remove async if we want sync
async function getPost() {
    console.log(1);
    
    // this is synchronous way to call an api func. so all things will happen in order
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log(data + 2);
        
    } catch(e) {
        console.log(e)
    }
    
    // this is asynchronous way to call an api func. so all things will NOT happen in order
    // fetch('https://jsonplaceholder.typicode.com/posts/1')
    // .then((data) => data.json())
    // .then((json) => console.log(2))
    // .catch((error) =>  console.log(e));
    
    console.log(3);
}

getPost();

/**
 * Front End Interview Questions: Pass by Value vs Pass by Reference
 * 
 * Q: What is pass by reference and how does it differ from pass by value?
 */

const prim = 5;

function add(value) {
    value++;
    
    return value;
}

console.log(add(prim), prim);

const ref = { count: 5 };

function add2(value) {
    value.count++;
    
    return value.count;
}

console.log(add2(ref), ref.count);

// How do you stay upto date? Why you? Why us? Biggest professional achievement
// why u r looking to leave ur job? - work with new technology, work with organized approach
// eye contact is crucial - no shy or difficult to work with, go to meetup and make new friends 
// wear business casuals. late for interview- u are not serious. give a 20 min buffer before an interview
// get a technical book - clean coder , code complete - show u r passionate, easily 
// can connect with a developer

// what project team i'll be working on? - shows interest
// ie 11 - will i be working on it?
// what code quality standards does the comapny/org follow?
// what is the best part of working here? if they think too long.. its fuzzy
// can have a hackathon , 4 hrs in a week to buid something urself
// why r u interested in hiring me? forced them in a position why u r woth hiring..
// legacy angular app to 2+ app? stick in the back of their head... the person knows..

//Apply daily
//develop lots of app
//meetups with resume - make connections, they will ask for resume 
// make it easier to hire u, dont worry abt money
//raise will happen as u grow 


// write psuedo code before implementing - very imp 
// use built in methods that help u
// look up mdn for solution
//research ur problem
// how well u can communicate ur ideas
// if stuck - look for solution.. there may b a solution - set a time limit
// make effort to make it 
