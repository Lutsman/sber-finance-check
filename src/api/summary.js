import {guidances, fieldsMap} from "../fixtures";
import {STEP_TYPE} from "../components/Quiz/constants";
import {objectToArray} from "../utils";

export const getSummary = fields => {
    return new Promise(resolve => {
        const groups = calc(fields);
        const totalScores = groups.reduce((sum, curr, i, arr) => {
            let result = sum + curr;

            if (i === arr.length - 1) {
                result /= arr.length;
            }

            return result;
        }, 0);

        resolve({
            title: guidances.title[getLevel(totalScores)],
            items: groups.map(group => {
                const {title, subTitle, value, description, alerts} = guidances[group.name];

                return {
                    title,
                    alerts,
                    subTitle: `${subTitle} ${value}%`,
                    description: description[getLevel(value)],
                    percentage: group.value,
                };
            }),
        });
    });
};

function calc(fields) {
    let groups = {};

    for (const [key, field] of Object.entries(fields)) {
        const group = groups[field.group] = groups[field.group] ? groups[field.group] : [];
        const result = calcField(field);

        group.push(result);
    }

    for (const [key, value] of Object.entries(groups)) {
        groups = {
            ...groups,
            [key]: {
                value: value.reduce((sum, current, i, arr) => {
                    const newSum = sum + current;

                    return i === arr.length - 1 ? newSum / arr.length : newSum
                }, 0),
            },
        };
    }

    return objectToArray(groups, true, 'name');
}

function calcField(field) {
    switch (field.type) {
        case STEP_TYPE.dual:
        case STEP_TYPE.radio:
            return field.value;
        case STEP_TYPE.checkbox:
            const count = field.value.length;

            if (count === 1) return 10;
            if (count === 2) return 50;
            if (count > 2) return 100;

            return 0;
        case STEP_TYPE.vote:
            const {value, range} = field;
            const halfRange = range / 2;

            if (value > halfRange) {
                return 100;
            }

            return Math.ceil(value / halfRange * 100);
    }
}

function getLevel(percentage) {
    if (percentage > 65) return 'high';

    if (percentage > 35) return 'medium';

    return 'low';
}
