import React, { useState } from "react";

function AddAnswer (props) {
  const [answer, setAnswer] = useState("");

  function handleChange(event) {
    const answer = event.target.value;
    setAnswer(answer);
  }

  function submitAnswer(event) {
    props.onAdd(answer);
    setAnswer("");
    event.preventDefault();
    //to prevent the page from reloading
  }

  return (
    <div>
      <form>
        <textarea
          name="answer"
          onChange={handleChange}
          value={answer}
          placeholder="Add an accepted answer"
          rows="2"
        />
        <button onClick={submitAnswer}>+</button>
      </form>
    </div>
  );
}

export default AddAnswer;