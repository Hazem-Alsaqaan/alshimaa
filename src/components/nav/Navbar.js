import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBarsStaggered} from "@fortawesome/free-solid-svg-icons"
import Logo from "../logo/Logo";

const Navbar = ()=>{
    const [toggle, setToggle] = useState();

    const handleNav = ()=>{
        setToggle(!toggle)
    }
    const show = toggle ? "show" : "";

    return(
        <Fragment>
            <div className="main-header">
                <div className="container header-container">
                    <nav>
                        <Logo/>
                        <div className={`nav-items ${show}`}>
                            <ul>
                                <Link to="/"><li>Home</li></Link>
                                <Link to="/About"><li>About</li></Link>
                                <Link to="/contact"><li>contact</li></Link>
                                <Link to="/Complaints"><li>Complaints</li></Link>
                            </ul>
                        </div>
                        <div className="navBars">
                            <FontAwesomeIcon icon={faBarsStaggered}
                            onClick = {handleNav}/>
                        </div>
                    </nav>
                </div>
            </div>
        </Fragment>
    )
}

export default Navbar;