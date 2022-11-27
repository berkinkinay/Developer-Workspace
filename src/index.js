import React from 'react';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import * as ReactDOMClient from "react-dom/client";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
       <App title="useScroll" />
    </Router>
  </React.StrictMode>
);