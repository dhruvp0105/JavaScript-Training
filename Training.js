// Task 1 :-

// Create an array with the string which contains the 'tor' from the given array using javascript methods.
// const myarray = [ "victor", "Danial", "factor", "brainstorming", "contradict", "contractor", "channel", "discriminator" ]

const myarray = ["victor", "Danial", "factor", "brainstorming", "contradict", "contractor", "channel", "discriminator"]

const filteredArray = myarray.filter((str) => str.includes('tor'))

const resultArray = myarray.filter((str) => str.endsWith('tor'))

const resultArray1 = myarray.filter((str) => str.indexOf('tor') !== -1)

const resultArray2 = myarray.filter((str) => str.match(/tor/))

const resultArray3 = []
myarray.forEach((str) => {
    if (str.includes('tor')) {
        resultArray3.push(str)
    }
})

console.log("\n")
console.log("**********  Task1 Output  **********")
console.log(filteredArray)  // [ 'victor', 'factor', 'brainstorming', 'contractor', 'discriminator' ]
console.log(resultArray)    // [ 'victor', 'factor', 'contractor', 'discriminator' ]
console.log(resultArray1)   // [ 'victor', 'factor', 'brainstorming', 'contractor', 'discriminator' ]
console.log(resultArray2)   // [ 'victor', 'factor', 'brainstorming', 'contractor', 'discriminator' ]
console.log(resultArray3)   // [ 'victor', 'factor', 'brainstorming', 'contractor', 'discriminator' ]



// Task 2 :-

// Write a JavaScript function to split a string and convert it into an array of words.
// Sample string = "I love JavaScript"
// Expected result: : [I' ,  'love' ,  'JavaScript']

const sampleString = "I love JavaScript"

const resultArray4 = sampleString.split(' ')

const resultArray5 = []
let currentWord = ''
for (char of sampleString) {
    if (char === ' ') {
        if (currentWord !== '') {
            resultArray5.push(currentWord)
            currentWord = ''
        }
    }
    else {
        currentWord += char
    }
}
if (currentWord !== '') {
    resultArray5.push(currentWord)
}

console.log("\n")
console.log("**********  Task2 Output  **********")
console.log(resultArray4)  // [ 'I', 'love', 'JavaScript' ]
console.log(resultArray5)  // [ 'I', 'love', 'JavaScript' ]



// Task 3 :-

// Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case.
// Sample string : "hELlO"
// Expected result: "HelLo"

const inputString = "hELlO"
let resultString = ""
const str = []

for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] >= 'A' && inputString[i] <= 'Z') {
        str.push(String.fromCharCode(inputString.charCodeAt(i) + 32))
    }
    else if (inputString[i] >= 'a' && inputString[i] <= 'z') {
        str.push(String.fromCharCode(inputString.charCodeAt(i) - 32))
    }
    resultString = str.join('')

}

console.log("\n")
console.log("**********  Task3 Output  **********")
console.log("Input String : ", inputString)  // Input String :  hELlO
console.log("Output String : ", resultString)  // Output String :  HelLo


