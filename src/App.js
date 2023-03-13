//React 69 - API pre medzinárodnú vesmírnu stanicu

const App = () => {

  const url = "http://api.open-notify.org/iss-now.json"

  const getCoordinates = async() => {
    const response = await fetch(url)
    const data = await response.json() // než spustíš tento riadok, počkaj kým sa dokončí riadok nad ním
    console.log(data["iss_position"]["latitude"]) // zemepisná šírka
    console.log(data["iss_position"]["longitude"]) // zemepisná dĺžka
  }

  getCoordinates() // zavolanie funkcie

  return (
    <h1>API</h1>
  )
}

export default App