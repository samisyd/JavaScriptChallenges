/* Math.random will give vaue from 0.0- 0.999 
    *6 will give from 0 - 5.999
    floor - will remove the digits

let randomnumber =  Math.random() + 1
console.log(randomnumber)
randomnumber = (Math.random() * 6) +1
console.log(randomnumber)
randomnumber = Math.floor( randomnumber)
console.log(randomnumber)
 */

let randomnumber =  0

function rollDice() {
    randomnumber =  Math.floor ((Math.random() * 6)) + 1
    return randomnumber
}

console.log(rollDice())

let person = {
    name: "samina",
    age: 46,
    country: "india"
}

function logData() {
    console.log(person.name + " is " + person.age + " years old and lives in " +person.country )
}

logData()

let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

console.log("The 5 largest con in the world are : ")
for (let i=0; i<largeCountries.length; i++ ) {
    console.log( "-" + largeCountries[i])
}

let largeCountries2 = ["Tuvalu","India","USA","Indonesia","Monaco"]

largeCountries2.shift()
largeCountries2.unshift("China")
largeCountries2.pop()
largeCountries2.push("Pakistan")
console.log(largeCountries2)

let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array
function Gamepad() {
    retV = Math.floor(Math.random() * 3)
    console.log(retV)
    return hands[retV]
}

console.log(Gamepad())


const recipient = "James"

// Refactor the email string to use template strings
const email = "Hey " + recipient + "! How is it going? Cheers Per"

const email2 = `Hey ${[recipient]} ! 
                How is it going? 
                Cheers Per
                `

console.log(email2)


// 1. Grab the box from the DOM and store it in a variable
// 2. Add a click event listener to the box 
// 3. Log out "I want to open the box!" when it's clicked
let boxid = document.getElementById("box")

boxid.addEventListener("click", function() {
    console.log("i wanna open the box")
})

const container = document.getElementById("container")
container.innerHTML = "<button onclick='buy()'> Buy! </button>"

// When clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying!"
function buy() {

    container.innerHTML += "<p margin=5px> Thank you for buying </p>"
}


let myLeads = `["www.awesomelead.com"]`

// 1. Turn the myLeads string into an array
myLeads = JSON.parse(myLeads)
// 2. Push a new value to the array
myLeads.push("www.lead2.com")
// 3. Turn the array into a string again
myLeads = JSON.stringify(myLeads)
// 4. Console.log the string using typeof to verify that it's a string
console.log(typeof myLeads)


// truthy
// falsy

// false
// 0
// ""
// null -> how you as a developer signalize emptiness
// undefined -> how JavaScript signalizes emptiness
// NaN

let currentViewers = ["jane"]
console.log(currentViewers[5])
console.log(  Boolean("")   ) //false
console.log(  Boolean("0")  ) //true
console.log(  Boolean(100)  ) //true
console.log(  Boolean(null) ) //false
console.log(  Boolean([0])  ) //true
console.log(  Boolean(-0)   ) //false


function greetUser(greeting, name) { 
    container.innerHTML += `${greeting}, ${name} 👋`
}

//.        arguments
greetUser("Howdy", "James")


function add(num1, num2) {
    return num1 + num2
}

add(3, 4)

function getarr(array) {
    console.log(array[0])
}

arr = [1,2,3]
getarr(arr)

// SETTING THE STAGE
//const player = "Per"
//const opponent = "Nick"
//const game = "AmazingFighter"

 // Create player object
let player = {
    name : "Per",
    opponent : "Nick",
    game : "AmazingFighter",
    points : 100
}

let points = 0
let hasWon = false

// PLAYING THE GAME
points += 100
hasWon = true

// ANNOUNCING THE WINNER
if (hasWon) {
    //console.log(player + " got " + points + " points and won the " + game + " game!")
    console.log(`${player.name} got ${points} points and won the ${player.game} game! `)
} else {
    console.log(`The winner is ${player.opponent}! ${player.name} lost the game`)
}

let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.
// Call the function while passing in myCourses as an argument

function myCourse(courses){

    for (let i=0; i<courses.length; i++) {
        console.log(courses[i])
    }
} 

myCourse(myCourses)


let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]

// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)
const getscore  = document.getElementById("get-score-btn")

getscore.addEventListener("click", function() {
    container.innerHTML += `${data[0].player} score is ${data[0].score} great going`
})


function generateSentence(desc, arr) {
    let baseString = `The ${arr.length} ${desc} are `
    const lastIndex = arr.length - 1
    for (let i = 0; i < arr.length; i++) {
        if (i === lastIndex) {
            baseString += arr[i]
        } else {
            baseString += arr[i] + ", "   
        }
    }
    return baseString
}

const sentence = generateSentence("highest mountains", ["Mount Everest", "K2"])
console.log(sentence)

