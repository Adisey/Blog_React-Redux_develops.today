// Core
import React, { Component } from 'react';
import { string } from "prop-types";
// Instruments
import Styles from './styles.m.css';
// Components
import { CommentsCount } from '../';

export default class CommentItem extends Component {
    static propTypes = {
        commentId: string.isRequired,
        body:      string.isRequired,
    };

    static defaultProps = {
        commentId: undefined,
        body:      '',
    };

    render () {
        const { commentId, body } = this.props;

        return (
            <section className = { Styles.comment }>
                <div className = { Styles.body }>
                    {body}
                </div>
            </section>
        );
    }
}
