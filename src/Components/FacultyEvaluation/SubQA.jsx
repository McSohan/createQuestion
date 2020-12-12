import React, {useState} from "react";
import Header from "../Header";

//the questionID and the answerID have been passed as props
export default function SubQA(props)
{

    const [score, setScore] = useState(answer.studentScore);

    function changeStudentScore (event)
    {
        let s = event.target.value;
        setScore(s);

    }

    function updateScore (event)
    {
        let newScore = score;
        //ask confirmation

        //change the score value of the answer to "newScore"

        //redirect back to the previous page
    }

    function goBack (event)
    {
        //redirect to the previous page
    }

    return (
        <div>
        <Header heading="Modify Student Score"/>
        <h3>{props.question.questionBody}</h3>
        <p>Maximum Score: {props.question.score}</p>
        {props.question.modelAnswerAvailable && <p>{props.question.modelAnswer}</p>}
        <p>USN: {props.answer.USN}</p>
        <div>Student Answer:</div>
        <div>{props.answer.answerText}</div>
        {props.answer.answerImages.map((imageURL, index) =>{

            //fetch the image from the URL and display the image
            return 
                <p>Image displayed here</p>
        })}

        <input type="number" value={score} onChange={changeStudentScore} />
        <button onClick={updateScore}>UPDATE</button>
        <button onClick={goBack}>BACK</button>
        </div>
    );
}