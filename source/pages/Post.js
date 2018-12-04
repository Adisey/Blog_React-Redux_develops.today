// Core
import React, { Component } from 'react';
// Components
import { PostView, Spinner } from '../components';
// Styles
import Styles from './styles.m.css';

export default class Post extends Component {
    render () {
        let postId = this.props.location.pathname.split(':')[1];
        postId = postId ? postId.toString() : postId;

        return (
            <div className = { Styles.main }>
                <Spinner />
                <PostView
                    postId = { postId }
                />
            </div>
        );
    }
}
