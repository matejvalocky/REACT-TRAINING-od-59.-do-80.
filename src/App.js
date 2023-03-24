// React 77 - Short circuit evaluation

const App = () => {
  const value = "david"
  const value2 = "harry"

  const result1 = value && value2
  // prvý je true a druhé je akékoľvek = vracia sa druhá hodnota
  // prvý je false a druhé akokoľvek = vracia sa prvá hodnota
  console.log(result1)

  const result2 = value || "tomas"
  // prvý je true a druhé akékoľvek = vracia sa prvá hodnota
  // prvý je false, tak vracia sa druhá hodnota
  console.log(result2)




  return <div>
    
  </div>

  
}

export default App