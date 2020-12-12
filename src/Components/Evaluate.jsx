import React, { useState } from "react";

//this is to verify / evaluate all the subjective answers

export default function Evaluate() {
    const [studentAnswers, setStudentAnswers] = useState(
        []
    );

    let currentDate = new Date().toISOString().slice(0, 10); 

    const [queryData, setQueryData] = useState (
        {
            course: "",
            category: "",
            fromDate: currentDate,
            toDate: currentDate
        }
    );

    function getAnswers ()
    {
        //populate the studentAnswers array with questionId, answerID pairs
    }

    function fromdateUpdate(event)
    {
        let d = event.target.value;
        setQueryData(prevdoc => {
            return {
                ...prevdoc, 
                fromDate: d
            }
        });
    }

    function todateUpdate(event)
    {
        let d = event.target.value;
        setQueryData(prevdoc => {
            return {
                ...prevdoc, 
                toDate: d
            }
        });
    }

    function updateCourse (event)
    {
        let c = event.target.value;
        setQueryData(prevdoc => {
            return {
                ...prevdoc, 
                course: c
            }
        });
    }
    
    function updateCategory (event)
    {
        let c = event.target.value;
        setQueryData(prevdoc => {
            return {
                ...prevdoc, 
                category: c
            }
        });
    }


    return (
        <div>
            <form>
                <label>
                    Course:
                    <select name="course" id="course" value={queryData.course} onChange={updateCourse}>
                        <option value="">--</option>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                        {/* replace this with a dynamically rendered list */}
                    </select>
                </label>
                <label>
                    Category:
                    <select name="course" id="course" value={queryData.category} onChange={updateCategory}>
                        <option value="">--</option>
                        <option value="c1">Volvo</option>
                        <option value="c2">Saab</option>
                        <option value="c3">Mercedes</option>
                        <option value="c4">Audi</option>
                        {/* replace this with a dynamically rendered list */}
                    </select>
                </label>
                <label>
            From Date:
            <input
                        type="date"
                        value={queryData.fromDate}
                        onChange={fromdateUpdate}
                        max={currentDate}
                        required
                    />
                </label>
                <label>
            To Date:
            <input
                        type="date"
                        value={queryData.toDate}
                        onChange={todateUpdate}
                        max={currentDate}
                        required
                    />
                </label>
            
                <button type="submit" onClick={getAnswers}>Get Answers</button>
            </form>
            {/* Render the question answer pairs here */}
            {studentAnswers.map((qa,index)=><SubjectiveQAPair key={index} answerID={qa.answerID} questionID={qa.questionID}/>)}
        </div>
    );
}