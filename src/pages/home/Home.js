import React, { Fragment } from "react";
import "./Home.css"
import Landing from "../../components/landing/Landing";
import Slider from "../../components/slider/Slider";
import Box from "../../components/box/Box";
import Title from "../../components/title/Title";
import Paragraph from "../../components/paragraph/Paragraph";

const Home = ()=>{

    return(
        <Fragment>
            <Landing/>
            <div className="home">
                    <Title/>
                    <Paragraph/>
                <div className="container Home-container">
                    <Box/>
                    <Box/>
                    <Box/>
                </div>
                    <Slider/>
            </div>
        </Fragment>
    )
}

export default Home;