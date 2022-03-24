import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CounterContainer from './CounterContainer';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<CounterContainer/>} />
            </Routes>
        </BrowserRouter>
    );
}