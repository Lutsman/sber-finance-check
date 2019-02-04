import budgetGood from '../../images/illustration-budget-good.png';
import budgetNormal from '../../images/illustration-budget-normal.png';
import budgetBad from '../../images/illustration-budget-bad.png';
import finSecureGood from '../../images/illustration-safety-good.png';
import finSecureNormal from '../../images/illustration-safety-normal.png';
import finSecureBad from '../../images/illustration-safety-bad.png';
import investmentsGood from '../../images/illustration-investments-good.png';
import investmentsNormal from '../../images/illustration-investments-normal.png';
import investmentsBad from '../../images/illustration-investments-bad.png';

export const GUIDANCE_MAP = {
    budget: {
        high: {
            img: budgetGood,
        },
        medium: {
            img: budgetNormal,
        },
        low: {
            img: budgetBad,
        },
    },
    financial_secure: {
        high: {
            img: finSecureGood,
        },
        medium: {
            img: finSecureNormal,
        },
        low: {
            img: finSecureBad,
        },
    },
    investments: {
        high: {
            img: investmentsGood,
        },
        medium: {
            img: investmentsNormal,
        },
        low: {
            img: investmentsBad,
        },
    },
};

export const COLOR_MAP = {
    high: {
        gradient: {
            startColor: '#36F4D1',
            endColor: '#5A95D0',
            rotation: 90,
        },
        colorClassName: 'tm-indicator-level__high',
    },
    medium: {
        gradient: {
            startColor: '#BE90FF',
            endColor: '#AA29FF',
            rotation: 90,
        },
        colorClassName: 'tm-indicator-level__medium',
    },
    low: {
        gradient: {
            startColor: '#FF718C',
            endColor: '#AA3C51',
            rotation: 90,
        },
        colorClassName: 'tm-indicator-level___low',
    },
};
