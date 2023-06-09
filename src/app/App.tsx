import React, { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/class-names";
import { AboutPage } from "pages/about-page";
import { MainPage } from "pages/main-page";
import "./styles/index.scss";


const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to='/'>Главная</Link>
            <Link to='/about'>Об нас</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/' element={<MainPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;