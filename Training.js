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



// Task 4 :-

// Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
// Sample array: [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result: [15, -22, 47]

const sampleArray = [NaN, 0, 15, false, -22, '', undefined, 47, null]
const resultArray6 = sampleArray.filter(Boolean)

console.log("\n")
console.log("**********  Task4 Output  **********")
console.log(resultArray6)  // [ 15, -22, 47 ]



// Task 5 :-

// Create an array of scores from an existing array, using javascript methods
// const users = [ { name: 'Victor', score: 20 },
// { name: 'Mario', score: 10 },
// { name: 'Tatiana', score: 30 } ]

const users = [{ name: 'Victor', score: 20 }, { name: 'Mario', score: 10 }, { name: 'Tatiana', score: 30 }]
const resultArray7 = []

for (let i = 0; i < users.length; i++) {
    resultArray7.push(users[i].score)
}

console.log("\n")
console.log("**********  Task5 Output  **********")
console.log(resultArray7)  // [ 20, 10, 30 ]



// // Task 6 :-

// A program to list down the properties of the object.
// const student = {
// name: 'xxx',
// id: 123,
// department: 'computer',
// semester: 4
// }
// output should print name, id, department, semester.

const student = {
    name: 'dhruv',
    id: 123,
    department: 'computer',
    semester: 4
}

console.log("\n")
console.log("**********  Task6 Output  **********")
console.log("Name :", student.name)  // Name : dhruv
console.log("Id :", student.id)  // Id : 123
console.log("Department :", student.department)  // Department : computer
console.log("Semester :", student.semester)  // Semester : 4



// Task 7 :-

// Intersection array of keys between two objects
// Sample Input : var a = { x: 0, y: 1, z: 2, a: 10, b: 20, e: 30 },
// b = { x: 0, y: 1, z: 2, a: 10, c: 20, d: 30 };
// Expected output : ['x', 'y', 'z', 'a']

var a = { x: 0, y: 1, z: 2, a: 10, b: 20, e: 30 }
var b = { x: 0, y: 1, z: 2, a: 10, c: 20, d: 30 }

var Intersection = Object.keys(a).filter((key) => Object.keys(b).includes(key))

console.log("\n")
console.log("**********  Task7 Output  **********")
console.log(Intersection)  // [ 'x', 'y', 'z', 'a' ]



// Task 8 :-

// write the script to remove the department key from the student object.
// const student = {
// name: 'xxx',
// id: 123,
// department: 'computer',
// semester: 4,
// languages: ["JavaScript", "Python", "Ruby"]
// }

const student1 = {
    name: 'abc',
    id: 123,
    department: 'computer',
    semester: 4,
    languages: ['JavaScript', 'Python', 'Ruby']
}

delete student1.department

console.log("\n")
console.log("**********  Task8 Output  **********")
console.log(student1)