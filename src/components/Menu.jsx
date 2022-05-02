import logoRM from "../assets/images/rickAndMortyLogo.png"
import CloseIcon from "../assets/images/closeIcon.webp"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import "../styles/menu.scss"

const Menu = ({ setIsMenuOpen, isMenuOpen}) => {
    const Navigate = useNavigate()
    return ( 
        <div className={`menu ${isMenuOpen ? "show" : ""}`}>
            <button 
            className='toggle'
            onClick={() => { 
                setIsMenuOpen(false)
                window.document.body.style.overflowY = "scroll"
             }}
            >
                <img src={ CloseIcon } alt="" />
                </button>
            <img src={ logoRM } alt="Rick and Morty Logo" />
            <nav>
                <ul>
                    <li onClick={() => {
                        setIsMenuOpen(false)
                        window.document.body.style.overflowY = "scroll"
                        Navigate("/")
                    }}>All Characters</li>
                    <li onClick={() => {
                        setIsMenuOpen(false)
                        window.document.body.style.overflowY = "scroll"
                        Navigate("/all-locations")
                    }}>All Locations</li>
                </ul>
            </nav>
        </div>
     );
}

export default Menu;