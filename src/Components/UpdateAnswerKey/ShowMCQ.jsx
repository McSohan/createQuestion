import React, {useState} from "react";
import Header from "../Header";

export default function MCQUpdate (props)
{
    //props will contain a MCQ questionID

    let q = {};//get the question document based on the questionID

    //replace the useState with useState(q)

    const [question, setQuestion] = useState(
        {
            //some form of NOSQL reference number
            questionID: "",
            questionType : "MCQ",
            //this must not be zero, check - also store in SQL
            score : 0,
            category : "",
            course: "",
            questionBody : "",
            //because this is a subjective question
            choices : [],
            correctChoice : -1
        }
    );

    function changechoice (event)
    {
        //redirect this to MCQUpdate component

        //pass in the questionID as props for that component
    }

    

    return (
        <div>
            <p>Question: {question.questionBody}</p>
            {/* Render all the options */}
            {question.choices.map((choice,index)=>{
                return 
                    <div>{index}: {choice}</div>
            })}
            <p>Correct Choice: {question.correctChoice} </p>
            <button onClick={changeChoice}>Change Choice</button>
        </div>
        
    );

}