// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { type } from '../types';

// Workers
import { createComment, fillComments } from './workers';

function* watcherFillComments () {
    console.log(` -> "2" -> `, 2);
    yield takeEvery(type.FETCH_COMMENTS_ASYNC, fillComments);
}
function* watcherCreateComment () {
    console.log(` -> "3" -> `, 3);
    yield takeEvery(type.CREATE_COMMENT_ASYNC, createComment);
}
export function* watcherComments () {
    console.log(` -> "1" -> `, 1);
    yield all([
        call(watcherFillComments),
        call(watcherCreateComment),
    ]);
}
