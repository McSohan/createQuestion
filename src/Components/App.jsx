import React from "react";
import Header from "./Header";
import Question from "./Question";
import QuestionType from "./QuestionType";
import Footer from "./Footer";

import MCQ from "./MCQ/MCQ.jsx";
import FIB from "./FIB/FIB.jsx";
import SubjectiveQuestion from "./Subjective/SubjectiveQuestion.jsx";

function App ()
{
    const[question, setQuestion] = React.useState({
        qBody: "",
        qType: "MCQ",
    });

    function setQType (questionType)
    {
        //refers to the type of question
        setQuestion(prevQuestion => {
            return {
                ...prevQuestion,
                qType: questionType //might have to look into this portion for question type problem
            };
        })
    }

    function setQBody (questionBody)
    {
        //refers to the type of question
        setQuestion(prevQuestion => {
            return {
                ...prevQuestion,
                qBody: questionBody //might have to look into this portion for question body problem
            }
        })
    }

    return (
        <div>
        <Header />
        <Question setQuestion={setQBody}/>
        <QuestionType changeQuestionType={setQType}/>
        {question.qType === "MCQ" &&  <MCQ />}
        {question.qType === "FIB" && <FIB />}
        {question.qType === "Sub" && <SubjectiveQuestion />}
        {/* <SubmitButton /> */}
        <Footer />
        </div>
    );
}

export default App;
