// React 78 - Short circuit evaluation 2. časť

const App = () => {
  const value = "david"
  const value2 = 1

  const result1 = value && value2
  // prvý je true = vracia sa druhá hodnota
  // prvý je false = vracia sa prvá hodnota
  console.log(result1)

  const result2 = value || "tomas"
  // prvý je true = vracia sa prvá hodnota
  // prvý je false, tak vracia sa druhá hodnota
  // console.log(result2)




  return <div>
    <h1>{value2 || "Defaultný text"}</h1>
    {value2 && <h1>Supertajný nadpis</h1>}
  </div>

  
}

export default App