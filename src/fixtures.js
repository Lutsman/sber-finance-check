import {STEP_TYPE, STEP_GROUP} from "./components/Quiz/constants";

export const steps = [
    {
        title: 'Сбережения',
        question: 'Удается ли вам откладывать часть ваших доходов?',
        type: STEP_TYPE.radio,
        group: STEP_GROUP.budget,
        fieldsData: {
            values: [
                {
                    label: 'Да, раз в 3 месяца или чаще',
                    name: 'savings',
                    value: 100,
                },
                {
                    label: 'Редко, раз в полгода-год',
                    name: 'savings',
                    value: 50,
                },
                {
                    label: 'Нет, обычно тратится всё',
                    name: 'savings',
                    value: 0,
                },
            ],
        },
    },
    {
        title: 'Обязательные расходы',
        question: 'Знаете ли вы точный размер ваших обязательных ежемесячных трат?',
        type: STEP_TYPE.dual,
        group: STEP_GROUP.budget,
        fieldsData: {
            values: [
                {
                    label: 'Да',
                    name: 'income_total',
                    value: 100,
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
        type: STEP_TYPE.vote,
        group: STEP_GROUP.budget,
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
        type: STEP_TYPE.dual,
        group: STEP_GROUP.finSecure,
        fieldsData: {
            values: [
                {
                    label: 'Да',
                    name: 'travel_purchase',
                    value: 100,
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
        type: STEP_TYPE.checkbox,
        group: STEP_GROUP.finSecure,
        fieldsData: {
            values: [
                {
                    label: 'Медицинская страховка',
                    name: 'insurance',
                    value: 'insurance_1',
                },
                {
                    label: 'Добровольное медицинское страхование',
                    name: 'insurance',
                    value: 'insurance_2',
                },
                {
                    label: 'Рисковое страхование',
                    name: 'insurance',
                    value: 'insurance_3',
                },
                {
                    label: 'Страхование от работодателя',
                    name: 'insurance',
                    value: 'insurance_4',
                },
                {
                    label: 'Накопительное страхование жизни',
                    name: 'insurance',
                    value: 'insurance_5',
                },
                {
                    label: 'Страхование выезжающих зарубеж',
                    name: 'insurance',
                    value: 'insurance_6',
                },
            ],
        },
    },
    {
        title: 'Цели',
        question: 'Есть ли у вас приоритетные цели, на которые Вы хотели бы накопить?',
        type: STEP_TYPE.radio,
        group: STEP_GROUP.investments,
        fieldsData: {
            values: [
                {
                    label: 'Да, есть',
                    name: 'savings_like',
                    value: 100,
                },
                {
                    label: 'Нет целей',
                    name: 'savings_like',
                    value: 0,
                },
                {
                    label: 'Всегда коплю без цели',
                    name: 'savings_like',
                    value: 50,
                },
            ],
        },
    },
    {
        title: 'Инвестиционные инструменты',
        question: 'В каких инструментах вы держите часть своих сбережений?',
        type: STEP_TYPE.checkbox,
        group: STEP_GROUP.investments,
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

export const fieldsMap = {
    savings: {
        type: STEP_TYPE.radio,
        group: STEP_GROUP.budget,
    },
    income_total: {
        type: STEP_TYPE.dual,
        group: STEP_GROUP.budget,
    },
    finance_backup: {
        type: STEP_TYPE.vote,
        group: STEP_GROUP.budget,
        range: 12,
    },
    travel_purchase: {
        type: STEP_TYPE.dual,
        group: STEP_GROUP.finSecure,
    },
    insurance: {
        type: STEP_TYPE.checkbox,
        group: STEP_GROUP.finSecure,
    },
    savings_like: {
        type: STEP_TYPE.radio,
        group: STEP_GROUP.investments,
    },
    securities: {
        type: STEP_TYPE.checkbox,
        group: STEP_GROUP.investments,
    },
};

export const guidances = {
    title: {
        high: 'Поздравляем! Ваши финансы почти в порядке',
        medium: 'Поздравляем! Ваши финансы почти в порядке',
        low: 'Поздравляем! Ваши финансы почти в порядке',
    },
    budget: {
        title: 'Бюджет и расходы',
        subTitle: 'Ваши финансы под контролем на',
        alerts: {
            high: [
            ],
            medium: [
                {
                    id: 'budget_1',
                    text: 'Риск получения минимальной пенсии.',
                },
            ],
            low: [
                {
                    id: 'budget_1',
                    text: 'Риск получения минимальной пенсии.',
                },
            ],
        },
        description: {
            high: `<p>Все хорошо.</p>
                   <p>Привычка сберегать деньги полезна для здоровья финансов.</p>
                   <p>Начните откладывать еще больше с нашим сервисом <a href="/" class="tm-modal-link">Бюджет</a>.</p>`,
            medium: `<p>Все нормально.</p>
                   <p>Откладывая деньги, вы создаёте финансовую подушку безопасности на будущее.</p>
                   <p>С сервисом <a href="/" class="tm-modal-link">Бюджет</a> в Сбербанк Онлайн вы сможете контролировать расходы и начать откладывать деньги.</p>`,
            low: `<p>Все плохо.</p>
                   <p>Откладывая деньги, вы создаёте финансовую подушку безопасности на будущее.</p>
                   <p>С сервисом <a href="/" class="tm-modal-link">Бюджет</a> в Сбербанк Онлайн вы сможете контролировать расходы и начать откладывать деньги.</p>`,
        },
    },
    financial_secure: {
        title: 'Финансовая безопасность',
        subTitle: 'Ваши финансы под защитой на',
        alerts: {
            high: [],
            medium: [],
            low: [
                {
                    id: 'finsec_1',
                    text: 'Риск незапланированной траты в будущем',
                },
            ],
        },

        description: {
            high: `<p>Все хорошо.</p>
                   <p>Поздравляем с оптимальным уровнем финансового резерва.</p>
                   <p>Восстановить доход, если поступления средств прекратятся, возможно без снижения текущего уровня жизни.</p>`,
            medium: `<p>Все нормально.</p>
                    <p>У вас минимальный финансовый резерв</p>
                    <p>Если ваши доходы приостановятся на длительное время, то текущих денег будет недостаточно для сохранения привычного уровня жизни</p>`,
            low: `<p>Все плохо.</p>
                  <p>У вас минимальный финансовый резерв</p>
                  <p>Если ваши доходы приостановятся на длительное время, то текущих денег будет недостаточно для сохранения привычного уровня жизни</p>`,
        },
    },
    investments: {
        title: 'Инвестиции и цели',
        subTitle: 'Ваши финансы работают на вас на',
        alerts: {
            high: [
                {
                    id: '',
                    text: '',
                },
            ],
            medium: [],
            low: [],
        },
        description: {
            high: `<p>Все хорошо.</p>
                    <p>Постановка финансовых целей позволяет достигать задуманного быстрее.</p>
                    <p>С помощью сервиса Цели в Сбербанк Онлайн вы сможете сформировать и визуализировать свою цель, а также установить срок и способ ее достижения</p>`,
            medium: `<p>Все нормально.</p>
                    <p>Постановка финансовых целей позволяет достигать задуманного быстрее</p>
                    <p>С помощью сервиса Цели в Сбербанк Онлайн вы сможете сформировать и визуализировать свою цель, а также установить срок и способ ее достижения</p>`,
            low: `<p>Все плохо.</p>
                   <p>В жизни каждого человека происходят события, требующие финансовой подготовленности.</p>
                   <p>Быть готовым к таким событиям поможет наш сервис "Цели", где можно обозначить и визуализировать будущую цель, а также установить срок и способ ее достижения.</p>`,
        },
    },
};
