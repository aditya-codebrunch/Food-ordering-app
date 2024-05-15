import React, { Suspense, lazy, useState, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import Content from './components/Content.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Error from './components/Error.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Cart from './components/Cart.js';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu.js';
import UserContext from './utils/UserContext.js';
import { Provider } from 'react-redux';
import appStore from './utils/appStore.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
const Grocery = lazy(() => import('./components/Grocery.js'));

const AppLayout = () => {
    const { loggedInStatus, loggedInUser } = useContext(UserContext);
    const [signedInStatus, setSignedInStatus] = useState(loggedInStatus);
    const [signedInUser, setSignedInUser] = useState(loggedInUser);
    console.log(signedInStatus);
    console.log(setSignedInStatus);
    return (
        <div className='flex flex-col'>
        <Provider store={appStore}>
            <UserContext.Provider value={
                {
                    loggedInStatus: signedInStatus,
                    loggedInUser: signedInUser,
                    setSignedInStatus: setSignedInStatus,
                    setSignedInUser: setSignedInUser
                }
            }>
                <Header/>
                <Outlet />
                <Footer/>
            </UserContext.Provider>
        </Provider>
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
            },
            {
                path:'/cart',
                element:<Cart/>
            }
        ],
        errorElement: <Error />
    }
]);


root.render(<RouterProvider router={appRouter} />);