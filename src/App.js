//React 71 Vypísanie, ktoré funguje (useState, useEffect) 

// potrebujeme refreshnut, teda znova vypísať komponentu do stránky = useState

import { useState, useEffect} from "react"

const App = () => {

  const url = "http://api.open-notify.org/iss-now.json"

  // 1. nastavenie latitude a longitude na prázdne stringy cez useState

  const [latitude, setLatitude] = useState("") // prázdny string sa nastaví do latitude
  const [longitude, setLongitude] = useState("") // prázdny string sa nastaví do longitude

  

  const getCoordinates = async() => { //3. zavolanie funkcie, vďaka nej latitute a logtitude nastav na správne hodnoty a potom to všetko vyrenderuj do stránky
    const response = await fetch(url)
    const data = await response.json() // než spustíš tento riadok, počkaj kým sa dokončí riadok nad ním

    setLatitude(data["iss_position"]["latitude"])
    setLongitude(data["iss_position"]["longitude"])
  }

  useEffect ( () => { // pôjde to až úplne na konci
    getCoordinates() // zavolanie funkcie
  }, []) // zavolanie funkcie len raz

  

  return (        // 2. zavolanie return
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