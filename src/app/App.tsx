import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { HomePageAsync } from '../pages/HomePage/HomePage.async';
import { LoanPageAsync } from '../pages/LoanPage/LoanPage.async';
import { ScoringPageAsync } from '../pages/ScoringPage/ScoringPage.async';
import { NotFoundPageAsync } from '../pages/NotFoundPage/NotFoundPage.async';
import CodePage from '../pages/CodePage/CodePage';
import  PaymentPage from '../pages/PaymentPage/PaymentPage';
import DocumentSignPage from '../pages/DocumentSignPage/DocumentSignPage';

import Navbar from '../widgets/Navbar/Navbar';
import Footer from '../widgets/Footer/Footer';

const App = () => (
    <div className="app">
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="*" element={<NotFoundPageAsync />} />
                <Route path="/" element={<HomePageAsync />} />
                <Route path="/loan" element={<LoanPageAsync />} />
                <Route path="/loan/11" element={<ScoringPageAsync />} />
                <Route path="/loan/:applicationId/document" element={<PaymentPage />} />
                <Route path="/loan/:applicationId/document/sign" element={<DocumentSignPage />} />
                <Route path="/loan/:applicationId/code" element={<CodePage />} /> 
            </Routes>
        </Suspense>
        <Footer />
    </div>
);

export default App;
