// Challenge -2
// By now you should have realized how cool a method map is. But what if it did not exist? Then we would have to create it by yourself.
// Do that by implementing the myMap method below, which should do EXACTLY the same as the original map, but since it does not exist on the Array we have to pass the array in as a parameter.

const numbers = [1, 3, 5, 10, 11]

function makeListItem(number) {
  return `<li>${number}</li>`
}

function myMap(array, callback) {
  let arrayToReturn = []
  array.forEach(
    number => (arrayToReturn = [...arrayToReturn, callback(number)])
  )
  return arrayToReturn.join("")
}

//let listItems = numbers.map(makeListItem); I don’t exist :-(
let listItems = myMap(numbers, makeListItem)
console.log(listItems)
