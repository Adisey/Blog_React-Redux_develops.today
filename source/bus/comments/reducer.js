//Core
import { fromJS, List } from 'immutable';

// Instruments
import { type } from './types';

const initalState = List();

export const commentsReducer = (state = initalState, action) => {
    switch (action.type) {
        case type.FILL_COMMENTS:
            return fromJS(action.payload);
        case type.CREATE_COMMENT:
            return state.unshift(fromJS(action.payload));
        default:
            return state;
    }
};
