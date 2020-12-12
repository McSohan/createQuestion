import React, { useState } from "react";
import Header from "./Header";

export default function UpdateKey() {

    let currentDate = new Date().toISOString().slice(0, 10);

    const [questions, setQuestions] = useState ([]);

    function getQuestions (event)
    {
        //make a query for the questions 
        //update the questions array
        //event.preventDefault();
    }

    const [queryData, setQueryData] = useState (
        {
            course: "",
            category: "",
            type: "MCQ",
            score: 0
        }
    );

    function updateQueryScore(event)
    {
        let s = event.target.score;
        setQueryData(prevDoc=>
            {return {
            ...prevDoc,
            score: s
        }});
    }

    function updateType (event)
    {
        let t = event.target.value;
        setQueryData(prevDoc=>
            {return {
            ...prevDoc,
            type: t
        }});
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
            <Header heading="Update Answer Key" />
            <h2>Select Question to be updated</h2>
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
                    Question Type:
                    <select name="course" id="course" value={queryData.type} onChange={updateType}>
                        <option value="MCQ">Multiple choice Question</option>
                        <option value="FIB">Fill in the blank</option>
                        {/* replace this with a dynamically rendered list */}
                    </select>
                </label>
                <label>
                    <input type="number" value={queryData.score} onChange={updateQueryScore}/>
                </label>
                <button type="submit" onClick={getQuestions}>Get Questions</button>
            </form>
                {/* render a list of questions */}
        </div>
    );
}