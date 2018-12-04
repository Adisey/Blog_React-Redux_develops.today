// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Components
import { PostItem } from '../';
// Actions
import { postsActions } from '../../bus/posts/actions';
// Styles
import Styles from './styles.m.css';

const mapStateToProps = (state) => {
    return {
        posts:    state.posts,
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
export default class Posts extends Component {
    componentDidMount () {
        const { actions } = this.props;
        // В идеале, есмли позволит API сделать ленивую загрузку
        actions.fetchPostsAsync();
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
