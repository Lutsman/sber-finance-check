import * as React from 'react';

import {SidebarQuiz} from "../Sidebar/SidebarQuiz";
import {QuizOntainer} from "../Quiz/QuizСontainer";

export const Inner = props => {
    return ([
           <SidebarQuiz key="1"/>,
           <QuizOntainer key="2"/>,
    ]);
};
