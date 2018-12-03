// Core
import React, { Component } from 'react';
// Instruments
import Styles from './styles.m.css';
// Components

export default class Post extends Component {
    render () {
        const {
            id,
            title,
            body,
        } = this.props;

        return (
            <section className = { Styles.post }>
                <div className = { Styles.title }>
                    {title}
                </div>
                <div className = { Styles.body }>
                    {body}
                </div>
                <div className = { Styles.commentCount }>
                    14
                </div>
            </section>
        );
    }
}