// Challenge:
// Round the price in the button down to two decimal places.
// Don't know which method to use? Google it!

// const totalPrice = "420.69235632455"
// const btn = document.getElementById("purchase-btn")
// btn.textContent = `Buy €${ Number(totalPrice).toFixed(2) }`

// Save a value to localStorage
// Delete your code and refresh the page
// Fetch your value from localStorage and log it out

localStorage.setItem("myCredits", "100")
let myCredits = localStorage.getItem("myCredits")
console.log(myCredits)


const characters = [
    {
        title: 'Ninja',
        emoji: '🥷',
        powers: ['agility', 'stealth', 'aggression'],
    },
    {
        title: 'Sorcerer',
        emoji: '🧙',
        powers: ['magic', 'invisibility', 'necromancy'],
    },
    {
        title: 'Ogre',
        emoji: '👹',
        powers: ['power', 'stamina', 'shapeshifting'],
    },
    {
        title: 'Unicorn',
        emoji: '🦄',
        powers: [ 'flight', 'power', 'purity'],
    }
]

for (let character of characters){
    //console.log(character.powers)
    for (let power of character.powers) {
        console.log(power)  
    } 
}

characters.forEach(function(character) {
    console.log(character.powers)
    character.powers.forEach(function(power, index) {
        console.log(index, power)})
})

    // const emotionsArray = []
    // for (let i = 0; i < cats.length; i++){
    //     for (let j=0; j < cats[i].emotionTags.length; j++){
    //             emotionsArray.push(cats[i].emotionTags[j])
    //     }
    // }

const ages = [1, 5, 9, 23, 56, 10, 47, 70, 10, 19, 23, 18]

const adults = ages.filter(function(age){
    return age >= 18
})

console.log(adults)

const dreamHoliday = {
    destination: 'UP',
    activity: 'sleeping under the stars',
    accommodation: 'dadis house',
    companion: 'cousins'
}

const {destination, activity, accommodation, companion} = dreamHoliday

// E.g. "I would love to go to Austin, Texas to visit the Tesla HQ. 
//      I'd sleep in a luxury ranch and hang out with Elon Musk all day."
console.log(`I would love to go to ${destination} and love ${activity}.
     I'd sleep in ${accommodation} and hang out with ${companion} all day.`)

//Convert these Miles to KM! 
const distanceWalkedMilesArr = [140, 153, 161, 153, 128, 148]

const conversionFactorMilesToKm = 1.6

const distanceWalkedKmArr = distanceWalkedMilesArr.map(function(distanceMiles, index){
    return `Month ${index}: ${distanceMiles * conversionFactorMilesToKm}KM`
})

console.log(distanceWalkedKmArr)

function convertMilesToKms() {
    return distanceWalkedMilesArr.map(function (distanceMiles, index) {
        return `Month ${index}: ${distanceMiles * conversionFactorMilesToKm}KM`
    })
}
console.log(convertMilesToKms())


/* 
    Below is an array of objects representing expenses and refunds. 
    Positive amounts are expenses, negative amounts are refunds. 
    
    We want to find out how much money was spent in 2023. 
*/

const expensesAndRefunds = [
    { description: 'Groceries', amount: 50, year: 2023 },
    { description: 'Electronics', amount: -30, year: 2023 },
    { description: 'Dinner', amount: 40, year: 2023 },
    { description: 'Clothing', amount: 60, year: 2023 },
    { description: 'Entertainment', amount: 25, year: 2023 },
    { description: 'Rent', amount: -500, year: 2024 },
    { description: 'Utilities', amount: 100, year: 2024 },
    { description: 'Books', amount: 20, year: 2024 },
    { description: 'Fitness', amount: 30, year: 2024 },
    { description: 'Gifts', amount: 15, year: 2024 },
]

let totalSpent = 0
const cutoffDate = 2024

for (let i = 0; i < expensesAndRefunds.length; i++) {
    const currentExpenseOrRefund = expensesAndRefunds[i]
    
    if (currentExpenseOrRefund.year >= cutoffDate) {
        console.log(`Reached cutoff date, exiting loop`)
        break   
    }
    
    if (currentExpenseOrRefund.amount < 0) {
        console.log(`Skipping ${currentExpenseOrRefund.description} due to refund`)
        continue
    } 
    
    totalSpent += currentExpenseOrRefund.amount 
}


console.log(`Total amount spent on items in 2023: $${totalSpent}`)

// function getSpendAlert(amount) {
//     return `Warning! You just spent £${amount}!`
// }


// const getSpendAlert = function(amount){
//     return `Warning! You just spent £${amount}!`
// }
// console.log(getSpendAlert(150))

const getSpendAlert = (amount) => {
    return `Warning! You just spent £${amount}!`
} 

console.log(getSpendAlert(150))

const getSpendAlert2 = () => {
    return `Warning! You just spent some money!`
} 

