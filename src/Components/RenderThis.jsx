import CssBaseline from '@material-ui/core/CssBaseline';
import React, {useState} from "react";

import Header from "./Header";
import Footer from "./Footer";
import QuestionType from "./QuestionType";
import RenderMCQ from "./MCQ/RenderMcq";
import RenderSub from "./Subjective/RenderSub";
import RenderFIB from "./FIB/RenderFib";

function RenderThis ()
{
    const [questionType, setQuestionType] = useState("MCQ");

    function setQType (questionType)
    {
        //refers to the type of question
        setQuestionType(questionType);
    }

    // function setQBody (questionBody)
    // {
    //     //refers to the type of question
    //     setQuestionType(prevQuestion => {
    //         return {
    //             ...prevQuestion,
    //             qBody: questionBody //might have to look into this portion for question body problem
    //         }
    //     })
    // }

    return (
        <CssBaseline>
        <div>
        <Header heading="Create Question"/>
        {/* <Question setQuestion={setQBody}/> */}
        <QuestionType changeQuestionType={setQType}/>
        {questionType === "MCQ" &&  <RenderMCQ />}
        {questionType === "FIB" && <RenderFIB />}
        {questionType === "Sub" && <RenderSub />}
        {/* <SubmitButton /> */}
        <Footer />
        </div>
        </CssBaseline>
    );
}

export default RenderThis;