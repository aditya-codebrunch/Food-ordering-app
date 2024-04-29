import React from 'react';
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

const AppLayout = () => {
    return (
        <div className='app'>
            <div id="content">
                <div className='content-container'>
                    {Header()}
                    <Outlet />
                    {Footer()}
                </div>
            </div>
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
                path: '/restaurants/:resId',
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    }
]);


root.render(<RouterProvider router={appRouter} />);