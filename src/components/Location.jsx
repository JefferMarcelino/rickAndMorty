import "../styles/location.css"

const Location = ({ location }) => {
    return ( 
        <div className="location" key={ location.id }>
            <div className="info">
                <p>Name: { location.name }</p>
                <p>Type: { location.type }</p>
                <p>Dimension: { location.dimension }</p>
            </div>
        </div>
     );
}
 
export default Location;