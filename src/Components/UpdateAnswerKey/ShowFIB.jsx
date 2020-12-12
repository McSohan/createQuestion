import React, {useState} from "react";
import Header from "../Header";
import AddAnswer from "../FIB/AddAnswer";
import AcceptedAnswer from "../FIB/AcceptedAnswer";

export default function FIBUpdate (props)
{

    //query the question based on the props.questionID passed to the props.
    //change useState to useState ({***queried question document***})
    const [fibDoc, setfibDoc] = useState(
        {
            //some form of NOSQL reference number
            questionID: "",
            questionType : "FIB",
            //this must not be zero, check - also store in SQL
            score : 0,
            category: "",
            questionBody : "",
            //because this is a fill in the blanks question
            acceptedAnswers : [],
        }
    );

    function updateAcceptedAnswers(event)
    {
        //use the questionID to call FIBUpdate 
        //redirect
        //event.preventDefault();
    }


    return (
        
        <div>
            <p>Question: {fibDoc.questionBody}</p>
            <div> Accepted Answers</div>
            {fibDoc.acceptedAnswers.map((AnswerItem, index) => {
                return (
                    <div>{AnswerItem}</div>
                );
            })}
            <button onChange={updateAcceptedAnswers}>Change Answers</button>
        </div>
        
    );
}