// Challenge 1:
let car = { make: "volvo", year: 2011 }
console.log(car) //1

let carCopy = { ...car }
console.log(carCopy) //2

carCopy.year = 2018

console.log(car) //3
console.log(carCopy) //4

// Challenge 1-b
// Replace line three with this line and execute. Explain what you see

// We are now using the spread operator to create a new object which looks like our car object
// This is why car still has the same year after changing the carCopy object
