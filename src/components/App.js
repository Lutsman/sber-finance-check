import React, { Component } from 'react';

import {Sidebar} from "./Sidebar/Sidebar";
import {InnerMain} from "./routes/InnerMain";
import {OffCanvas} from "./OffCanvas/OffCanvas";

class App extends Component {
  render() {
    return (
        <div className="uk-offcanvas-content">
            <div className="uk-child-width-expand uk-height-viewport uk-flex uk-flex-stretch">

                <Sidebar/>
                <InnerMain/>

            </div>

            <OffCanvas/>

        </div>
    );
  }
}

export default App;
