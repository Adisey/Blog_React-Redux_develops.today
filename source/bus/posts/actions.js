import { type } from "./types";

// Instruments
// import { api } from '../../REST/';

export const postsActions ={
    // Sync
    fillPosts: (posts) => {
        return {
            type:    type.FILL_POSTS,
            payload: posts,
        };
    },
    createPost: (post) => {
        return {
            type:    type.CREATE_POST,
            payload: post,
        };
    },

    // Async
    fetchPostsAsync: (posts) => {
        return {
            type:    type.FETCH_POSTS_ASYNC,
            payload: posts,
        };
    },
    createPostAsync: (comment) => {
        return {
            type:    type.CREATE_POST_ASYNC,
            payload: comment,
        };

    },
};
