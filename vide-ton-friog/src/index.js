import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from "./components/Pages/App";
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './notFound.webp'
import Cart from "./components/Pages/Cart/Cart";
import Profile from "./components/Pages/Profile/Profile";
import About from "./components/Pages/About/About";
import Plates from "./components/Pages/Plates/Plates";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/plates" element={<Plates/>}/>
            <Route
                path="*"
                element={
                    <img
                        src={NotFound}
                        style={{
                            textAlign: 'center',
                            justifyContent: 'center',
                        }}
                    />
                }
            />
        </Routes>
    </BrowserRouter>
)

reportWebVitals()
