import {combineReducers} from 'redux';

import {reducer as quizReducer} from './quiz';

export const rootReducer = combineReducers({
    quiz: quizReducer,
});
