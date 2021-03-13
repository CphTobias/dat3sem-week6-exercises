import "./style.css"
import "bootstrap/dist/css/bootstrap.css"
const map = document.getElementById("svg2")
map.addEventListener("click", e => {
  const countryId = e.target.id
  const countryOnMap = document.getElementById(e.target.id)
  countryOnMap.style.fill = "red"
  fetch(`https://api.tobias-z.com/rest-persons-dto/country/${countryId}`)
    .then(res => res.json())
    .then(([country]) => {
      const countryInfo = document.getElementById("country-info")
      countryInfo.innerHTML = `
      <div>Country: ${country.name}</div>
      <div>Population: ${country.population}</div>
      <div>Area: ${country.area}</div>
      <div>Borders: ${country.borders}</div>
      `
    })
})
