import * as React from 'react';

export const SidebarQuizStart = () => (
    <div
        className="tm-sidebar uk-width-medium uk-child-width-1-1 uk-flex uk-flex-wrap uk-flex-wrap-between uk-text-center uk-light"
        data-uk-margin>
        <div>
            <div className="tm-sidebar-title uk-flex uk-flex-center">
                <div className="tm-app-icon" />
            </div>
        </div>

        <div className="tm-font-tiny">
            <div>
                <a href="/" className="tm-font-light">sberscaner.ru</a>
            </div>
            <div>
                <a href="/" className="tm-opacity-70">Конфиденциальность</a>
            </div>
            <div>
                <a href="/" className="tm-opacity-70">Другая юридическая инфа</a>
            </div>
        </div>
    </div>
);