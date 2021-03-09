function handleFetchQuote() {
  const textField = document.getElementById("quote-p")
  fetch("https://studypoints.info/jokes/api/jokes/period/hour")
    .then(res => res.json())
    .then(data => {
      textField.innerText = data.joke
    })
    .catch(err => console.error(err.message))
}

export { handleFetchQuote }
