import * as React from 'react';

import {Sidebar} from "../Sidebar/Sidebar";
import {Quiz} from "../Quiz/Quiz";

export const Inner = props => {
    return ([
           <Sidebar key="1"/>,
           <Quiz key="2"/>,
    ]);
};
