import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { HomePageAsync } from '../pages/HomePage/HomePage.async';
import { LoanPageAsync } from '../pages/LoanPage/LoanPage.async';
import Navbar from '../widgets/Navbar/Navbar';
import Footer from '../widgets/Footer/Footer';

const App = () => (
    <div className="app">
        <header className="header">
            <Navbar />
        </header>
        <main className="main">
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<HomePageAsync />} />
                    <Route path="/loan" element={<LoanPageAsync />} />
                </Routes>
            </Suspense>
        </main>
        <footer className="footer">
            <Footer />
        </footer>
    </div>
);

export default App;
