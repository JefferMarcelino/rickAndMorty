const Buttons = ({ urlInfo, setUrl }) => {
    return (
        <div className="buttons">
            <button 
            className="prev"
            onClick={() => {
            if (urlInfo.prev !== null) {
                setUrl(urlInfo.prev)
                window.scrollTo(0, 0)
            }
            }}
            >Prev</button>
            
            <button 
            className="next"
            onClick={e => {
            if (urlInfo.next !== null) {
                setUrl(urlInfo.next)
                window.scrollTo(0, 0)
                } 
            }}
            >Next</button>
        </div>
    );
}
 
export default Buttons;