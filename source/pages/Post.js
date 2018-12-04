// Core
import React, { Component } from 'react';
// Components
import { PostView, Spinner } from '../components';
// Styles
import Styles from './styles.m.css';

export default class Post extends Component {
    render () {
        const postId = Number(this.props.location.pathname.split(':')[1]);

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
