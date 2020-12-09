import React , {useState} from "react";
import Question from "../Question";


export default function RenderSub ()
{
    const [subDoc, setsubDoc] = useState(
        {
            //some form of NOSQL reference number
            questionType : "Sub",
            //this must not be zero, check - also store in SQL
            course: "",
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

        //if model answer available is set as false, clear model answer before storing the question

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

    //to select the course
    function updateCourse (event)
    {
        let c = event.target.value;
        setsubDoc((prevDoc)=>{return {
            ...prevDoc,
            course: c
        }});
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

    function toggleModelAnswer(event)
    {
        setsubDoc((prevDoc)=>{
            return {
                ...prevDoc,
                modelAnswerAvailable : !(prevDoc.modelAnswerAvailable)
            }
        });
    }

    function updateModelAnswer (event)
    {
        const currentvalue = event.target.value;
        setsubDoc((prevDoc)=>{
            return {
                ...prevDoc,
                modelAnswer : currentvalue
            }
        });
    }

    return (

        <form onSubmit={submitQuestion}>

            <Question setQuestion = {setQuestionBody}/>
            <label>
            Course:
            <select name="cars" id="cars" value={subDoc.course} onChange={updateCourse}>
                <option value="">--</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
                {/* replace this with a dynamically rendered list */}
            </select>
            </label>
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
            <label>
            Provide Model Answer
            <input type="checkbox" checked={subDoc.modelAnswerAvailable} onChange={toggleModelAnswer}/>
            </label>
            {subDoc.modelAnswerAvailable && (
                <textarea 
                    name="modelAnswer"
                    onChange={updateModelAnswer}
                    value={subDoc.modelAnswer}
                    placeholder="Enter Model Answer"
                    required //this might give a propblem, verify 
                />
            )}
            <button type= "submit">Add Question</button>
        </form>
        
    );

    
}