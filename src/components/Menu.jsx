import { useNavigate } from "react-router-dom"

import "../styles/menu.css"

import logoRM from "../assets/images/rickAndMortyLogo.png"
import CloseIcon from "../assets/images/closeIcon.webp"

const Menu = ({ setIsMenuOpen, isMenuOpen}) => {
    const Navigate = useNavigate()

    const openMenu = (setIsMenuOpen) => {
        setIsMenuOpen(false)
        window.document.body.style.overflowY = "scroll"
    }

    return ( 
        <div className={`menu ${isMenuOpen ? "show" : ""}`}>
            <button className='toggle'
            onClick={() => { openMenu(setIsMenuOpen) }}>
                <img src={ CloseIcon } alt="" />
            </button>
            <img src={ logoRM } alt="Rick and Morty Logo" />
            <nav>
                <ul>
                    <li onClick={() => {
                        openMenu(setIsMenuOpen)
                        Navigate("/")
                    }}>All Characters</li>

                    <li onClick={() => {
                        openMenu(setIsMenuOpen)
                        Navigate("/all-locations")
                    }}>All Locations</li>
                </ul>
            </nav>
        </div>
     );
}

export default Menu;