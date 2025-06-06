import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.jsx'

const root = ReactDOM.createRoot(document.querySelector('body'));
root.render(
  <BrowserRouter basename="/Time-Zone/">
    <App/>
  </BrowserRouter>
)