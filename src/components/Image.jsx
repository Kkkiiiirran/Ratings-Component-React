import React from "react";

const Image = ({ image }) => {
    const style = {
        width: "15px",
        height: "15px",
        padding:"15px",
        backgroundColor: "hsla(217, 12%, 63%,0.1)",
        borderRadius: "50%",
        alignSelf: "flex-start"
    };

    return (
        <img src={image}  style={style} alt="" />
    );
}

export default Image;
