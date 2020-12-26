import React, { useState, useRef } from "react";
import DisplayQA from "../ViewScore/DisplayQA";


export default function RenderTest(props) {

    //props has testID
    //using that, make a query to fetch the following details 

    const qaPair = [];//this will contain {questionID, answerID}
    const testDetails =  {};//will contain test details as fetched from the sql databse
    //stuff like student score, max score (obtained by test type), duration , date
    //either obtained from sql here or passed in as props 


    //call function here to populate questionId answerID pair array 

    const averageScore = 0;
    const maxStudentScore = 0;

    //make a query and obtain these details - this will be the "report"



    console.log(dummyTest);
    return (
        <div>
            <Header heading="Test Summary" />
            <div>
                Date: {}
                Duration: {}
                Max possible score: {}
                Student Score: {}
                Average student score: {}
                Maximum student score: {}
            </div>
            {/* Go through all the questions and render them */}
            {
                qaPair.map((qa, index) => {
                    return <div>
                    <DisplayQA 
                        key={index}
                        questionNumber = {index}
                        questionID = {qa.questionID}
                        answerID = {qa.answerID}
                    />
                    </div>

                })
            }
            <button onClick={redirection} >Something </button>
            <Footer />
        </div>
    );
}