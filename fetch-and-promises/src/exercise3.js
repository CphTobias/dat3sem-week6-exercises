import { fetchRandomData } from "./apiUtils"

const errorDisplay = document.getElementById("error-display")
const successDisplay = document.getElementById("success-display")

function handleUserDisplayError(err) {
  if (err.status) {
    err.fullError.then(e => (errorDisplay.innerText = e.msg))
  } else {
    console.error(err)
  }
}

function generateTableRowsFromArray(users) {
  return users
    .map(
      user => `
      <tr>
        <td>${user.id}</td>
        <td>${user.age}</td>
        <td>${user.name}</td>
        <td>${user.gender}</td>
        <td>${user.email}</td>
      </tr>
  `
    )
    .join("")
}

function generateSingleUser(user) {
  let toReturn = []
  for (const [key, value] of Object.entries(user)) {
    toReturn = [...toReturn, `<p>${key}: ${value}</p>`]
  }
  return toReturn.join("")
}

function generateAllUsers() {
  const allUserRowsNode = document.getElementById("allUserRows")
  fetchRandomData("http://localhost:3333/api/users/")
    .then(data => {
      allUserRowsNode.innerHTML = generateTableRowsFromArray(data)
    })
    .catch(handleUserDisplayError)
}

function handleFindUserById(e) {
  e.preventDefault()
  const userId = document.getElementById("find-user-input").value
  fetchRandomData(`http://localhost:3333/api/users/${userId}`)
    .then(data => {
      document.getElementById("show-user-by-id").innerHTML = generateSingleUser(
        data
      )
    })
    .catch(handleUserDisplayError)
}

function handleAddUser(e) {
  e.preventDefault()
  const body = {
    age: document.getElementById("add-age").value,
    name: document.getElementById("add-name").value,
    gender: document.getElementById("add-gender").value,
    email: document.getElementById("add-email").value,
  }
  fetchRandomData("http://localhost:3333/api/users/", "POST", body)
    .then(data => {
      successDisplay.innerText = `user with name: ${data.name}, was created!`
    })
    .catch(handleUserDisplayError)

  generateAllUsers()
}

function handleEditUser(e) {
  e.preventDefault()
  const body = {
    age: document.getElementById("edit-age").value,
    name: document.getElementById("edit-name").value,
    gender: document.getElementById("edit-gender").value,
    email: document.getElementById("edit-email").value,
  }
  const userId = document.getElementById("edit-id").value
  fetchRandomData(`http://localhost:3333/api/users/${userId}`, "PUT", body)
    .then(data => {
      successDisplay.innerText = `user with name: ${data.name}, was edited!`
    })
    .catch(handleUserDisplayError)

  generateAllUsers()
}

function handleDeleteUser(e) {
  e.preventDefault()
  const userId = document.getElementById("delete-id").value
  fetchRandomData(`http://localhost:3333/api/users/${userId}`, "DELETE")
    .then(
      () => (successDisplay.innerText = `user with id: ${userId}, was deleted!`)
    )
    .catch(handleUserDisplayError)

  generateAllUsers()
}

export {
  generateAllUsers,
  handleFindUserById,
  handleAddUser,
  handleEditUser,
  handleDeleteUser,
}
