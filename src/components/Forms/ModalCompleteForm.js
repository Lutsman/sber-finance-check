import * as React from 'react';

import successImg from '../../images/modal-success.png';
// import failImg from '../../images/modal-fail.png';

export const ModalCompleteForm = props => {
    const {fail, children, onSubmit, buttonValue} = props;

    return (
        <div>
            <div className="uk-modal-dialog uk-modal-body uk-text-center uk-flex uk-flex-center">
                <div className="uk-width-2-3@s">
                    <div className="img-wrapper">
                        <img src={fail ? successImg : successImg} alt=""/>
                    </div>
                    {children}
                    <div>
                        <button className="tm-border-rounded uk-modal-close uk-button uk-button-primary uk-margin-top"
                                type="button"
                                onClick={onSubmit}>
                            { buttonValue ? buttonValue : 'Закрыть' }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
