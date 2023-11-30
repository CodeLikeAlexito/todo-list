import React from "react";
import Button from ".././components/Button";

const Card = () => {
    return(
        <div>
            <div>
                <label>User: </label>
                <input></input>
            </div>
            <div>
                <label>Age(Years): </label>
                <input></input>
            </div>
            <div>
                <Button />
            </div>
        </div>
    )
}

export default Card;