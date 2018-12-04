// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Instruments
import Styles from './styles.m.css';
// Components
const mapStateToProps = (state) => {
    return {
        comments: state.comments,
    };
};

@connect(
    mapStateToProps,
)
export default class CommentsCount extends Component {
    render () {
        const {
            postId,
            comments,
        } = this.props;
        const сommentsCount = comments.filter((comment) => comment.get('postId')=== postId).size;

        return (
            <section className = { Styles.main }>
                <span>{сommentsCount}</span> <p>{сommentsCount<2 ? 'сomment' : 'сomments'}</p>
            </section>
        );
    }
}
