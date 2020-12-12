import React, {useState} from "react";
import Header from "../Header";

function MCQUpdate (props)
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

    function changeCorrectChoice (event)
    {
        let c = event.target.value;
        setQuestion (prevDoc=>{
            return {
                ...prevDoc,
                correctChoice: c
            }
        });
    }

    function goBack (event)
    {
        //redirect to the previous page
        //event.preventDefault();
    }

    function confirmChange (event)
    {
        //change the correct option
        //reevaluate all the answers containing this question with the corrected key

    }

    

    return (
        <div>
            <Header heading="Change Correct Option"/>
            <p>Question: {question.questionBody}</p>
            {/* Render all the options */}
            {question.choices.map((choice,index)=>{
                return 
                    <div>{index}: {choice}</div>
            })}
            <input type="number" value={question.correctChoice} onChange={changeCorrectChoice}/>
            <button onClick={goBack}>BACK</button>
            <button onClick={confirmChange}>CONFIRM CHANGE</button>
        </div>
        
    );

}