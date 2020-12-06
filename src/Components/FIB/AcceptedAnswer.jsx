import React from "react";

function AcceptedAnswer(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.id}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>Delete Answer</button>
    </div>
  );
}

export default AcceptedAnswer;