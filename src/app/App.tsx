import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { HomePageAsync } from '../pages/HomePage/HomePage.async';
import { LoanPageAsync } from '../pages/LoanPage/LoanPage.async';
import Navbar from '../widgets/Navbar/Navbar';
import Footer from '../widgets/Footer/Footer';

const App = () => (
    <div className="app">
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<HomePageAsync />} />
                <Route path="/loan" element={<LoanPageAsync />} />
            </Routes>
        </Suspense>
        <Footer />
    </div>
);

export default App;
