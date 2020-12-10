import React, {useState} from "react";


export default function MCQBlock (props)
{

    const [studentAnswer, setStudentAnswer] = useState(
        {
            answerID : "",
            USN : "",
            studentScore : 0,
            AnswerType : "MCQ",
            chosenOption: -1
            //this will be the option selected by the student
        }
    );

    async function changeChoice(event)
    {
        let v = event.target.value;
        //console.log(v);
        setStudentAnswer((prevAnswer) => {
            return {
                ...prevAnswer,
                chosenOption: v
            }
        });
        //console.log(studentAnswer);
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
            {/*Create some sort of a radio button list here*/}
            
            {props.choices.map((choice, index) => {
                return (
                    <div>
                    <input
                        type="radio"
                        name = "choice"
                        id = {index}
                        value = {choice}
                        onChange = {changeChoice}
                        checked = {index == studentAnswer.chosenOption}
                    />
                    <p>{choice}</p>
                    </div>
                );
            })}
        </div>
    );
}