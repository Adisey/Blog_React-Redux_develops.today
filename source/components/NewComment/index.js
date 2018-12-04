// Core
import React, { Component } from 'react';
import { string } from "prop-types";
import { Formik, Form, Field } from 'formik';
import cx from 'classnames';
// Instruments
import Styles from './styles.m.css';
// Components
import { CommentsCount } from '../';

export default class NewComment extends Component {
    static propTypes = {
        postId: string.isRequired,
    };

    static defaultProps = {
        postId: undefined,
    };

    render () {
        const { postId } = this.props;

        return (
            <section className = { Styles.comment }>
                <p>New comment</p>
                <div className = { Styles.body }>
                    {postId}
                </div>
            </section>
        );
    }
}
