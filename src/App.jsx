import { useState, useEffect } from 'react'
import "./App.css"

function App() {
  const [ characterInformations, setCharacterInformations] = useState()

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
    .then(response => response.json())
    .then(data => {
      setCharacterInformations(data.results)
    })
  }, [])

  useEffect(() => {
    console.log(characterInformations)
  }, [characterInformations])

  return (
    <div className="App">
      { characterInformations && characterInformations.map(character => {
          return(
            <div className="character" key={ character.id }>
              <img src={ character.image } alt="" />
              <div className="info">
                <p>Name: { character.name }</p>
                <p>Gender: { character.gender }</p>
                <p>Origin: { character.origin.name }</p>
                <p>Life Status: { character.status }</p>
              </div>
            </div>
          )
        })
       }
    </div>
  )
}

export default App
