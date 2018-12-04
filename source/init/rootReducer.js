// Core
import { combineReducers } from 'redux';
// Reducers
import { postsReducer as posts } from '../bus/posts/reducer';
import { commentsReducer as comments } from '../bus/comments/reducer';
import { uiReducer as ui } from '../bus/ui/reducer';

export const rootReducer = combineReducers({
    posts,
    comments,
    ui,
});
