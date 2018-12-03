//Core
import { all, call } from 'redux-saga/effects';

// Wathers
import { watcherPosts } from '../bus/posts/saga/watchers';

export function* rootSaga () {
    yield all([
        call(watcherPosts),
    ]);
}
