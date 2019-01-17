import * as React from 'react';
import {connect} from 'react-redux';

import people from "../../images/people.png";

export const FactsComponent = props => {
  return (
      <div className="tm-fact">
          <div className="uk-text-muted">А вы знали, что:</div>

          <div className="uk-flex-between uk-grid-large" data-uk-grid>
              <div className="uk-width-2-5">
                  <div className="tm-font-light uk-text-lead uk-text-primary">46%</div>
                  <div className="tm-text-large">всех клиентов тратят практически всю свою
                      зарплату.
                      Практически каждый второй.
                  </div>
              </div>

              <div className="uk-width-3-5">
                  <img src={people} alt=""/>
              </div>
          </div>
      </div>
  );
};

export const Facts = connect()(FactsComponent);
