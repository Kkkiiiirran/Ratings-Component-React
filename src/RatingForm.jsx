import React, {useState} from "react";
import Image from "./components/Image";
import star from "./images/star.svg"
import Content from "./components/Content";
import Rating from "./components/Rating";
import SubmitButton from "./components/SubmitButton";


const RatingForm = ({onSubmittedValue})=> {

    const style = {
        maxWidth: "20rem",
        backgroundColor: "hsl(213, 19%, 18%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.5rem",
        padding: "30px 20px 40px 20px",
        borderRadius: "20px"

    }
    const [selectedRating, setselectedRating] = useState(null)
    const [submittedValue, setSubmittedValue] = useState(null)
    
    const onSubmit = () => {
        setSubmittedValue(selectedRating)
    }
    onSubmittedValue(submittedValue)
    return(
        <div style={style}>
            <Image image={star} />
            <Content title="How did we do?" content="Please let us know how we did with your support request. All feedback is appreciated 
  to help us improve our offering!"/>
            <Rating onRatingSelect={setselectedRating}/>
            <SubmitButton onSubmit={onSubmit}/>


        </div>
    )
}

export default RatingForm;