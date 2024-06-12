import React, { Suspense } from 'react';
import {Route, Routes} from 'react-router-dom'
import './styles/index.scss';
import { HomePageAsync } from '../pages/HomePage/HomePage.async';
import { LoanPageAsync } from '../pages/LoanPage/LoanPage.async';


const App = () => {
    return (
        <div className="app">
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