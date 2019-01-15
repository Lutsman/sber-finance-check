import * as React from 'react';

import {Sidebar} from "../Sidebar/Sidebar";
import {QuizOntainer} from "../Quiz/QuizСontainer";

export const Inner = props => {
    return ([
           <Sidebar key="1"/>,
           <QuizOntainer key="2"/>,
    ]);
};
