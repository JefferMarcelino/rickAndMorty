import { useState, useEffect } from 'react'
import Character from '../components/Character'
import Buttons from '../components/Buttons'

const AllCharacters = () => {
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
    
    return (
        <div className="all-characters">
            <h1>All Characters</h1>
            <div className="characters">
                { characterInformations && characterInformations.map(character => {
                    return <Character character={character} />
                })
                }
            </div>

            { data && <Buttons urlInfo={ data.info } setUrl={ setUrl } />}
        </div>
    );
}
 
export default AllCharacters;