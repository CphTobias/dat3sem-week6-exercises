// Challenge 6
// In JavaScript, we can add or remove properties on the fly
// Complete the function below, so that given a member, it will add a property mayDrive with the value false if age is below 18, otherwise false.
// For peter below, it should return: { name:'Peter', age: 14, gender: 'male', mayDrive: false }

let peter = { name: "Peter", age: 14, gender: "male" }

function addMayDriveProperty(member) {
  const person = { ...member, mayDrive: member.age >= 18 }
  return person
}
const addJustedMember = addMayDriveProperty(peter)
console.log(addJustedMember)
console.log(peter)
