import React, {useState} from "react";
import SubjectiveQA from "./SubjectiveQA";

//call this with question body, usn number, student score, maximum score, answerID being the key
//Auto evaluated: true/false based on whether a model answer is available

export default function SubjectiveQAPair (props)
{

    // here in the props we get questionID and answerID

    let question = //make a query for the question here
    {
        //some form of NOSQL reference number
        questionType : "Sub",
        //this must not be zero, check - also store in SQL
        course: "",
        score : 0,
        category: "", 
        questionBody : "",
        //because this is a subjective question
        modelAnswerAvailable : false,
        modelAnswer : ""
    };

    let answer = //makea query for the answer here
    {
        answerID : "",
        USN : "",
        studentScore : 0,
        AnswerType : "Sub",
        answerText : "",
        answerImages : []
    }

    function updateScore (event)
    {
        //redirect to SubQA - passing the values of question and answer

        //event.preventDefault();
    }

    return (
        <div className="subjectiveQABlock">
            <h3>Answer ID: {props.answerID}</h3>
            <h6>{question.questionBody}</h6>
            <p>USN: {answer.usn}</p>
            <p>Student score: {answer.studentScore}</p>
            <p>Max Score: {question.score}</p>
            <p>Auto Evaluated: {question.modelAnswerAvailable}</p>
            <button onClick={updateScore}>EVALUATE</button>
        </div>
    );

}