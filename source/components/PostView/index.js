// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { string } from "prop-types";
// Actions
import { postsActions } from '../../bus/posts/actions';
// Instruments
import Styles from './styles.m.css';
// Components
import { CommentsCount, Post404, Comments } from '../';

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ ...postsActions }, dispatch),
    };
};

@connect(
    mapStateToProps,
    mapDispatchToProps
)
export default class PostView extends Component {
    static propTypes = {
        postId: string.isRequired,
    };

    static defaultProps = {
        postId: undefined,
    };

    componentDidMount () {
        const { actions } = this.props;
        // В идеале, грузить только один пост

        actions.fetchPostsAsync();
    }

    render () {
        const {
            postId,
            posts,
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
                {isCurrentPost ? currentPostJSX : <Post404 postId = { postId } />}
                {isCurrentPost ? <Comments postId = { postId } /> : null}

            </section>
        );
    }
}
