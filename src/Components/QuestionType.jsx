import React from "react";

/*can create these options as a separate component later*/

//this is the part that I have to change to hold the question state

export default function QuestionType(props) {
  const [questionType, setQuestionType] = React.useState("MCQ");

  function updateChoice(event) {
    const qType = event.target.value;
    setQuestionType(qType);
    props.changeQuestionType (qType);
  }

  return (
    <div className="note">
      <input
        type="radio"
        value="MCQ"
        onChange={updateChoice}
        checked={questionType === "MCQ"}
      />
      MCQ
      <input
        type="radio"
        value="FIB"
        onChange={updateChoice}
        checked={questionType === "FIB"}
      />
      Fill in the Blanks
      <input
        type="radio"
        value="Sub"
        onChange={updateChoice}
        checked={questionType === "Sub"}
      />
      Subjective
    </div>
  );
}