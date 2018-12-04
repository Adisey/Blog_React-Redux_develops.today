// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Actions
import { commentsActions } from '../../bus/comments/actions';
// Instruments
import Styles from './styles.m.css';
import { string } from "prop-types";

const mapStateToProps = (state) => {
    return {
        comments: state.comments,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ ...commentsActions }, dispatch),
    };
};

@connect(
    mapStateToProps,
    mapDispatchToProps
)
export default class CommentsCount extends Component {
    static propTypes = {
        postId: string.isRequired,
    };

    static defaultProps = {
        postId: undefined,
    };

    componentDidMount () {
        const { actions } = this.props;
        // В идеале, грузить только комменты по текущему id

        actions.fetchCommentsAsync();
    }

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
