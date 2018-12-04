// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
// Routes
import { book } from './book';
// Pages
import { PostsList, Post } from '../pages';

@hot(module)
@withRouter
export default class App extends Component {

    render () {

        return (
            <Switch>
                <Route component = { PostsList } path = { book.postsList } />
                <Route component = { Post } path = { book.post } />
                <Redirect to = { book.postsList } />
            </Switch>
        );
    }
}
