// Core
import React, { Component } from 'react';
import { number } from "prop-types";
// Instruments
import Styles from './styles.m.css';
// Components
export default class Page404 extends Component {
    static propTypes = {
        postId: number.isRequired,
    };

    static defaultProps = {
        postId: -7,
    };
    render () {
        const {
            postId,
        } = this.props;

        return (
            <section className = { Styles.main }>
                <div>
                    <p>Post id <span>{postId}</span> not found</p>
                </div>
            </section>
        );
    }
}
