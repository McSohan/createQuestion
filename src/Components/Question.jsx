
//this component is commmon to all the different types of questions
//this is just the description of a question

import React, { useState } from "react";

function Question(props) {
  const [content, setContent] = useState("");

  function handleChange(event) {
    let c = event.target.value;
    setContent(c);
    props.setQuestion(c);
  }
  return (
    <div>
      <form>
        <textarea
          name="content"
          onChange={handleChange}
          value={content}
          placeholder="Enter a question"
          required
          rows="5"
        />
      </form>
    </div>
  );
}

export default Question;