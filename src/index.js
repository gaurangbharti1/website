import React from "react";
import ReactDOM from "react-dom";
import Main from "./main";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Favicon from 'react-favicon';
import icon from './assets/images/favicon.ico';


ReactDOM.render(
  <div>
    <Favicon url={icon} />
    <Main/>
  </div>, 
  document.getElementById("root")
);