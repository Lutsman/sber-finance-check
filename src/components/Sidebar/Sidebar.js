import  * as React from 'react';

export const Sidebar = props => {
    return (
        <div
            className="tm-sidebar uk-width-medium uk-child-width-1-1 uk-flex uk-flex-wrap uk-flex-wrap-between uk-text-center uk-light"
            data-uk-margin>
            <div>
                <div className="tm-sidebar-title uk-text-large uk-text-bold">СберСканер</div>

                <div className="tm-scale-header tm-opacity-70 uk-text-small">Заполните шкалу, чтобы получить отчет о
                    финансах
                </div>
                <div className="uk-flex uk-flex-center">
                    <div className="tm-scale">
                        <i className="fa fa-play" aria-hidden="true"/>
                    </div>
                </div>

            </div>

            <div className="tm-font-tiny">
                <div>
                    <a href="/" className="tm-font-light">sberscaner.ru</a>
                </div>
                <div>
                    <a href="/" className="tm-opacity-70">Политика конфиденциальности</a>
                </div>
            </div>
        </div>
    );
};

