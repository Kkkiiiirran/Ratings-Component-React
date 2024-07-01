import React, { useState } from "react";

const RateNumber = ({label, onClick, isSelected}) => {

    const [isHover, sethover] = useState(null)
    const MouseEnter = () => {
        sethover(true)
    }
    const MouseLeave =()=> {
        sethover(false)
    }

    const style = {
        border: "None",
        borderRadius: "50%",
        padding: "15px 20px",
        backgroundColor: isSelected ? "white": !isHover ? "hsla(217, 12%, 63%,0.1)": "hsl(25, 97%, 53%)",
        color:isSelected ? "black" : "white"
    }


    return(

        <button style={style} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} onClick={onClick}>{label}</button>
    )
}

export default RateNumber;