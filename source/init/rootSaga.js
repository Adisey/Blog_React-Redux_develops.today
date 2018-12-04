//Core
import { all, call } from 'redux-saga/effects';

// Watchers
import { watcherPosts } from '../bus/posts/saga/watchers';
import { watcherComments } from '../bus/comments/saga/watchers';

export function* rootSaga () {
    yield all([
        call(watcherPosts),
        call(watcherComments)
    ]);
}
