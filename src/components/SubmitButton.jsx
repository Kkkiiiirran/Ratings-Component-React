import React, {useState} from "react";

const SubmitButton = ({onSubmit}) => {
    const [isHover, setHover] = useState(false);

    const style = {
        
        
        padding: "14px 130px",
        borderRadius: "30px",
        backgroundColor: isHover ? "white": "hsl(25, 97%, 53%)",
        border:"None",
        fontWeight: "700",
        letterSpacing: "1"

    }

    

    
    const MouseEnter = () => {
        setHover(true)
    }

    const MouseLeave = () => {
        setHover(false)
    }

    
    return (
        <form onSubmit = {onSubmit}>
            <button style={style} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}>SUBMIT</button>
        </form>
    )
}

export default SubmitButton;