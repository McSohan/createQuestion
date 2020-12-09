import React , {useState} from "react";
import Question from "../Question";
import MCQOption from "./MCQOption";
import AddOption from "./AddOption";

export default function RenderMcq ()
{

    const [mcqDoc, setmcqDoc] = useState(
        {
            //some form of NOSQL reference number
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
        setmcqDoc((prevDoc) => {
            return {
                ...prevDoc,
                questionBody : questionText
            };
        });
    }

    //to add an option to the MCQ options list
    function addOption(newOption)
    {
        setmcqDoc((prevDoc) => {
            return {
                ...prevDoc,
                choices: [...prevDoc.choices, newOption]
            };
        });
    }

    //to remove an option from the list of choices
    function deleteOption(id)
    {
        setmcqDoc((prevDoc) => {
            return {
                ...prevDoc,
                choices: prevDoc.choices.filter((item, index) => (index !== id))
            }
          });
    }

    //to update the question category
    function updateCategory(event)
    {
        let c = event.target.value;
        setmcqDoc((prevDoc)=>{return {
            ...prevDoc,
            category: c
        }});
    }

    //to select the course
    function updateCourse (event)
    {
        let c = event.target.value;
        setmcqDoc((prevDoc)=>{return {
            ...prevDoc,
            course: c
        }});
    }


    //to update the Score of the question
    function updateScore(event)
    {
        let c = event.target.value;
        setmcqDoc((prevDoc)=>{return {
            ...prevDoc,
            score: c
        }});
    }

    //to update the Score of the question
    function updateCorrectChoice(event)
    {
        let c = event.target.value;
        setmcqDoc((prevDoc)=>{return {
            ...prevDoc,
            correctChoice: c
        }});
    }

    return (

        <form onSubmit={submitQuestion}>
            <Question setQuestion = {setQuestionBody}/>
            <label>
            Course:
            <select name="cars" id="cars" value={mcqDoc.course} onChange={updateCourse}>
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
                value={mcqDoc.category}
                placeholder="Enter a category"
                required
            />
            Score:
            <input type="number" id="score" name="score" min="0" value = {mcqDoc.score}
                 onChange = {updateScore}
                />
            <AddOption onAdd={addOption} />
            {mcqDoc.choices.map((optionItem, index) => {
                return (
                    <MCQOption
                        key={index}
                        id={index}
                        content={optionItem}
                        onDelete={deleteOption}
                    />
                );
            })}
            <label>
            Correct Choice:
            <input type="number" id="correctChoice" name="correctChoice" min="0" value = {mcqDoc.correctChoice}
                 onChange = {updateCorrectChoice}
                />
            </label>
            <button type= "submit">Add Question</button>
        </form>
        
    );

    
}