console.log(getSpendAlert2())

const getSpendAlert3 = (name, amount) => {
    return `Warning! Hey ${name}! You just spent £${amount}!`
} 

console.log(getSpendAlert3('Tom', 100))

const getSpendAlert4 = amount => `Warning! You just spent £${amount}!`

console.log(getSpendAlert4(100))


function getTheftAlert(numberOfTransactionsHour) {
    if (numberOfTransactionsHour > 5) {
        return `You have made ${numberOfTransactionsHour} transactions 
                in the past hour. We think your card might have been 
                compromised`
    }
}


const getAlert = function(numberOfTransactionsHour) {
    if (numberOfTransactionsHour > 5) {
        return `You have made ${numberOfTransactionsHour} transactions 
                in the past hour. We think your card might have been 
                compromised`
    }
}
console.log(getAlert(6))


// const speedWarning = speed => `You are going at ${speed} mph!`
// console.log(speedWarning(40))

const speedWarning = (limit, speed) => {
    if (speed > limit) {
        `You are going at ${speed} mph!`
    }
}

console.log(speedWarning(30, 40))

const distanceTraveledMiles = [267, 345, 234, 190, 299]

const distanceTraveledKm = distanceTraveledMiles.map(function(distance){
    return Math.round(distance * 1.6)
})

console.log(distanceTraveledKm)

/*
Challenge
1. Refactor this .map method so the inline function is
   an arrow function. 
2. Write the least amount of code possible.
*/
const distanceTraveledKm2 =  distanceTraveledMiles.map( (distance) => Math.round(distance * 1.6))
console.log(distanceTraveledKm2)

const exerciseTimeMins = 40

const message1 = exerciseTimeMins < 30 ? 'You need to try harder!' : 'Doing good!'

console.log(message1)


const exerciseTimeMins2 = 40

// let message = ''

// if (exerciseTimeMins < 30) {
//     message = 'You need to try harder!'
// }
// else if(exerciseTimeMins < 60) {
//     message = 'Doing good!'
// }
// else {
//     message = 'Excellent!'
// } 

const message = exerciseTimeMins < 30 ? 'You need to try harder!' 
                : exerciseTimeMins < 60 ? 'Doing good!' 
                : 'Excellent!'

console.log(message)

const playerGuess = 3
const correctAnswer = 6

/*
Challenge
1. Now improve the functionality of this code by 
   letting the player know if their guess was too high, 
   too low, or exactly right.
*/
let message3 = playerGuess === correctAnswer ? 'Exactly right' 
                : playerGuess < correctAnswer ? 'Too low'
                : 'too high'

console.log(message3)

// spreading the values
//REST parameter
function setPermissionLevel(permissionLevel, ...names) {
    
    names.forEach((name)=> 
        console.log(`${name} now has ${permissionLevel} level access.`))
    
}

setPermissionLevel('admin', 'Dave', 'Sally')

const lunchMenu = ['Greek Salad', 'Open Sandwich', 'Parsnip Soup', 'Flatbread and Dip']
const dinnerMenu = ['Lasagne', 'Strogonoff', 'Tagine', 'Katsu Curry']
const sweetMenu = ['Mixed Berry Ice Cream', 'Chocolate Brownie', 'Orange Cheesecake']

// console.log(...lunchMenu)
// Greek Salad,"Open Sandwich","Parsnip Soup","Flatbread and Dip"

const eventMenu = [...lunchMenu, ...dinnerMenu, ...sweetMenu]

console.log(eventMenu)

// short circuting with || or operator
const jobHunter = {
    name: 'Tom Chant',
    // jobSearchArea: 'Europe',
}
const workLocation = jobHunter.jobSearchArea || 'Worldwide'
console.log(`${jobHunter.name}'s work location is ${workLocation}`)


const jobHunter2 = {
    name: 'Tom Chant',
    username: 'TChant44',
    workLocation: 'Europe',
    }
    
/*
Challenge:
1. Make it so that if the jobHunter2 object does not have 
   a name property, the username is used instead.
*/
    
// Complete this line of code 👇
const jobHunterName = jobHunter2.name || jobHunter2.username
console.log(`Hey ${jobHunterName}!`)
console.log(`Hey ${jobHunter.name || jobHunter.username}!`)

// with and OPERATOR
const user = {
    userName: 'Tom',
    role: 'admin',
}
// code will stop if the expression evaluated to False -> not executed/ nothing happens
user.role === 'admin' && console.log('Dashboard Displayed')

// next challenge
const accountBalanceUsd = '$45,000,000,000 🤑💰'
const swissBankPassCodesArr = [1234,5678,9876,3434]

function authenticationCheck(passCode){
/*
Challenge:
1. If the passcode passed into authenticationCheck 
   exists in swissBankPassCodesArr, authenticationCheck 
   should log out accountBalanceUsd.    
*/
    swissBankPassCodesArr.includes(passCode) && console.log(accountBalanceUsd)
}
authenticationCheck(3434)

