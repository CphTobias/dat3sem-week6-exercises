import jokeFacade from "./jokeFacade"

function makeJokeList() {
  const jokes = jokeFacade.getJokes()
  const jokeList = jokes.map(joke => `<li>${joke}</li>`).join("")
  document.getElementById("jokes").innerHTML = jokeList
}

function makeJokeFromId(jokeId) {
  const jokeText = jokeFacade.getJokeById(jokeId)
  document.getElementById("show-joke").innerText = jokeText
}

function handleJokeByIdClick() {
  const jokeId = document.getElementById("get-joke-input").value
  makeJokeFromId(jokeId)
}

function handleAddJoke(e) {
  e.preventDefault()
  const joke = document.getElementById("add-joke-input").value
  jokeFacade.addJoke(joke)
  makeJokeList()
  document.getElementById("add-joke-input").value = ""
}

export { makeJokeList, makeJokeFromId, handleJokeByIdClick, handleAddJoke }
