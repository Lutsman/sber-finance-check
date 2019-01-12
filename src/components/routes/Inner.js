import * as React from 'react';

import {Sidebar} from "../Sidebar/Sidebar";
import {Quiz} from "../Questions/Quiz";

export const Inner = props => {
    return ([
           <Sidebar/>,
           <Quiz/>,
    ]);
};