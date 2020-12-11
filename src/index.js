import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import CreateQuestion  from "./Components/CreateQuestion"
import CreateTestType from "./Components/CreateTestType";
import AttemptTest from "./Components/AttemptTest";

ReactDOM.render(
  <React.StrictMode>
    <AttemptTest />
  </React.StrictMode>,
  document.getElementById('root')
);
