import React, {Suspense, useContext, useState} from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import { AboutPageLazy } from "./pages/AboutPage.lazy";
import { MainPageLazy } from "./pages/MainPage.lazy";
import "./styles/index.scss";
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {UseTheme} from "./theme/useTheme";


const App = () => {
    const {theme, toggleTheme} = UseTheme();

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to='/'>Главная</Link>
            <Link to='/about'>Об нас</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/about' element={<AboutPageLazy />} />
                    <Route path='/' element={<MainPageLazy />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;