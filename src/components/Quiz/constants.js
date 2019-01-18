export const STEP_TYPE = {
    radio: 'radio',
    dual: 'dual',
    vote: 'vote',
    checkbox: 'checkbox',
};

export const STEPS = [
    {
        title: 'Сбережения',
        question: 'Удается ли вам откладывать часть ваших доходов?',
        component: STEP_TYPE.radio,
        fieldsData: {
            values: [
                {
                    label: 'Да, раз в 3 месяца или чаще',
                    name: 'savings',
                    value: 3,
                },
                {
                    label: 'Редко, раз в полгода-год',
                    name: 'savings',
                    value: 2,
                },
                {
                    label: 'Нет, обычно тратится всё',
                    name: 'savings',
                    value: 1,
                },
            ],
        },
    },
    {
        title: 'Обязательные расходы',
        question: 'Знаете ли вы точный размер ваших обязательных ежемесячных трат?',
        component: STEP_TYPE.dual,
        fieldsData: {
            values: [
                {
                    label: 'Да',
                    name: 'income_total',
                    value: 1,
                },
                {
                    label: 'Нет',
                    name: 'income_total',
                    value: 0,
                },
            ],
        },
    },
    {
        title: 'Финансовый резерв',
        question: 'Если вы потеряете работу как долго сможете сохранить текущий уровень жизни?',
        component: STEP_TYPE.vote,
        fieldsData: {
            type: 'voting',
            from: 1,
            to: 12,
            name: 'finance_backup',
            label: 'Месяцы'
        },
    },
    {
        title: 'Финансовый резерв',
        question: 'Сможете ли вы прямо сейчас купить двухнедельную путёвку не беря кредит?',
        component: STEP_TYPE.dual,
        fieldsData: {
            values: [
                {
                    label: 'Да',
                    name: 'travel_purchase',
                    value: 1,
                },
                {
                    label: 'Нет',
                    name: 'travel_purchase',
                    value: 0,
                },
            ],
        },
    },
    {
        title: 'Финансовая защита',
        question: 'Какие программы страхования жизни у вас есть?',
        component: STEP_TYPE.checkbox,
        fieldsData: {
            values: [
                {
                    label: 'Медицинская страховка',
                    name: 'inshur',
                    value: 'insur_1',
                },
                {
                    label: 'Добровольное медицинское страхование',
                    name: 'inshur',
                    value: 'insur_2',
                },
                {
                    label: 'Рисковое страхование',
                    name: 'inshur',
                    value: 'insur_3',
                },
                {
                    label: 'Страхование от работодателя',
                    name: 'inshur',
                    value: 'insur_4',
                },
                {
                    label: 'Накопительное страхование жизни',
                    name: 'inshur',
                    value: 'insur_5',
                },
                {
                    label: 'Страхование выезжающих зарубеж',
                    name: 'inshur',
                    value: 'insur_6',
                },
            ],
        },
    },
    {
        title: 'Цели',
        question: 'Есть ли у вас приоритетные цели, на которые Вы хотели бы накопить?',
        component: STEP_TYPE.radio,
        fieldsData: {
            values: [
                {
                    label: 'Да, есть',
                    name: 'savings_like',
                    value: 3,
                },
                {
                    label: 'Нет целей',
                    name: 'savings_like',
                    value: 2,
                },
                {
                    label: 'Всегда коплю без цели',
                    name: 'savings_like',
                    value: 1,
                },
            ],
        },
    },
    {
        title: 'Инвестиционные инструменты',
        question: 'В каких инструментах вы держите часть своих сбережений?',
        component: STEP_TYPE.checkbox,
        fieldsData: {
            values: [
                {
                    label: 'Облигации',
                    name: 'securities',
                    value: 'securities_1',
                },
                {
                    label: 'Акции',
                    name: 'securities',
                    value: 'securities_2',
                },
                {
                    label: 'ИСЖ',
                    name: 'securities',
                    value: 'securities_3',
                },
                {
                    label: 'Недвижимость',
                    name: 'securities',
                    value: 'securities_4',
                },
                {
                    label: 'Депозит',
                    name: 'securities',
                    value: 'securities_5',
                },
                {
                    label: 'ПИФы',
                    name: 'securities',
                    value: 'securities_6',
                },
                {
                    label: 'ИИС',
                    name: 'securities',
                    value: 'securities_7',
                },
            ],
        },
    },
];

