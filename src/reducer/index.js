import {combineReducers} from 'redux';

import quiz from './quiz';
import summary from './summary';
import forms from './forms';
import user from './user';

export const rootReducer = combineReducers({
    quiz,
    summary,
    forms,
    user,
});
