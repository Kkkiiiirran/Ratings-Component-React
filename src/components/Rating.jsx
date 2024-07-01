import React, { useState } from "react";
import RateNumber from "./RateNumber";


const Rating = ({onRatingSelect}) => {
    const style = {
        width: "100%",
        display : "flex",
        justifyContent: "space-between"
        
        
    }

    const [selectedRating, setSelectedRating] = useState(null)
    onRatingSelect(selectedRating)
    const handleSelect = (rating) => {
        setSelectedRating(rating)
    } 
    return (
        <div style={style}>
            {[1,2,3,4,5].map((rating) => (
                <RateNumber
                    label = {rating}
                    isSelected={selectedRating===rating}
                    onClick={() => handleSelect(rating)}
                
                />
            ))}
        </div>
    )
}

export default Rating;