// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Components
import { PostItem } from '../';
// Actions
import { postsActions } from '../../bus/posts/actions';
import { commentsActions } from '../../bus/comments/actions';
// Styles
import Styles from './styles.m.css';

const mapStateToProps = (state) => {
    return {
        posts:    state.posts,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ ...postsActions, ...commentsActions }, dispatch),
    };
};

@connect(
    mapStateToProps,
    mapDispatchToProps
)
export default class Posts extends Component {
    componentDidMount () {
        const { actions } = this.props;
        // В идеале, есмли позволит API сделать ленивую загрузку
        actions.fetchPostsAsync();
        // В идеале, есмли позволит API загружать только комментарии для отображоннвх постов по postId
        actions.fetchCommentsAsync();
    }
    render () {
        const { posts } = this.props;

        const postsJSX = posts.map((post) => {
            return (
                <div key = { post.get('id') }>
                    <PostItem
                        body = { post.get('body') }
                        id = { post.get('id') }
                        title = { post.get('title') }
                    />
                </div>
            );
        });

        return (
            <div className = { Styles.main }>
                {postsJSX}
            </div>
        );
    }
}
