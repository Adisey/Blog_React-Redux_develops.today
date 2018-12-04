// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Actions
import { postsActions } from '../../bus/posts/actions';
import { commentsActions } from '../../bus/comments/actions';
// Instruments
import Styles from './styles.m.css';
// Components
import { CommentsCount, Page404 } from '../';

const mapStateToProps = (state) => {
    return {
        posts:    state.posts,
        comments: state.comments,
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
export default class PostView extends Component {
    componentDidMount () {
        const { actions } = this.props;
        // В идеале, грузить только один пост и его комменты

        actions.fetchPostsAsync();
        actions.fetchCommentsAsync();
    }

    render () {
        const {
            postId,
            posts,
            comments,
        } = this.props;

        const currentPost = posts.filter((post) => post.get('id') === postId);
        const isCurrentPost = Boolean(currentPost.size);
        const currentPostJSX = isCurrentPost
            ? currentPost.map((post) => {
                return (
                    <section className = { Styles.post } key = { post.get('id') }>
                        <div className = { Styles.title }>
                            {post.get('title')}
                        </div>
                        <div className = { Styles.body }>
                            {post.get('body')}
                        </div>
                        <div className = { Styles.commentCount }>
                            <CommentsCount
                                postId = { postId }
                            />
                        </div>
                    </section>
                );
            }) : null;

        return (
            <section className = { Styles.main } >
                {isCurrentPost ? currentPostJSX : <Page404 postId = { postId } />}
            </section>
        );
    }
}
