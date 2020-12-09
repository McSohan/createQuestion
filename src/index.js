import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import RenderThis from "./Components/RenderThis"
import CreateTestType from "./Components/CreateTestType";

ReactDOM.render(
  <React.StrictMode>
    <CreateTestType />
  </React.StrictMode>,
  document.getElementById('root')
);
