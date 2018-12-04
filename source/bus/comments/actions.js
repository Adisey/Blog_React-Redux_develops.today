import { type } from "./types";

// Instruments
// import { api } from '../../REST/';

export const commentsActions ={
    // Sync
    fillComments: (comments) => {
        return {
            type:    type.FILL_COMMENTS,
            payload: comments,
        };
    },
    createComment: (comment) => {
        return {
            type:    type.CREATE_COMMENT,
            payload: comment,
        };
    },

    // Async
    fetchCommentsAsync: (comments) => {
        return {
            type:    type.FETCH_COMMENTS_ASYNC,
            payload: comments,
        };
    },
    createCommentAsync: (comment) => {
        console.log(`Action createCommentAsync -> "comment" -> `, comment);
        return {
            type:    type.CREATE_COMMENT_ASYNC,
            payload: comment,
        };

    },
};
