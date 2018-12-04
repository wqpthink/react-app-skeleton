import {fromJS} from 'immutable';
import {actionTypes} from './interface';

const defaultState = fromJS({

});

export default (state = defaultState, action) => {
    switch (action.type) {
    case actionTypes.ACTION_NONE:

        break;
    default:
        return state;
    }
};
