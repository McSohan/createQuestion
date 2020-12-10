import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import CreateQuestion  from "./Components/CreateQuestion"
import CreateTestType from "./Components/CreateTestType";
import RenderTest from "./Components/RenderTest";

ReactDOM.render(
  <React.StrictMode>
    <CreateTestType />
  </React.StrictMode>,
  document.getElementById('root')
);
