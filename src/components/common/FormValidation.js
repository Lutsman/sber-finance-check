import * as React from 'react';

export class FormValidation extends React.Component {
    state = {};

    limits = {}; // fieldName: {min: number, max: number}

    fields = []; // string[]

    isValidField = field => {
        const fieldState = this.state[field];
        const length = fieldState && fieldState.length;

        if (fieldState === undefined || this.limits[field] === undefined) return true;

        const {max, min} = this.limits[field];

        if (!min && !max) return true;

        if (min && max) {
            return min <= length && length <= max;
        }

        if (min) {
            return min <= length;
        }


        return length <= max;
    };

    isValidForm = () => {
        return this.fields.every(field => {
            const isValid = this.isValidField(field);
            return isValid;
        })
    };

    handleChange = field => e => {
        const {value} = e.target;
        const length = value.length;
        const max = this.limits[field].max;

        if (max && length > max) return;

        this.setState({
            [field]: value,
        });
    };

    getValidationClassName = field => this.isValidField(field) ? '' : 'form-input__error';
}
