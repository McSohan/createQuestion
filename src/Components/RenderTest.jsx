import React, { useState } from "react";
import MCQBlock from "./AttemptTest/MCQBlock";
import SubjectiveBlock from "./AttemptTest/SubjectiveBlock";
import FIBBlock from "./AttemptTest/FIBBlock";
import Header from "./Header";
import dummyTest from "./AttemptTest/dummyTest";


/*
    Given a document containing question ID's - 
    dynamically generated using the constraints of the test
    0. Assign a testID for the test instance of the particular type
    1. Fetch the question document
    2. Render the question as well as an answering space for the question
    3. Add all the answers to the database upon submission - generate answerID
    4. Ensure that the test is mapped to the questionID and the answerID
*/


//use a dummy array of questions to prototype



// {
//     type:
//     questionAnswer: [questions]
// }

// [question]

// questions.map(question, index) => {
//     question.type === "MCQ" && MCQquestionAnswer(question)

// } 


// answers :
// {
//     answerID:
//     answerType: <subjective>
//     answerBody: {
//         studentanswer (FIB, MCQ);

//         (subjective)
//         section:[{
//             sectionType: text/image
//             sectionBody: <text:"answer" /// image : >
//         }]
// }

export default function RenderTest() {

    //what to put in the test state?

    console.log(dummyTest);
    return (
        <div>
            <Header heading="Attempting test" />
            {/* Go through all the questions and render them */}
            {
                dummyTest.map((question, index) => {
                    return <div>
                    {
                        question.questionType === "MCQ" &&
                        <MCQBlock
                            questionNumber={index}
                            key={index}
                            score = {question.score}
                            questionBody={question.questionBody}
                            choices={question.choices}
                        />
                    }
                    {
                        (question.questionType === "FIB") &&
                            <FIBBlock
                                questionNumber={index}
                                key={index}
                                questionBody={question.questionBody}
                            />
                    }
                    {
                        question.questionType === "Sub" &&
                        <SubjectiveBlock
                            questionNumber={index}
                            key={index}
                            questionBody={question.questionBody}
                        />
                    }
                    </div>

                })
            }
        </div>
    );
}


dummyTest.map((question, index) => {
    {/* {question.questionType === "MCQ" &&  
    <MCQBlock 
        questionNumber = {index}
        key = {index}
        questionBody = {question.questionBody}
        choices = {question.choices}
    />} */}
    {
        (question.questionType) &&
            <FIBBlock
                questionNumber={index}
                key={index}
                questionBody={question.questionBody}
            />
    }
    {/* {question.questionType === "Sub" && 
        <SubjectiveBlock 
            questionNumber = {index}
            key = {index}
            questionBody = {question.questionBody}
        />} */}
})