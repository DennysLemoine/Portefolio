import React, {lazy, Suspense} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from '../components/header/header';
import Footer from '../components/footer/footer';

import background from '../assets/Background.png'

const Loading = () => <div>Loading...</div>

const Home = lazy(() => import('../pages/home/home'));
const Error = lazy(() => import('../pages/error/error'));

export const RoutesPage = () => {
    return (
        <BrowserRouter>
            <div className='container'>
                <Suspense fallback={<Loading/>}>
                    <Header/>
                    <main>
                        <Routes>
                            <Route exact path='/' element={<Home/>}/>
                            <Route path='*' element={<Error/>}/>
                        </Routes>
                    </main>
                    <Footer/>
                </Suspense>
            </div>
        </BrowserRouter>
    )
};