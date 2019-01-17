import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'

import {Inner} from "./routes/Inner";
import {OffCanvas} from "./OffCanvas/OffCanvas";
import {Start} from "./routes/Start";

export class App extends Component {
  render() {
    return (
        <div className="uk-offcanvas-content">
            <div className="uk-child-width-expand uk-height-viewport uk-flex uk-flex-stretch">

                <Switch>
                    <Redirect from="/" exact to="/start"/>
                    <Route path="/start" component={Start} />
                    <Route path="/inner" component={Inner} />
                </Switch>
            </div>

            <OffCanvas/>

        </div>
    );
  }
}
