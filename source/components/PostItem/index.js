// Core
import React, { Component } from 'react';
// Instruments
import Styles from './styles.m.css';
// Components
import { CommentsCount } from '../';

export default class PostItem extends Component {
    render () {
        const {
            id,
            title,
            body,
        } = this.props;

        return (
            <section className = { Styles.post }>
                <a href = { `/posts/:${id}` } title = { title }>
                    <div className = { Styles.title }>
                        {title}
                    </div>
                    <div className = { Styles.body }>
                        {body}
                    </div>
                </a>
                <div className = { Styles.commentCount }>
                    <CommentsCount
                        postId = { id }
                    />
                </div>
            </section>
        );
    }
}
