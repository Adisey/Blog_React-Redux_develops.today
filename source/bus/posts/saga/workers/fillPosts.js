// Core
import { put, apply } from 'redux-saga/effects';

import { api } from "../../../../REST";
import { postsActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* fillPosts () {
    try {
        yield put(uiActions.startSpinning());

        const response = yield apply(api, api.posts.fetch);
        const  posts  = yield apply(response, response.json);
        console.log(`posts->`, posts);

        if (response.status !== 200) {
            throw new Error(message);
        }
        yield put(postsActions.fillPosts(posts));
    } catch (error) {
        yield put(uiActions.emitError(error, 'fillPosts worker'));
    } finally {
        yield put(uiActions.stopSpinning());

    }
}
