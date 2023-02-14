import * as React from 'react';
import './style.css';
import SearchForm from './SearchForm';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './Main';
import MoneyGraph from './Graph/MoneyGraph';

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <h1>IR Group 32</h1>
                <SearchForm />
                <Routes>
                    <Route index path='/' Component={<Main/>} />
                    <Route index path='/Graph' Component={<MoneyGraph/>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
