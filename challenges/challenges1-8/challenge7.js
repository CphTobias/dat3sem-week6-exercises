// Challenge 7

// Now, let's adjust all members
// Complete the function below, so we can add the new property to ALL members. Neither the original array nor the content must be mutated.
// Hint: If you know your map-method its a oneliner.
let members = [
  { name: "Peter", age: 14, gender: "male" },
  { name: "Person2", age: 20, gender: "female" },
  { name: "Bob", age: 42, gender: "male" },
]

function addMayDrivePropertyToAll(members) {
  //Let me return a new array where all has a mayDrive property
  return members.map(member => ({
    ...member,
    mayDrive: member.age >= 18,
  }))
}
const addJusted = addMayDrivePropertyToAll(members)
console.log(members)
console.log(addJusted)
