// React 73 - Multiple Returns
// druhy return nebude nikdy spustený = unreacheable code = nedostiahnuteľný kód


const App = () => {
  const loading = false

  if(loading) {
    return <h2>Načítanie stránky</h2>
  } else {
    return <h1>Obsah stránky</h1>
  }

}

export default App