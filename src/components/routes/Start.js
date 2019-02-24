import * as React from 'react';

import {SidebarQuizStart} from "../Sidebar/SidebarQuizStart";
import {QuizStart} from "../QuizStart";

export const Start = props => {
    const {match} = props;

    return ([
        <SidebarQuizStart key="1" />,
        <QuizStart key="2" userId={match.params.id}/>,
    ]);
};

