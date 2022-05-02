import { useState, useEffect } from 'react'
import Character from './components/Character'
import "./App.css"

function App() {
  const [ characterInformations, setCharacterInformations] = useState()
  const [ data, setData ] = useState()
  const [ url, setUrl ] = useState("https://rickandmortyapi.com/api/character/?page=1")

  useEffect(() => {
    fetch(`${url}`)
    .then(response => response.json())
    .then(data => {
      setCharacterInformations(data.results)
      setData(data)
    })
  }, [url])

  useEffect(() => {
    console.log(characterInformations)
  }, [characterInformations])

  return (
    <div className="App">
      <h1>All Characters</h1>
      <div className="characters">
        { characterInformations && characterInformations.map(character => {
            return <Character character={character} />
          })
         }
      </div>

       <div className="buttons">
         <button 
         className="prev"
         onClick={() => {
           if (data.info.prev !== null) {
             setUrl(data.info.prev)
             window.scrollTo(0, 0)
           }
         }}
         >Prev</button>
         
         <button 
         className="next"
         onClick={e => {
           if (data.info.next !== null) {
             setUrl(data.info.next)
             window.scrollTo(0, 0)
            } 
         }}
         >Next</button>
       </div>
    </div>
  )
}

export default App
