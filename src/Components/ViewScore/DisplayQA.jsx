import React from "react";
import FIBScore from "./FIBScore";
import MCQScore from "./MCQScore";
import SubjectiveScore from "./SubjectiveScore";


//this block displays a single question answer pair 


export default function DisplayQA (props)
{

    //assume that the props obtains questionID and answerID
    //using them, we fetch the corresponding documents from firebase
    //make query
    const question={};
    const answer= {};
    /*
    max score for the question (maxScore)
    obtained score (studentScore)
    */
    
    return (
        <div>
            {props.questionNumber}<br />
            Score: {question.score}<br /> 
            Student Score: {answer.score}<br />    
            {/* pass in the required parameters         */}
            {
                (question.questionType === "MCQ") &&
                <MCQScore
                    score={question.score}
                    questionBody={question.questionBody}
                    choices={question.choices}
                />
            }
            {
                (question.questionType === "FIB") &&
                <FIBScore
                    questionBody={question.questionBody}
                />
            }
            {
                (question.questionType === "Sub") &&
                <SubjectiveScore
                    key={index}
                    questionBody={question.questionBody}
                />
            }
        </div>
    );
}