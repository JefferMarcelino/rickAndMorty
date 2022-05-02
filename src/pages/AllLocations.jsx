import { useState, useEffect } from 'react'
import Location from '../components/Location'

const AllLocations = () => {
    const [ locationInformations, setLocationInformations] = useState()
    const [ data, setData ] = useState()
    const [ url, setUrl ] = useState("https://rickandmortyapi.com/api/location/")

    useEffect(() => {
        fetch(`${url}`)
        .then(response => response.json())
        .then(data => {
          setLocationInformations(data.results)
          setData(data)
        })
      }, [url])
    
    useEffect(() => {
        console.log(locationInformations)
    }, [locationInformations])

    
    return (
        <div className="all-locations">
            <h1>All Locations</h1>
            <div className="locations">
                { locationInformations && locationInformations.map(location => {
                    console.log(location)
                    return <Location location={location} key={ location.id } />
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
    );
}
 
export default AllLocations;