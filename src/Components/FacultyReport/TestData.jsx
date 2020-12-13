import React , {useState} from "react";
import Header from "../Header";

export default function TestData (props)
{
    //props.testID contains the test ID

    //this is test Type ID and not the submission ID
    
    //use the test Id to populate the test 't'

    let ttype = {};//obtain the nosql test type document - use this to render required info

    let t = {
        maxScore: "",//if required
        maxStudentScore: "",
        averageStudentScore: "",
    };//call function here

    const [particularScore, setParticularScore] = useState ({
        usn: "",
        studentScore: 0
    });

    function fetchUSNScore (event)
    {
        //try to fetch the test score for the specified usn
        //particularScore.usn and testID(test type id) is used to query submissions
        let s = 0;//REPLACE THIS WITH FETCHED STUDENT SCORE

        //if (USN found) 
        setParticularScore(prevDoc => {
            return {
                ...prevDoc,
                studentScore: s
            }
        });
        event.preventDefault();//comment out if not required
    }

    function updateUSN (event)
    {
        let u = event.target.value;
        setParticularScore(prevDoc => {
            return {
                ...prevDoc,
                usn: u
            }
        });
    } 


    return (
        <div>
            <Header heading="Test data"/>
            <p>Test ID : {props.testID}</p>
            <p>Test Date: {}</p>
            <p>Test Duration: {}</p>
            <p>Test maximum obtainable score" {}</p>
            <p>Test Maximum Score: {}</p>
            <p>Test Average Score: {}</p>
            <div>
            <label>
            Fetch score of USN: 
            <input type="text" placeholder="USN" value={particularScore.usn} onChange={updateUSN}/>
            </label>
            <button onClick={fetchUSNScore} >Fetch USN Score</button>
            <p>Fetched Score: {particularScore.studentScore}</p>
            </div>
        </div>
    );
}