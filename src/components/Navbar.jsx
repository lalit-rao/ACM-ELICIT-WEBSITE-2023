import {useRef, useState} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import "../components/Navbar.css";
import {logo} from "../assets/images/index.js";


function Navbar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    const [scrollOpacity, setScrollOpacity] = useState(0)

    const maxScroll = 500
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const opacity = scrollY / maxScroll
        // console.log(opacity)

        setScrollOpacity(opacity)
    })


    return (

        <header style={{backgroundColor: `rgba(0 0 0 / ${scrollOpacity})`,}}>

            <a href="/">
                <img className="logoContainer"
                     src={logo}
                     alt="logo"
                />
            </a>
            <nav ref={navRef}>
                <a className="hover-underline-animation" href="/">Home</a>
                <a className="hover-underline-animation" href="/#/gallery">Gallery</a>
                <a className="hover-underline-animation" href="/#/upcoming-events">Events</a>
                <a className="hover-underline-animation" href="/#/team">Team</a>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button
                className="nav-btn"
                onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>


    );

}

export default Navbar;
