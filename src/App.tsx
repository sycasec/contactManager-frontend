import './App.css'

import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';

import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
    const [loggedIn, setLoggedIn] = useState(false)

    return (
        <div className="App">
            <div className='toaster-container'>
                <Toaster position="bottom-center" reverseOrder={false} />
            </div>
            <BrowserRouter>
                <Routes>
                    <Route
                        path='/'
                        element={loggedIn ? <Dashboard /> : <Login />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App

