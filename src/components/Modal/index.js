import * as React from 'react';
import ModalResponsive from "react-responsive-modal";

export const Modal = props => {
    const {classNames} = props;
    const customClassnames = {
        modal: 'tm-modal',
        closeIcon: 'tm-modal-close',
        overlay: 'tm-modal-overlay',
    };
    let resultClassNames = classNames ? {...classNames} : {};

    for (const [key, value] of Object.entries(customClassnames)) {
        resultClassNames = key in resultClassNames ? {
            ...resultClassNames,
            [key]: `${resultClassNames[key]} ${value}`,
        } : {
            ...resultClassNames,
            [key]: value,
        };
    }

    return (
        <ModalResponsive  {...props} classNames={resultClassNames}/>
    );
};
