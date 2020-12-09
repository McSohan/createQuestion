import React from "react";

function MCQOption(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h6>{props.id}</h6>
      <p>{props.content}</p>
      <button onClick={handleClick}>Delete Option</button>
    </div>
  );
}

export default MCQOption;