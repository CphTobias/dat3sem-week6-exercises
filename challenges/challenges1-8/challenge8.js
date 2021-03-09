// Challenge 8
// We have seen that we can add properties on the fly. Let's try to remove one.
// Discrimination, based on gender is not a nice thing, of often not legal. Implement the function below, so when given the member's array it will return a new array (without mutating the original) where the gender property has been removed.

let members = [
  { name: "Peter", age: 14, gender: "male" },
  { name: "Person2", age: 20, gender: "female" },
  { name: "Bob", age: 42, gender: "male" },
]

function removeGenderOnAll(members) {
  return members.map(member => ({ name: member.name, age: member.age }))
}

const addJusted = removeGenderOnAll(members)
console.log(members)
console.log(addJusted)
