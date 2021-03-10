import $ from "jquery"
import { handleDeletePerson } from "./personFacade"

const urls = {
  all: "https://tobias-z.com/rest-persons-dto/api/person/",
  byId: id => `https://tobias-z.com/rest-persons-dto/api/person/${id}`,
}

function handlePersonErrors(err) {
  if (err.status) {
    const errorNode = document.getElementById("error")
    console.log(err)
    err.fullError.then(
      error => (errorNode.innerText = error.code + ": " + error.message)
    )
  } else {
    console.error(err)
  }
}

function generateListFromPeople(data) {
  const rows = data.all.map(
    p => `
    <tr>
      <td>${p.id}</td>
      <td>${p.firstName}</td>
      <td>${p.lastName}</td>
      <td>${p.phoneNumber}</td>
      <td>${p.address.street}</td>
      <td>${p.address.zip}</td>
      <td>${p.address.city}</td>
      <td>
      <a href="#" id="editperson${p.id}">Edit</a>
      / 
      <a href="#" id="deleteperson${p.id}">delete</a>
      </td>
    </tr>
  `
  )

  return rows.join("")
}

function generateEditOnClicks(data) {
  data.all.map(p => {
    const editButtonNode = document.getElementById(`editperson${p.id}`)
    editButtonNode.addEventListener("click", () => {
      //Add id to hidden input
      document.getElementById("id").value = p.id
      document.getElementById("fname").value = p.firstName
      document.getElementById("lname").value = p.lastName
      document.getElementById("phone").value = p.phoneNumber
      document.getElementById("street").value = p.address.street
      document.getElementById("zip").value = p.address.zip
      document.getElementById("city").value = p.address.city
      $("#myModal").modal("show")
    })
  })
}

function generateDeleteOnClicks(data) {
  data.all.map(p => {
    const editButtonNode = document.getElementById(`deleteperson${p.id}`)
    editButtonNode.addEventListener("click", () => handleDeletePerson(p.id))
  })
}

export {
  urls,
  generateListFromPeople,
  handlePersonErrors,
  generateEditOnClicks,
  generateDeleteOnClicks,
}
