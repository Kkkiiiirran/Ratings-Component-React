import React from "react";
import phoneimage from "./images/thankyou.svg";
import Content from "./components/Content";


const Output = ({submittedValue}) => {
    const style = {
        maxWidth: "20rem",
        backgroundColor: "hsl(213, 19%, 18%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.5rem",
        padding: "30px 20px 40px 20px",
        borderRadius: "20px",
        textAlign: "center"

    }

    const styleH1 = {
        padding: "10px 14px 8px 14px",
        color: "hsl(25, 97%, 53%)",
        borderRadius: "20px",
        backgroundColor: "hsla(217, 12%, 63%,0.1)"
    }

    
    return (
        <div style={style}>
            <img src={phoneimage} alt="" />
            <h1 style={styleH1}>You selected {submittedValue} out of 5</h1>
            <Content title="Thank you!" content="We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!"/>
        </div>
      
    )
}

export default Output;