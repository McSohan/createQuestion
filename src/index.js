import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CreateQuestion  from "./Components/CreateQuestion"
import CreateTestType from "./Components/CreateTestType";
import AttemptTest from "./Components/AttemptTest";
import TestCard from "./Components/viewSubmission/TestCard";

ReactDOM.render(
  <React.StrictMode> 
  <section className="cards">
    <TestCard
          course="18CS55"
          date="18-12-2020"
          time="12:12:12"
          duration="120"
          score="8"
        />
        <TestCard
          course="18CS55"
          date="18-12-2020"
          time="12:12:12"
          duration="120"
          score="8"
        />
        <TestCard
          course="18CS55"
          date="18-12-2020"
          time="12:12:12"
          duration="120"
          score="8"
        />
        <TestCard
          course="18CS55"
          date="18-12-2020"
          time="12:12:12"
          duration="120"
          score="8"
        />
      </section>
  </React.StrictMode>,
  document.getElementById('root')
);
