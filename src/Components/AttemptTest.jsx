import React, { useState } from "react";
import MCQBlock from "./AttemptTest/MCQBlock";
import SubjectiveBlock from "./AttemptTest/SubjectiveBlock";
import FIBBlock from "./AttemptTest/FIBBlock";
import Header from "./Header";
import Footer from "./Footer";
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
export default function RenderTest(props) {

    //what to put in the test state?

    //need a function to get/generate the test
    //either this, or we get an array of questions as props.questions props.testname props.testDuration

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
            <Footer />
        </div>
    );
}