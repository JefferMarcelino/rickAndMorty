const Character = ({ character }) => {
    return ( 
        <div className="character" key={ character.id }>
            <img src={ character.image } alt="" />
            <div className="info">
                <p>Name: { character.name }</p>
                <p>Gender: { character.gender }</p>
                <p>Origin: { character.origin.name }</p>
                <p>Life Status: { character.status }</p>
            </div>
        </div>
     );
}
 
export default Character;