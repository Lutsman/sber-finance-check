import {combineReducers} from 'redux';

import quiz from './quiz';
import summary from './summary';

export const rootReducer = combineReducers({
    quiz,
    summary,
});
