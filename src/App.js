// React 67 - Přidáváme useState

import { useState } from "react"

const App = () => {
  const [quote, setQuote] = useState("východzí text")
  const url = "https://api.kanye.rest/" // URL NA API
  


  const getQuote = async () => { 
    const response = await fetch(url) 
    const data = await response.json() 
    const finalQuote = data["quote"] // do finalQuote sa nastaví citát
    // setQuote(finalQuote)
    

  }

  getQuote() // ZAVOLANIE FUNKCIE


  return ( // tu prebieha renderovanie
    <div> 
      <h1>{quote}</h1>
    </div>
   
  )
}

export default App