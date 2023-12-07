import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import UserContextProvider from './view/context/UserContext.tsx'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import MainAppContextProvider from './view/context/MainAppInitContext.tsx'
import Home from './view/pages/Home.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <MainAppContextProvider>
        <UserContextProvider>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<App />} />
          </Routes>
        </UserContextProvider>
      </MainAppContextProvider>
    </Router>
  </React.StrictMode >,
)
