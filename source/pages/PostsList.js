// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
import { Title, Spinner, Posts } from '../components';
// Actions
// Styles
import Styles from './styles.m.css';

const mapStateToProps = (state) => {
    return {
        ui: state.ui,
    };
};

@connect(
    mapStateToProps,
)
export default class PostsList extends Component {
    render () {
        return (
            <div className = { Styles.main }>
                <Spinner />
                <Title />
                <Posts/>
            </div>
        );
    }
}
