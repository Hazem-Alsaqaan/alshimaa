import React, { Fragment } from "react";
import photo_9 from "../../images/009.jpg"
import photo_10 from "../../images/10.jpg"
import photo_11 from "../../images/11.jpg"
import photo_12 from "../../images/12.jpg"
import photo_13 from "../../images/13.jpg"
import photo_14 from "../../images/14.jpg"
import photo_15 from "../../images/15.jpg"
import ItemSlider from "./ItemSlider";
import "./Slider.css"

const Slider =()=>{
    let images = [photo_10, photo_11, photo_12, photo_13, photo_14, photo_15]

    return(
        <Fragment>
            <div id="carouselExampleControls" className="carousel slide my-5" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={photo_9} className="d-block w-100" width="300px" height="250px" alt="..."/>
                        </div>
                        {images.map((oneImg, index)=> <ItemSlider key={index} oneImg = {oneImg}/>)}
                        
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
            </div>
        </Fragment>
    )
}
export default Slider;