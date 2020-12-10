import React, {useState} from "react";


//change this subjective block 


export default function SubjectiveBlock (props)
{

    const [studentAnswer, setStudentAnswer] = useState(
        {
            answerID : "",
            USN : "",
            studentScore : 0,
            AnswerType : "Sub",
            answerText : "",
            answerImages : []
            //this will be the option selected by the student
        }
    );

    function changeAnswerText(event)
    {
        let a = event.target.value;
        setStudentAnswer((prevAnswer) => {
            return {
                ...prevAnswer,
                answerText: a
            }
        });
        //call some sort of an add answer function ?
    }
    return (
        //this must return a block where the question is displayed and the student can answer
        //the question
        //assuming that props.question is a fill in the blank question that needs to be rendered

        //props.questionNumber is associated with that question

        <div>
            <h4>{props.questionNumber}</h4>
            <p>{props.questionBody}</p>
            <p>Max score: {props.score}</p><br></br>
            <label>
            Answer:
            <input type="text" name="fibAnswer" value={studentAnswer.answerText} onChange={changeAnswerText}/>
            </label>
        </div>
    );
}