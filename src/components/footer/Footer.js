import React, { Fragment } from "react"
import Logo from "../logo/Logo";
import "./Footer.css"

const Footer = ()=>{
    return(
        <Fragment>
            <section className="footer container-fluid">
                <div>
                    <Logo/>
                </div>
            </section>
        </Fragment>
    )
}
export default Footer;