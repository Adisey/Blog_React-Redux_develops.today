//Core
import { fromJS, List } from 'immutable';

// Instruments
import { type } from './types';

const initalState = List();

export const postsReducer = (state = initalState, action) => {
    switch (action.type) {
        case type.FILL_POSTS:
            return fromJS(action.payload);
        case type.CREATE_POST:
            return state.unshift(fromJS(action.payload));
        default:
            return state;
    }
};
