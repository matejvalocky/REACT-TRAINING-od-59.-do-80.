// React 74 - lepšia práca s API
// druhy return nebude nikdy spustený = unreacheable code = nedostiahnuteľný kód

import { useState, useEffect } from "react"

const url = "http://api.open-notify.org/iss-now.json"

const App = () => {
  const [loading, setLoading] = useState(true)



  useEffect( () => {
    fetch(url).then( (response) => response.json())
              .then( (data) => data["iss_position"]) 
              .then( (position) => {
                  console.log(position["latitude"])
                  console.log(position["longitude"])
              })

  }, []) 



  if(loading) {
    return <h2>Načítanie stránky</h2>
  } else {
    return <h1>Obsah stránky</h1>
  }

}

export default App