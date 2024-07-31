import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { HomePageAsync } from '../pages/HomePage/HomePage.async';
import { LoanPageAsync } from '../pages/LoanPage/LoanPage.async';
import { NotFoundPageAsync } from '../pages/NotFoundPage/NotFoundPage.async';
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
                {/* <Route path="/loan/:applicationId" element={<ScoringPage />} /> */}
                {/* <Route path="/loan/:applicationId/document" element={<Payment />} />
                <Route path="/loan/:applicationId/document/sign" element={<DocumentSigning />} />
                <Route path="/loan/:applicationId/code" element={<CodePage />} /> */}
            </Routes>
        </Suspense>
        <Footer />
    </div>
);

export default App;
