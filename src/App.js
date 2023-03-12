import { useState, useEffect } from "react"


const App = () => {
 
  

  const [value, setValue] = useState(0)

  useEffect( () => {
    const button = document.querySelector(".btn")
    if (value>=1){
      button.textContent = `Klik číslo ${value}` // template string
    } else {
      button.textContent = "Klikni"
    }
   
    
  })

  

  return (
    <div> 
      <h1>začíname</h1>
      <p>{value}</p>
      {console.log("ja som Return")}
      <button className="btn" onClick={ () => setValue(value + 1)}>Klikni</button>
    </div>
   
  )
}

export default App