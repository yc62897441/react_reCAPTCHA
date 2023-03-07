import React from 'react'
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom'
import HomePage from './containers/HomePage.jsx'
import Login from './containers/Login.jsx'

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </HashRouter>
    )
}

export default App
