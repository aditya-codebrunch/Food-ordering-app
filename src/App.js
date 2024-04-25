import React from 'react';
import ReactDOM from 'react-dom/client';
import Content from './components/Content.js';
import About from './components/About.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const AppLayout = () => {
    return (
       <div className='app'>
            {Content()}
       </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path:'/',
        element: <AppLayout/>
    },
    {
        path:'/about',
        element:<About/>
    }
]);


root.render(<RouterProvider router={appRouter}/>);