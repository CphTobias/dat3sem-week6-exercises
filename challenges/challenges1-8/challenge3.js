// Challenge 3
// What are the pros & cons (if any) in these four ways of doing the same thing?
// One does not work. Why (explain) and fix it
// Which one would you prefer (if any)?

const numbers = [1, 3, 5, 10, 11]

// 1

function makeListItem(number) {
  return `<li>${number}</li>`
}

let listItems = numbers.map(makeListItem).join("\n")
console.log(listItems)

// 2

// Her bliver callback functionen oprettet inline
listItems = numbers
  .map(function (number) {
    return `<li>${number}</li>`
  })
  .join("\n")
console.log(listItems)

// 3

listItems = numbers.map(number => `<li>${number}</li>`).join("\n")
//console.log(listItems)

// 4

// Fejlen er, at der ikke bliver returneret noget.
listItems = numbers
  .map(number => {
    return `<li>${number}</li>`
  })
  .join("\n")
console.log(listItems)
