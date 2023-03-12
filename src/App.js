import { useState, useEffect } from "react"


const App = () => {
 
  

  const [value, setValue] = useState(0)
  const [test, setTest] = useState(0)

  useEffect( () => {
    const button = document.querySelector(".btn")
    if (value>=1){
      button.textContent = `Klik číslo ${value}` // template string
    } else {
      button.textContent = "Klikni"
    }
   
    console.log("Prvý useEffect = klikni")
  },[value]) // ak doplním ,[] medzi zátvorky, tak sa useEffect spustí iba raz

  useEffect ( () => {
    document.title = `Nový titulok ${test}`
    console.log("Druhý useEffect = titulok")
  },[test])

  return (
    <div> 
      <h1>začíname</h1>
      <p>{value}</p>
      <button className="btn" onClick={ () => setValue(value + 1)}>Klikni</button>
      <button className="btn-test" onClick={ () => setTest(test + 1) }>Titulok</button>
    </div>
   
  )
}

export default App