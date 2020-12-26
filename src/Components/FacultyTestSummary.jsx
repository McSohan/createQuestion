import React, {useState} from "react";
import TestItem from "./TestItem/TestItem";

function FacultyTestSummary ()
{
    /*
    1. query for all the tests based on the query criteria
    2. dislpay the tests 
    3. display specific test details 
    4. allow specific usn score for the given test
    */

   let currentDate = new Date().toISOString().slice(0, 10);

    //query block and test summary block have their ' position: "fixed" '
    const [queryData, setQueryData] = useState ({
        semester: "",
        course: "",
        fromDate: currentDate,
        toDate: currentDate
        });

    const [testList, setTestList] = useState ([]);

    const [test, setTest] = useState ({
        id: "--",
        date: "",
        duration: "",
        score: "",
        maxScore: "",
        minScore: "",
        avgScore: "",
        attemptedBy: ""
    });

    const [usn, setUSN] = useState("");
    const [score, setScore]= useState (0);

    function makeQuery (event)
    {
        event.preventDefaut();//if this doesnt work, change the button type from submit to something else
        //fetch the list of tests by querying and add it to the list 
        const testids=[];
        setTestList(testids);
    }

    function updateTest (props)
    {
        //this will 
        //props.id will have test id
        const testType= {};//make query from test table 
        const summary={};//make query from the submission table
       setTest ({
            id: testType.testID,
            date: testType.date,
            duration: testType.duration,
            score: testType.score,
            maxScore: summary.maxScore,
            minScore:  summary.minScore,
            avgScore: summary.averageScore,
            attemptedBy: summary.count
        });
    }

    function updateSemester (event)
    {
        let t = event.target.value;
        setQueryData ((prevDoc)=>{
            return ({
                ...prevDoc,
                semester: t
            })

        })
    }
    function updateCourse (event)
    {
        let t = event.target.value;
        setQueryData ((prevDoc)=>{
            return ({
                ...prevDoc,
                course: t
            })
        })
    }

    function getUsnScore (event)
    {
        //update the USN here
        //query for the score of the particulat USN
        let t = 0;
        setScore(t);
    }

    function updateUSN (event)
    {
        const t = event.target.value;
        setUSN(t);
    }

    function updateFromDate (event)
    {
        let t = event.target.value;
        setQueryData((prevDoc)=>{
            return (
                {
                    ...prevDoc,
                    fromDate: t
                }
            )
        })
    }

    function updateToDate (event)
    {
        let t = event.target.value;
        setQueryData((prevDoc)=>{
            return (
                {
                    ...prevDoc,
                    toDate: t
                }
            )
        })
    }

    //have to change the styles

    return (
        <div>
            <div className="queryBlock" style={{height: "100px"}}>
            <form>
                <label>
                Semester:
                <input type="number" onChange={updateSemester} value={queryData.semester} />
                </label>
                <label>
                Course:
                <input type="text" onChange={updateCourse} value={queryData.course} />
                </label>
                <label>
                From:
                <input type="date" onChange={updateFromDate} max={queryData.toDate} value={queryData.fromDate} />
                </label>
                <label>
                To:
                <input type="date" onChange={updateToDate} min={queryData.fromDate} max={currentDate} value={queryData.toDate} />
                </label>
                <button type= "submit" onClick= {makeQuery}>Get Tests</button>
            </form>
            </div>
            <div className="testSummaryBlock" style={{height: "20px", margin:"5px"}}>
            {
                test.id != "" ? 
            <div>
            <p>ID: {test.id}</p>
            <p>Date: {test.date}</p>
            <p>Duration: {test.duration}</p>
            <p>Score: {test.score}</p>
            <p>Attempted by: {test.attemptedBy}</p>
            <p>Average Score: {test.avgScore}</p>
            <p>Max Score: {test.maxScore}</p>
            <p>Min Score: {test.minScore}</p>
                        <label>
                            USN:
                        <input type="text" placeholder="Enter USN Here" value={usn} onUpdate={updateUSN} />
                        </label>
                        <button onClick={getUsnScore}>Fetch</button>
                        <p>Score: {score}</p>
            </div>
            : <div>Select a test to get the summary</div>
            }
            
            </div>
            {testList.map ((test, index=>{
                <TestItem testID= {test} key={index} clickFunction={updateTest}/>
            })) }


        </div>
    );
}

export default FacultyTestSummary;