// Core
import { put, apply } from 'redux-saga/effects';

import { api } from '../../../../REST';
import { commentsActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* createComment ({ payload: comment }) {
    try {
        yield put(uiActions.startSpinning());

        const response = yield apply(api, api.comments.create, [comment]);
        const newComment = yield apply(response, response.json);

        if (response.status !== 201) {
            throw new Error('Error createComment Worker');
        }
        yield put(commentsActions.createComment(newComment));
    } catch (error) {
        yield put(uiActions.emitError(error, 'createComment Worker'));
    } finally {
        yield put(uiActions.stopSpinning());
    }
}
