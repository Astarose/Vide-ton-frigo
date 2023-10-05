import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from "./components/Pages/App";
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from "./components/Pages/HomePage";
import NotFound from './notFound.webp'
import Cart from "./components/Pages/Cart/Cart";
import Favorites from "./components/Pages/Favorites/Favorites";
import Profile from "./components/Pages/Profile/Profile";
import About from "./components/Pages/About/About";
import Plates from "./components/Pages/Plates/Plates";
import Connexion from "./components/Authentification/Connexion/connexion";
import Inscription from "./components/Authentification/Inscription/inscription";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/plates" element={<Plates/>}/>
            <Route path="/connexion" element={<Connexion/>}/>
            <Route path="/inscription" element={<Inscription/>}/>
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
