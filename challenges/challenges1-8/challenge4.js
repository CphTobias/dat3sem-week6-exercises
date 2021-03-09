// Challenge 4
// We saw, in the previous task, that a one-liner arrow function gets an implicit return. The code snippet below is seen as a oneliner, so complete the code below to return a string with four table rows. You must obey these rules.
// The code must be easy to read (which often calls for more lines)
// EVERYTHING you do must be done inside the two backtick operators

const members = [
  { name: "Peter", age: 14, gender: "male" },
  { name: "Jan", age: 35, gender: "male" },
  { name: "Janne", age: 25, gender: "female" },
  { name: "Martin", age: 22, gender: "male" },
]

const tableRows = members
  .map(
    member => `
  <tr>
    <td>${member.name}</td>
    <td>${member.age}</td>
    <td>${member.gender}</td>
  </tr>
`
  )
  .join("\n")

// Execute and understand these examples before challenge 5-8
const obj = { a: 1, b: true, c: "hello" }
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))
printKeyValuePairs(obj)

function printKeyValuePairs(obj, key, val) {
  for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`)
  }
}
function setValueDynamically(obj, key, val) {
  obj[key] = val
}
setValueDynamically(obj, "c", "HELLO")
