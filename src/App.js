import React from 'react'
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom'
import HomePage from './containers/HomePage.jsx'
import V3 from './containers/V3.jsx'
import Login from './containers/Login.jsx'
import Header from './components/Header.jsx'

import './index.css'

function App() {
    return (
        <V3></V3>
        // <HashRouter>
        //     <Header></Header>
        //     <Routes>
        //         <Route path="/login" element={<Login />} />
        //         <Route path="/v3" element={<V3 />} />
        //         <Route path="/" element={<HomePage />} />
        //     </Routes>
        // </HashRouter>
    )
}

export default App
