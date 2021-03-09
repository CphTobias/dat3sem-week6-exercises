// Challenge 5

// Compared to Java where objects are always generated from a predefined blueprint (the class) javascript objects can be created, altered, read on the fly.
// This is often a VERY cool feature of JavaScript.
// Complete the code below so that when given any object (use name below for your first test) it will print the number of properties in the object, followed by the key and value for each property.

let name = { name: "Peter", age: 14, gender: "male" }

function printObjectDetails(obj) {
  const count = Object.entries(obj).length
  console.log(`This object has ${count} properties`)
  console.log("Keys and Values for the object are: ")
  for (const [key, value] of Object.entries(obj)) {
    console.log(key + ": " + value)
  }
}

printObjectDetails(name)

// This is what it should print:
// This object has 3 properties
// Keys and Values for the object are:
// name: Peter
// age: 14
// gender: male
