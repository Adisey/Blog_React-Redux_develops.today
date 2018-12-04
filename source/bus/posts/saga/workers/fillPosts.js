// Core
import { put, apply } from 'redux-saga/effects';

import { api } from "../../../../REST";
import { postsActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* fillPosts () {
    try {
        yield put(uiActions.startSpinning());

        const response = yield apply(api, api.posts.fetch);
        let posts  = yield apply(response, response.json);

        posts = posts.map((p) => {
            return {
                id:    p.id.toString(),
                title: p.title,
                body:  p.body,
            };
        });

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
