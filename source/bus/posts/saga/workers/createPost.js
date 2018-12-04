// Core
import { put, apply } from 'redux-saga/effects';

import { api } from '../../../../REST';
import { postsActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* createPost ({ payload: comment }) {
    try {
        yield put(uiActions.startSpinning());

        const response = yield apply(api, api.posts.create, [comment]);
        const { data: post, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }
        yield put(postsActions.createPost(post));
    } catch (error) {
        yield put(uiActions.emitError(error, 'createPost fetchUsers'));
    } finally {
        yield put(uiActions.stopSpinning());

    }
}
