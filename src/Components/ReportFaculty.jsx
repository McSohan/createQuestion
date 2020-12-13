import React, {useState} from "react";
import TestSummary from "./FacultyReport/TestSummary";

function ReportFaculty ()
{

    let today = new Date().toISOString().slice(0, 10);
    const [queryData, setQueryData] = useState ({
         semester: 0,
         course: "",
         fromDate: today,
         toDate: today,
         testIDs: []
    });

    function changeSemester (event)
    {
        let s = event.target.value;
        setQueryData((prevDoc)=>{
            return {
                ...prevDoc,
                semester: s
            }
        })
    }

    function updateCourse (event)
    {
        let c = event.target.value;
        setQueryData((prevDoc)=>{
            return {
                ...prevDoc,
                course: c
            }
        })
    }

    function fromDateUpdate (event)
    {
        let d = event.target.value;
        setQueryData((prevDoc)=>{
            return {
                ...prevDoc,
                fromDate: d
            }
        })
    }

    function toDateUpdate (event)
    {
        let d = event.target.value;
        setQueryData((prevDoc)=>{
            return {
                ...prevDoc,
                toDate: d
            }
        })
    }

    function fetchTests (event)
    {
        //here make a request to the database to populate the array with test IDs
        let tIDs=[];//make a request
        event.preventDefault();
        setQueryData((prevdoc) => {
            return {
                ...prevDoc,
                testIDs: tIDs
            }  
        })
    }

    //change the onClick function inside the test summary block 

    return (
        <div>
            <Header heading="Search Test Data"/>
            <form>
                <label>
                Semester: 
                <input type="number" value={queryData.semester} onChange={changeSemester}/>
                </label>
                <label>
                Course: 
                <input type="text" value={queryData.course} onChange={updateCourse} required/>
                </label>
                <label>
                From Date:  
                <input
                        type="date"
                        value={queryData.fromDate}
                        onChange={fromDateUpdate}
                        max={currentDate}
                    />
                </label>
                <label>
                To Date:
                <input
                        type="date"
                        value={queryData.toDate}
                        onChange={toDateUpdate}
                        max={currentDate}
                    />
                </label>
                <button type="submit" onClick={fetchTests}>Fetch tests</button>
            </form>
             {
                 queryData.testIDs.map((testID, index)=>{
                     return <TestSummary key={index} testID={testID}/>
                 })
             }
        </div>
    );
}

export default ReportFaculty;