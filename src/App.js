// React 75 - Vypisujeme aktuální data z API do stránky
// druhy return nebude nikdy spustený = unreacheable code = nedostiahnuteľný kód

import { useState, useEffect } from "react"

const url = "http://api.open-notify.org/iss-now.json"

const App = () => {
  const [loading, setLoading] = useState(false)
  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")



  useEffect( () => {
    fetch(url).then( (response) => response.json())
              .then( (data) => data["iss_position"]) 
              .then( (position) => {
                  // console.log(position["latitude"])
                  // console.log(position["longitude"])
                  setLatitude(position["latitude"])
                  setLongitude(position["longitude"])
              })

  }, []) 

  if(loading){
    return <h2>Načítanie stránky</h2>
  }


  // <></> dáva sa to namiesto div
    return <>  <h2>Zemepisná šírka</h2>  
        <p>{latitude}</p>
        <h2>Zemepisná dĺžka</h2>
        <p>{longitude}</p>
    </>
  

}

export default App