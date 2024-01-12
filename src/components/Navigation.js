import "./Navigation.css"
import logo from "../images/netflix_logo.png"
// import { FaRegBell, GrEdit } from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";
// import netflix_avatar_smile from "../images/netflix-avatar-smile.gif"
// import SearchMoviesButton from "./SearchMoviesButton";
import { useState } from "react"
import links from "./links"

const Navigation = () => {
    const [showMenu, setShowMenu] = useState(false)
    // useEffect(() => {
    //     document.querySelector(".netflix-dropdown-opener").addEventListener("click", () => {
    //         document.querySelector(".user-dropdown-menu").classList.toggle("hide")
    //     })
    // })
    
    return (
        <nav className="wrapper">
            <div className="navigation">
                <div className="nav-header">
                    <img src={logo} alt=""/>
                    <button onClick={() => setShowMenu(!showMenu)}>
                    <GiHamburgerMenu className="hamburger-icon"/>
                    </button>
                </div>
                <div className={`${showMenu ? "nav-list show" : "nav-list hide" }`}>
                        <ul>
                            {
                                links.map((oneLink) => {
                                    const {id, text, url} = oneLink

                                    return <li key={id}>
                                        <a href={url}>{text}</a>
                                        </li>
                                })
                            }
                        </ul>
                    </div>
            </div>
        </nav>
    )
}

export default Navigation