import React, { Suspense } from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import "./index.scss";
import { AboutPageLazy } from "./pages/AboutPage.lazy";
import { MainPageLazy } from "./pages/MainPage.lazy";

const App = () => {
    return (
        <div className="app">
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