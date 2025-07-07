import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { HashRouter, Routes, Route } from 'react-router-dom'
import MovieDetail from './MovieDetail.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/movie/:title" element={<MovieDetail />} />
    </Routes>
  </HashRouter>
)
