import React, { Fragment } from "react";
import "./Landing.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBattleNet} from "@fortawesome/free-brands-svg-icons"
import {faArrowUpRightDots} from "@fortawesome/free-solid-svg-icons"

const Landing =()=>{
    return(
        <Fragment>
            <div className="main-landing">
                <div className="container container-landing">
                    <div className="landing">
                        <div className="landing-text">
                            <h1>alshimaa products</h1>
                            <h5>Welcome We export high quality fresh products from Egypt to all over the world</h5>
                            <FontAwesomeIcon className="arrowDots" icon={faArrowUpRightDots}/>
                        </div>
                        <div className="landing-shaps">
                            <div className="dark-box">
                                <FontAwesomeIcon icon={faBattleNet}/>
                                <p>hello</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Landing;