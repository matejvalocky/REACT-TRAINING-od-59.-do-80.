// React 66 - Vypísanie pomocou premennej nefunguje
const App = () => {
  const url = "https://api.kanye.rest/"
  let quote = "východzí text"

  console.log("Text nad funkciou")


  // synchrónny javascript znamená, že prevedie najprv 1. potom 2. a nakoniec 3. riadok kódu
  // 1. riadok kódu
  // 2. riadok kódu - trvanie napríklad 5 sekúnd
  // 3. riadok kódu

  // asynchrónny znamená, že žiadny krok nebrzdí ten ďalší

  

  const getQuote = async () => { // async znamená asynchronny javascript
    const response = await fetch(url) // zachyť mi tie data, poslanie žiadosti o dáta. AWAIT počká sa kým sa to dokončí a až potom sa prejde na ďalší riadok
    const data = await response.json() // rozbalili sme to a bude to objekt. AWAIT počkaj, kým sa to rozbalí a potom sa to uloží do dát (data)

    //pokiaľ chceme používať AWAIT, tak musíme hore napísať ASYNC, to znamená, počkaj, kým to dokončí a potom až pokračuj ďalej = AWAIT
    quote = data["quote"]
    console.log("Text vo funkcii")
  }

  getQuote()


  return (
    <div> 
      <h1>{quote}</h1>
      {console.log("text v return")}
    </div>
   
  )
}

export default App