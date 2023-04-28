import React, { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { AboutPageLazy } from "./pages/AboutPage.lazy";
import { MainPageLazy } from "./pages/MainPage.lazy";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/class-names";
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
                    <Route path='/about' element={<AboutPageLazy />} />
                    <Route path='/' element={<MainPageLazy />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;