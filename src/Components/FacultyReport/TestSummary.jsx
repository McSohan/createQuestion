import react, {useState} from "react";

export default function TestSummary (props)
{
    //featch the test date and total score
    let t = {};

    function viewTestData(event)
    {
        //redirect to the test data page passing in testID as testID={testID of this document}
        event.preventDefault();//remove if not required
    }

    return (
        <div>
            <p>Test ID: {props.testID}</p>
            <p>Test Date: {t.date}</p>
            <p>Total Score: {t.score}</p>
            <button onClick={viewTestData}>VIEW</button>
        </div>
    );
}