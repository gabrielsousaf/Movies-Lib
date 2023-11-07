import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, } from 'react-router-dom'
import RoutesConfig from './routes/Routes'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <RoutesConfig />
    </BrowserRouter>
  </React.StrictMode>,
)