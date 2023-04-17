import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import HomePage from './containers/HomePage.jsx'
import V3 from './containers/V3.jsx'
import V2Checkbox from './containers/V2Checkbox.jsx'
import V2Invisible from './containers/V2Invisible.jsx'
import Header from './components/Header.jsx'

import './index.css'

function App() {
    return (
        <HashRouter>
            <Header></Header>
            <Routes>
                <Route path="/v3" element={<V3 />} />
                <Route path="/v2Checkbox" element={<V2Checkbox />} />
                <Route path="/v2Invisible" element={<V2Invisible />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </HashRouter>
    )
}

export default App
