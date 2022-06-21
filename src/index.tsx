import React from 'react';
import './index.css';
import {addPost, store, subscribe} from './redux/state';
import ReactDOM from 'react-dom/client';
import {StorePropsType} from './types';
import {HashRouter} from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const rerender = (store: StorePropsType) => {
    root.render(
        <HashRouter>
            <App
                store={store}
                addPost={addPost}
            />
        </HashRouter>
    );
}

rerender(store)
subscribe(rerender)



