import {guidances, fieldsMap} from "../fixtures";
import {STEP_TYPE} from "../components/Quiz/constants";
import {objectToArrayOfObjects, getLevel} from "../utils";

export const getSummary = fields => {
    return new Promise(resolve => {
        const groupScores = calc(fields);
        const totalScores = groupScores.reduce((sum, item, i, arr) => {
            let result = sum + item.value;

            if (i === arr.length - 1) {
                result /= arr.length;
            }

            return result;
        }, 0);

        resolve({
            title: guidances.title && guidances.title[getLevel(totalScores)],
            items: groupScores.map(group => {
                const {name, value} = group;
                const {title, subTitle, description, alerts} = guidances[name] || {};

                return {
                    name,
                    title,
                    alerts,
                    subTitle,
                    description: description && description[getLevel(value)],
                    percentage: value,
                };
            }),
        });
    });
};

function calc(fields) {
    const fieldsArr = objectToArrayOfObjects(fields);
    const groupedFields = {};
    let results = [];

    for (const field of fieldsArr) {
        const {group} = fieldsMap[field.name];
        const groupedField = groupedFields[group] = groupedFields[group] ? groupedFields[group] : [];
        const result = calcField(field);

        groupedField.push(result);
    }

    for (const [key, value] of Object.entries(groupedFields)) {
        results.push({
            name: key,
            value: value.reduce((sum, current, i, arr) => {
                const newSum = sum + current;

                return i === arr.length - 1 ? Math.ceil(newSum / arr.length) : newSum
            }, 0),
        });
    }

    return results;
}

function calcField(field) {
    const {type, range} = fieldsMap[field.name];

    switch (type) {
        case STEP_TYPE.dual:
        case STEP_TYPE.radio:
            return field.value;
        case STEP_TYPE.checkbox:
            const count = Object.entries(field.value).length;

            if (count === 1) return 10;
            if (count === 2) return 50;
            if (count > 2) return 100;

            return 0;
        case STEP_TYPE.vote:
            const {value} = field;
            const halfRange = range / 2;

            if (value > halfRange) {
                return 100;
            }

            return Math.ceil(value / halfRange * 100);
    }
}
