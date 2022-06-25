import React from 'react';
import './index.css';
import {store} from './redux/state';
import ReactDOM from 'react-dom/client';
import {HashRouter} from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const rerender = () => {
    root.render(
        <HashRouter>
            <App
                store={store}
            />
        </HashRouter>
    );
}

rerender()
store.subscribe(rerender)



