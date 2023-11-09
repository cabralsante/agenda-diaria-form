import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './globalStyle.js'
import Home from './pages/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Home />
  </React.StrictMode>,
)
