// Core
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// Instruments
import { store } from './init/store';
import './theme/init';
// App
import PostsList from './pages/PostsList';

render(
    <Provider store = { store }>
        <PostsList />
    </Provider>,
    document.getElementById('app')
);
