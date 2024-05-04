import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import Content from './components/Content.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Error from './components/Error.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
const Grocery = lazy(()=>import('./components/Grocery.js'));
const AppLayout = () => {
    return (
                <div className='flex flex-col'>
                    {Header()}
                    <Outlet />
                    {Footer()}
                </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Content />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/grocery',
                element: <Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>
            },
            {
                path: '/restaurants/:resId',
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    }
]);


root.render(<RouterProvider router={appRouter} />);