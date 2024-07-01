import React from "react";

const Content = ({title, content}) => {
    const titleStyle = {
        fontWeight: "600",

        fontSize: "30px",
        marginBottom: "1.5rem"
    }
    return (
        <div>
            <h1 style={titleStyle}>
                {title}
            </h1>
            <p>{content}</p>
        </div>
    )
}

export default Content;