//SWITCH stmt
// For example: "You selected Salad. That will be $4"
function selectItem(item) {
    let price = 0
/*
Challenge:
1.  Add the remaining price list items as cases.
*/    
    switch(item) {
        case 'coffee':
            price = 2
            break 
        case 'sandwiches':
            price = 5
            break
        case 'salad':
            price = 4
            break  
        case 'lemon cake':
            price = 3 
            break
        default:
            return `Sorry, we don't sell ${item}`
    }
    return `You selected ${item}. That will be $${price}`
}

console.log(selectItem('lemon cake'))

// constructors
const dateSnapshot = new Date()
console.log(dateSnapshot)
console.log(dateSnapshot.toString())

//luxon
/*
Challenge:
1. Search online to find out how we can get just the year 
   using the Date() constructor and update the console.log above.
*/


setTimeout(() => {
    const dateSnapshot2 = new Date()
    console.log(dateSnapshot2.toString())
}, 1000)

setTimeout(() => {
    const dateSnapshot3 = new Date()
    console.log(dateSnapshot3.toString())
}, 2000)

console.log(`Copyright ${dateSnapshot.getFullYear().toString()}`)

// ERROR Constructor

function checkUsername(userName) {
    if (userName) {
        console.log(userName)
    } else {
        // console.log(new Error('No username provided')) OR
        console.log('I execute')
        throw new Error('No username provided')
        console.log('I do not execute')
    }
}
checkUsername('sami')

String()
Number()
Array()
Object()
Boolean()

const person2 = {} // OR
// const person2 = new Object()
person2.name = 'Tom'
console.log(person2)

// WE DONT USE ARROW FUNCTION FOR OBJECT FUNCTIONS/ METHODS 
const gamer = {
    name: 'Dave',
    score: 0,
    incrementScore: function(){
        console.log(this)
        // OR gamer.score++
        this.score++
    }
}

console.log(gamer)
gamer.incrementScore()
console.log(gamer)

// constructor
function Gamer(name){
    this.name = name
    this.score = 0
    this.incrementScore = function(){
        this.score++  
    }
}

const dave = new Gamer('Dave')
const sarah = new Gamer('Sarah')
const kerry = new Gamer('Kerry')
dave.incrementScore()
sarah.incrementScore()
sarah.incrementScore()
kerry.incrementScore()
kerry.incrementScore()
kerry.incrementScore()
console.log(dave)
console.log(sarah)
console.log(kerry)

/*
Challenge:
1. Create a constructor function called 'Character'.
2. Give it 'name' and 'collectedItemsArr' properties. 
    - 'name' should hold the character’s name.
	- 'collectedItemsArr' should hold an array of items. 
       Initialise it to an empty array.
3. Create an 'addItem' method which takes in an item as 
   a parameter and adds it to 'collectedItemsArr'.
4. The addItem method should log out a sentence like 
   `Merlin now has: wand, map, potion`.
5. Check it’s working by creating several instances of 
   Character and adding items to their arrays.
*/
class Character2 {
    constructor(name) {
        this.name = name
        this.collectedItemsArr = []    
    }

    addItem(item) {
        this.collectedItemsArr.push(item)
        console.log(`${this.name} now has: ${this.collectedItemsArr.join(', ')}`)

    }
}

const sami = new Character2('sami')
sami.addItem('billi')
sami.addItem('laptop')


function Character(name){
    this.name = name
    this.collectedItemsArr = []
    this.addItem = function(item) {
        this.collectedItemsArr.push(item)
        console.log(`${this.name} now has: ${this.collectedItemsArr.join(', ')}`)
    }
}

const tom = new Character('Tom') 
tom.addItem('poo')
tom.addItem('whiskers')
tom.addItem('trunk')

const jerry = new Character('Jerry')
jerry.addItem('trunk')
jerry.addItem('tail')


const wizard = new Character('Merlin')
const witch = new Character('Hermione')
wizard.addItem('wand')
wizard.addItem('map')
wizard.addItem('potion')
witch.addItem('sword')
witch.addItem('cloak of invisibility')


class Gamer2 {
    constructor(name, score) {
        this.name = name
        this.score = score
    }
    
    incrementScore() {
        this.score++  
    }
}

const dave2 = new Gamer2('Dave', 0)
dave2.incrementScore()
console.log(dave)
const sarah2 = new Gamer2('Sarah', 0)

function addTouristSurcharge(payment) {
    try {
        if (typeof payment === 'number') {
            console.log(payment + 10)
        } else {
            throw new ReferenceError('payment is not a number')
        }
    } catch (err) {
        console.error('Error: ' + err)
    }
}

addTouristSurcharge('60')