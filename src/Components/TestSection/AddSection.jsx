import React, {useState} from "react";


export default function Section(props)
{

    const [sectionDoc, setSectionDoc] = useState(
        {
            type: "MCQ",
            category: "",
            noOfQuestions: 0,
            questionScore: 0
        }
    );

    function updateType(event)
    {
        let t = event.target.value;
        setSectionDoc((prevDoc)=>{
            return {
                ...prevDoc,
                type : t
            }
        }
        );
    }

    function updateCategory(event)
    {
        let t = event.target.value;
        setSectionDoc((prevDoc)=>{
            return {
                ...prevDoc,
                category : t
            }
        }
        );
    }

    function updateNoOfQuestions (event)
    {
        let t = event.target.value;
        setSectionDoc((prevDoc)=>{
            return {
                ...prevDoc,
                noOfQuestions: t
            }
        });
    }

    function updateQuestionScore (event)
    {
        let t = event.target.value;
        setSectionDoc((prevDoc)=>{
            return {
                ...prevDoc,
                questionScore: t
            }
        });
    }

    function addSection(event) {
        let d = sectionDoc;
        props.onAdd(d);
        setSectionDoc({
            type: "MCQ",
            category: "",
            noOfQuestions: 0,
            questionScore: 0
        });
        //do this to reset the things
        event.preventDefault();
      }

    return (
        <form name="sectionform">
            <label>
                Question type:
                <select name="type" id="type" value={sectionDoc.type} onChange={updateType}>
                    <option value="MCQ">Multiple Choice Question</option>
                    <option value="FIB">Fill in the Blank</option>
                    <option value="Sub">Subjective Question</option>
                </select>
            </label>
            <label>
                Category:
                <select name="cars" id="cars" value={sectionDoc.category} onChange={updateCategory}>
                    <option value="">--</option>
                    <option value="dummy1">dummy1</option>
                    <option value="dummy2">dummy2</option>
                    <option value="dummy3">dummy3</option>
                    {/* to add the category options here -- connecting with the database*/}
                </select>
            </label>
            <br />
            <label>
                Number of questions:
                <input type="number" min="0" value={sectionDoc.noOfQuestions} 
                onChange={updateNoOfQuestions} />
            </label>
            <label>
                Value of each question:
                <input type="number" min="0" value={sectionDoc.questionScore} 
                onChange={updateQuestionScore} />
            </label>
            <button type="submit" form="sectionForm" onClick={addSection}>Add section</button>
        </form>
        
    );
}