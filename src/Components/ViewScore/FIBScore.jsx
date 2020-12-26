import React from "react";


export default function FIBScore (props)
{

    //everything required is passed in as props
    //just have to render the things 

    /*props will recieve -
    questionBody,
    array of accepted answers (acceptedAnswers)
    student asnwer (studentAnswer)
    max score for the question (maxScore)
    obtained score (studentScore)
    */ 

    return (

        <div>
            <p>{props.questionBody}</p>
            <p>Your Answer: {props.studentAnswer}</p>
            <div>
            Accepted answers: 
            {
                props.acceptedAnswers.map((answer, index)=> {
                    return (
                        <div>
                            {answer}
                        </div>
                )
                })
            }
            </div>
        </div>
    );
}