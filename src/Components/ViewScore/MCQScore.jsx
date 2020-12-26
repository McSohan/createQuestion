import React, { useState, useEffect } from "react";


export default function FIBBlock(props) {

    //everything required is passed in as props
    //just have to render the things 

    /*props will recieve -
    questionBody,
    array of choices (choices)
    student choice (studentChoice)
    correct choice (correctChoice)
    */

    return (

        <div>
            <p>{props.questionBody}</p>
            <p>Your Choice: {props.studentAnswer}</p>
            <p>Accepted option: {props.correctChoice}</p>
            <div>
                {
                    props.choices.map((choice, index) => {
                        return (
                            <div>
                                {choice}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}