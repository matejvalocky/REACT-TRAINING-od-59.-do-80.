//React 70 vypísanie zem. šírky a dlžky ISS do stránky nefunguje

const App = () => {

  const url = "http://api.open-notify.org/iss-now.json"

  let latitude = ""
  let longitude = ""

  const getCoordinates = async() => {
    const response = await fetch(url)
    const data = await response.json() // než spustíš tento riadok, počkaj kým sa dokončí riadok nad ním
    console.log(data["iss_position"]["latitude"]) // zemepisná šírka
    console.log(data["iss_position"]["longitude"]) // zemepisná dĺžka
    latitude = data["iss_position"]["latitude"]
    longitude = data["iss_position"]["longitude"]
  }

  getCoordinates() // zavolanie funkcie

  return (
    <div>
      <h1>API</h1>
      <h2>Zemepisná šírka</h2>
      <p>{latitude}</p>
      <h2>Zemepisná dĺžka</h2>
      <p>{longitude}</p>
    </div>
  )
}

export default App