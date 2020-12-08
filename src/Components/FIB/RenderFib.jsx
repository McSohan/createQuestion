import React , {useState} from "react";
import Question from "../Question";
import AddAnswer from "./AddAnswer";
import AcceptedAnswer from "./AcceptedAnswer";


export default function RenderFib ()
{
    const [fibDoc, setfibDoc] = useState(
        {
            //some form of NOSQL reference number
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
    function submitQuestion()
    {
        //make a transaction to both SQL and NOSQL databases

        //ensure that the form criteria is met 

        //reset the form for further entry
    }

    //this is to set the body of a question
    function setQuestionBody(questionText)
    {
        setfibDoc((prevDoc) => {
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
        setfibDoc((prevDoc)=>{return {
            ...prevDoc,
            category: c
        }});
    }


    //to update the Score of the question
    function updateScore(event)
    {
        let c = event.target.value;
        setfibDoc((prevDoc)=>{return {
            ...prevDoc,
            score: c
        }});
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

        <form onSubmit={submitQuestion}>
            <Question setQuestion = {setQuestionBody}/>
            <textarea 
                name="category"
                onChange={updateCategory}
                value={fibDoc.category}
                placeholder="Enter a category"
                required
            />
            Score:
            <input type="number" id="score" name="score" min="0" value = {fibDoc.score}
                 onChange = {updateScore}
                />
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
            <button type= "submit">Add Question</button>
        </form>
        
    );
}


