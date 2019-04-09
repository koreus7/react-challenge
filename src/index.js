import React from "react";
import ReactDOM from "react-dom";

import App from './App';
const hook = document.getElementById("react-hook");
hook ? ReactDOM.render(<App />, hook) : false;