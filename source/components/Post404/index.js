// Core
import React, { Component } from 'react';
import { string } from "prop-types";
// Instruments
import Styles from './styles.m.css';
// Components
export default class Post404 extends Component {
    static propTypes = {
        postId: string.isRequired,
    };

    static defaultProps = {
        postId: undefined,
    };

    render () {
        const {
            postId,
        } = this.props;

        return (
            <section className = { Styles.main }>
                <div>
                    <p>Post {postId ? <span>{postId}</span> : null}  not found</p>
                </div>
            </section>
        );
    }
}
