import * as React from 'react';
import './style.css';
import SearchForm from './SearchForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main';
import MoneyGraph from './Graph/MoneyGraph';
import TopBar from './TopBar';
import NoPage from './NoPage';

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <h1>IR Group 32</h1>
                <SearchForm />
                <Routes>
                    <Route index path="/" element={<Main />} />
                    <Route path="/graph" element={<MoneyGraph />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
