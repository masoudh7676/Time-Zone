import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

const root = ReactDOM.createRoot(document.querySelector('body'));
root.render(
  <HashRouter basename="/Time-Zone/">
    <App/>
  </HashRouter>
)
