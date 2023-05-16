import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Auth from './Auth/Auth.jsx'
import router from './Router/router.jsx'
import {
  RouterProvider
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
      <Auth>
      <RouterProvider router={router} />
      </Auth>
    </React.StrictMode>,
  </div>
)
