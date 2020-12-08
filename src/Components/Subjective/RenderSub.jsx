import React , {useState} from "react";
import Question from "../Question";


export default function RenderSub ()
{
    const [subDoc, setsubDoc] = useState(
        {
            //some form of NOSQL reference number
            questionType : "Sub",
            //this must not be zero, check - also store in SQL
            score : 0,
            category: "", 
            questionBody : "",
            //because this is a subjective question
            modelAnswerAvailable : false,
            modelAnswer : ""
        }
    );


    //Form submission function
    function submitQuestion()
    {
        //make a transaction to both SQL and NOSQL databases

        //ensure that the form criteria is met 

        //reset the form for further entry
    }

    //to set the question text
    function setQuestionBody(questionText)
    {
        setsubDoc((prevDoc) => {
            return {
                ...prevDoc,
                questionBody : questionText
            };
        });
    }

    //to update the question category
    function updateCategory(event)
    {
        let c = event.target.value;
        setsubDoc((prevDoc)=>{return {
            ...prevDoc,
            category: c
        }});
    }


    //to update the Score of the question
    function updateScore(event)
    {
        let c = event.target.value;
        setsubDoc((prevDoc)=>{return {
            ...prevDoc,
            score: c
        }});
    }



    return (

        <form onSubmit={submitQuestion}>

            <Question setQuestion = {setQuestionBody}/>
            <textarea 
                name="category"
                onChange={updateCategory}
                value={subDoc.category}
                placeholder="Enter a category"
                required
            />
            Score:
            <input type="number" id="score" name="score" min="0" value = {subDoc.score}
                 onChange = {updateScore}
            />
            {/* add model answer option and textbox here */}
            <button type= "submit">Add Question</button>
        </form>
        
    );

    
}