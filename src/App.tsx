import React, { Suspense } from 'react';
import {Route, Routes, Link} from 'react-router-dom'
import './index.scss';
import { HomePageAsync } from './pages/HomePage/HomePage.async';
import { LoanPageAsync } from './pages/LoanPage/LoanPage.async';

const App = () => {
    return (
        <div className="app">
            <Link to={'/'}>NeoBank</Link>
            <Link to={'/loan'}>Credit card</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<HomePageAsync />}/>
                    <Route path={'/loan'} element={<LoanPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;