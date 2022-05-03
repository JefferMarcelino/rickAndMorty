import { useState, useEffect } from 'react'
import Location from '../components/Location'
import Buttons from '../components/Buttons'

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

            { data && <Buttons urlInfo={ data.info } setUrl={ setUrl } />}
        </div>
    );
}
 
export default AllLocations;