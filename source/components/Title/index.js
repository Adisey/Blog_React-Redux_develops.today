// Core
import React, { Component } from 'react';
// Instruments
// Styles
import Styles from './styles.m.css';
// Components

export default class Title extends Component {

    render () {
        return (
            <section className = { Styles.main }>
                <h1>
                    <span>Blog</span> - develops.today
                </h1>
            </section>
        );
    }
}
