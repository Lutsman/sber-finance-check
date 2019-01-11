import * as React from 'react';

export const OffCanvas = props => {
    return (
        <div id="offcanvas-overlay" data-uk-offcanvas="mode: push; overlay: true">
            <div className="uk-offcanvas-bar">
                <button className="uk-offcanvas-close" type="button" data-uk-close />

                <div className="uk-card uk-height-1-1 uk-flex uk-flex-center uk-flex-stretch">
                    <div className="uk-flex uk-flex-wrap uk-flex-wrap-between" data-uk-margin>
                        <div data-uk-margin>
                            <ul className="uk-nav">
                                <li><a href="/">Поддержка</a></li>
                                <li><a href="/">Инструкции</a></li>
                                <li><a href="/">FAQ</a></li>
                            </ul>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};