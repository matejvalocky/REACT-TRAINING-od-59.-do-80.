  // React 79  Ternárny operátor (ternary operator)

  const App = () => {
    const error = false
    return <div>

      {/* toto je štandardný (dlhý) zápis podmienky */}
      {/* {
        if (error) {
          <p>Chyba</p>
        } else {
          <h1>Obsah stránky</h1>
      } */}

      {/* toto dolu je skrátený zápis podmienky */}
      {error ? <p>Chyba</p> : <div>
        <h2>Obsah stránky</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis quo modi soluta asperiores. Repellat blanditiis temporibus labore sed dolores. Accusamus beatae similique hic at eligendi ut minus? Sed, itaque sit?</p>
        </div> } 


    </div>
  }

  export default App