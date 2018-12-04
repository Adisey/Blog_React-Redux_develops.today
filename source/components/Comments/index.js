// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { string } from "prop-types";
// Components
import { CommentItem, NewComment } from '../';
// Actions
import { commentsActions } from '../../bus/comments/actions';
// Styles
import Styles from './styles.m.css';

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
export default class Posts extends Component {
    static propTypes = {
        postId: string.isRequired,
    };

    static defaultProps = {
        postId: undefined,
    };

    componentDidMount () {
        const { actions } = this.props;
        // В идеале, если позволит API загружать только комментарии для отображоннвх постов по postId

        actions.fetchCommentsAsync();
    }
    render () {
        const { comments, postId } = this.props;

        const commentsJSX = comments
            .filter((comment) => comment.get('postId')===postId)
            .map((comment) => {
                return (
                    <div key = { comment.get('id') }>
                        <CommentItem
                            body = { comment.get('body') }
                            commentId = { comment.get('id') }
                        />
                    </div>
                );
            });

        return (
            <div className = { Styles.main }>
                <div className = { Styles.title }>
                    Comments
                </div>
                <NewComment postId = { postId } />
                {commentsJSX}
            </div>
        );
    }
}
