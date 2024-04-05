import React from 'react';
import ReactDOM from 'react-dom/client';
import Content from './components/Content.js';

const root = ReactDOM.createRoot(document.getElementById('root'));


const AppLayout = () => {
    return (
       <div className='app'>
            {Content()}
       </div>
    )
};

root.render(<AppLayout/>);