import React, { useState } from "react";

function AddOption (props) {
  const [optionContent, setOption] = useState("");

  function handleChange(event) {
    const option = event.target.value;
    setOption(option);
  }

  function submitOption(event) {
    props.onAdd(optionContent);
    setOption("");
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <textarea
          name="optionForm"
          onChange={handleChange}
          value={optionContent}
          placeholder="Add an option"
          required
          rows="3"
        />
        <button type="submit" form="optionForm" onClick={submitOption}>+</button>
      </form>
    </div>
  );
}

export default AddOption;