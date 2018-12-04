// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { type } from '../types';

// Workers
import { createComment, fillComments } from './workers';

function* watcherFillComments () {
    yield takeEvery(type.FETCH_COMMENTS_ASYNC, fillComments);
}
function* watcherCrateComment () {
    yield takeEvery(type.CREATE_COMMENT_ASYNC, createComment);
}
export function* watcherComments () {
    yield all([
        call(watcherCrateComment),
        call(watcherFillComments)
    ]);
}
