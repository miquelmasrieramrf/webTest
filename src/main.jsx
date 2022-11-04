import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App'
import './index.css'

const rootElem = document.getElementById('root');

ReactDom
  .createRoot(rootElem)
  .render(<App />);
