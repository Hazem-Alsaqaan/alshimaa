import React, { Fragment} from "react";
import "./Box.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";


const Box = ()=>{
    

    return(
        <Fragment>
                <div className="box">
                    <div className="head-box">
                        <p className="offer">30% Off</p>
                        <div className="heart">
                            <FontAwesomeIcon icon={faHeart}/>
                        </div>
                    </div>
                    <div className="img-box">
                        <FontAwesomeIcon icon={faHandshake}/>
                    </div>
                    <div className="text-box">
                        <p>title: All products is ready</p>
                        <p>imedetaly</p>
                        <p>code: 2206</p>
                        <p>price: 5999 $</p>
                        <p>based in key markets overseas, foreign buyers and ministry 
                        officials, and fellow exporters at our flagship event series
                        for U.S. companies.</p>
                        <h6>Discover Global Markets Business</h6>
                    </div>
                </div>
        </Fragment>
    )
}
export default Box;