import React from "react";

function TestItem (props)
{
    //fetch the test details (short) to be displayed here
    const test= {};

    function onClickFunction(event)
    {
        props.onCLickFunction(props.testID);
        event.preventDefault();

    //     const testType= {};//make query from test table 
    //     const summary={};//make query from the submission table
    //    setTest ({
    //         id: testType.testID,
    //         date: testType.date,
    //         duration: testType.duration,
    //         score: testType.score,
    //         maxScore: summary.maxScore,
    //         minScore:  summary.minScore,
    //         avgScore: summary.averageScore,
    //         attemptedBy: summary.count
    //     });
        
    }
    
    return (
        <div>
            <p>Add details</p>
            <button onClick={onClickFunction}>VIEW</button>
        </div>
    );
}

export default TestItem;