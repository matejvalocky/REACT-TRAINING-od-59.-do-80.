// React 80 - Ukáž a skry komponentu

import { useState } from "react"
import Book from "./components/Book"

const App = () => {
  const [show, setShow] = useState(false)

  return <div>
    <button onClick={() => setShow(!show)}>Ukáž / Skry </button>
    {show && <Book />}
  </div>

}

  export default App 