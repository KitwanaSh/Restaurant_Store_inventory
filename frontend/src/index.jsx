import React from "react";
import ReactDOM from "react-dom";
import { ContextProvider } from "./contexts/ContextProvider";

import './index.css'
import App from "./App";


ReactDOM.createRoot(document.getElementById('root')).render(
    <ContextProvider>
      <App />
    </ContextProvider>,
)