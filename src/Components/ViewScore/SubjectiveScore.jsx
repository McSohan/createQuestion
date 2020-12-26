import React, {useState, useEffect} from "react";


//change this subjective block 


export default function SubjectiveBlock (props)
{
    /* 
    Question body
    Student answer
    Images (if any) - once incorporated
    Model answer (to be displayed?)
    */

    return (

        <div>
            <div>
                {props.questionBody}<br />
                {props.studentAnswer}<br />
                {props.images.map((image, index)=>{
                    return (
                        <img />
                    )
                })}
            </div>
        </div>
    );
}