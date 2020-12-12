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



    //Form submission function
    function confirmUpdate(event)
    {
        //make a transaction to the database

        //reevaluate all the answers for this question
    }


    //to add answer 
    function addAnswer(newAnswer)
    {
        setfibDoc((prevDoc) => {
            return {
                ...prevDoc,
                acceptedAnswers: [...prevDoc.acceptedAnswers, newAnswer]
            };
        });
    }

    //function to delete answer
    function deleteAnswer(id)
    {
        setfibDoc((prevDoc) => {
            return {
                ...prevDoc,
                acceptedAnswers: prevDoc.acceptedAnswers.filter((item, index) => (index !== id))
            }
          });
    }


    return (
        
        <div>
        
            <Header heading="Change Accepted Answers" />
            <AddAnswer onAdd={addAnswer} />
            {fibDoc.acceptedAnswers.map((AnswerItem, index) => {
                return (
                <AcceptedAnswer
                    key={index}
                    id ={index}
                    content={AnswerItem}
                    onDelete={deleteAnswer}
                />
                );
            })}
            <button type= "submit" onChange={confirmUpdate}>Confirm Update</button>
        </div>
        
    );
}