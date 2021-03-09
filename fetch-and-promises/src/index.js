import "./style.css"
import "bootstrap/dist/css/bootstrap.css"
import { handleAddJoke, handleJokeByIdClick, makeJokeList } from "./exercise1"
import { handleFetchQuote } from "./exercise2"
import {
  generateAllUsers,
  handleAddUser,
  handleDeleteUser,
  handleEditUser,
  handleFindUserById,
} from "./exercise3"

document.getElementById("all-content").style.display = "block"

/* 
  Add your JavaScript for all exercises Below or in separate js-files, which you must the import above
*/

/* JS For Exercise-1 below */
//generate the jokes
makeJokeList()

//get joke by id
const getByIdButtonNode = document.getElementById("get-joke-button")
getByIdButtonNode.addEventListener("click", handleJokeByIdClick)

//add new joke
const addJokeFormNode = document.getElementById("add-joke-form")
addJokeFormNode.addEventListener("submit", handleAddJoke)

/* JS For Exercise-2 below */
//Fetch on click
const quoteButtonNode = document.getElementById("quote-button")
quoteButtonNode.addEventListener("click", handleFetchQuote)
//Fetch on interval
setInterval(handleFetchQuote, 1000 * 60 * 12)

/* JS For Exercise-3 below */
// Show all users
generateAllUsers()

// Show a single user, given an ID
const findUserFormNode = document.getElementById("find-user-form")
findUserFormNode.addEventListener("submit", handleFindUserById)

// Add a new User
const addNewUserFormNode = document.getElementById("add-new-user-form")
addNewUserFormNode.addEventListener("submit", handleAddUser)

// Edit an existing user
const editUserFormNode = document.getElementById("edit-user-form")
editUserFormNode.addEventListener("submit", handleEditUser)

// Delete an existing user
const deleteUserFormNode = document.getElementById("delete-user-form")
deleteUserFormNode.addEventListener("submit", handleDeleteUser)

/* 
Do NOT focus on the code below, UNLESS you want to use this code for something different than
the Period2-week2-day3 Exercises
*/

function hideAllShowOne(idToShow) {
  document.getElementById("about_html").style = "display:none"
  document.getElementById("ex1_html").style = "display:none"
  document.getElementById("ex2_html").style = "display:none"
  document.getElementById("ex3_html").style = "display:none"
  document.getElementById(idToShow).style = "display:block"
}

function menuItemClicked(evt) {
  evt.preventDefault()
  const id = evt.target.id
  switch (id) {
    case "ex1":
      hideAllShowOne("ex1_html")
      break
    case "ex2":
      hideAllShowOne("ex2_html")
      break
    case "ex3":
      hideAllShowOne("ex3_html")
      break
    default:
      hideAllShowOne("about_html")
      break
  }
}
document.getElementById("menu").onclick = menuItemClicked
hideAllShowOne("about_html")
