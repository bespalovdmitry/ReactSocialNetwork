import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import {HashRouter} from 'react-router-dom';
import App from './App';
import {RootType} from './types';
import store from './redux/storeRedux';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const rerender = (state: RootType) => {
    root.render(
        <HashRouter>
            <App
                store={store}
            />
        </HashRouter>
    );
}

rerender(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerender(state)
})



