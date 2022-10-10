import React, { Fragment } from "react";
import "./ItemSlider.css"


const ItemSlider = ({oneImg})=>{


    return(
        <Fragment>
                <div className="carousel-item">
                        <img src={oneImg} className="d-block w-100" width="600px" height="350px" alt="..."/>
                </div>
        </Fragment>
    )
}

export default ItemSlider;