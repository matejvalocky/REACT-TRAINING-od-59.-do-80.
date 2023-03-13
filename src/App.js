import { useState, useEffect } from "react"

const App = () => {
 const [windowSize, setWindowSize] = useState(window.innerWidth)

 const sizeControl = () => {
  setWindowSize(window.innerWidth)
 } 

 useEffect( () => {
    console.log("ja som useEffect");
    window.addEventListener("resize", sizeControl) // pridávame resize
    return () => {
      console.log("ja som cleanUp function")
      window.removeEventListener("resize", sizeControl) // odoberáme resize
    }
 })
  
  return (
    <div> 
        <h1>šírka okna</h1>
        <h2>{windowSize}</h2>
    </div>
   
  )
}

export default App