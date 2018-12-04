// Core
import { put, apply } from 'redux-saga/effects';

import { api } from "../../../../REST";
import { commentsActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* fillComments () {
    try {
        yield put(uiActions.startSpinning());

        const response = yield apply(api, api.comments.fetch);
        const  comments  = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }
        yield put(commentsActions.fillComments(comments));
    } catch (error) {
        yield put(uiActions.emitError(error, 'fillComments worker'));
    } finally {
        yield put(uiActions.stopSpinning());

    }
}
