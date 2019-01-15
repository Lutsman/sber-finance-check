import * as React from 'react';

export class Checkbox extends React.Component {
    state = {
        checked: this.props.checked || false,
    };

    componentDidUpdate() {
        const {dispatchChange, checked} = this.props;

        if (checked !== this.state.checked) {
            dispatchChange(this.state.checked);
        }
    }

    changeHangler = e => {
        const checked = e.target.checked;

        this.setState({checked});
    };

    render() {
        return (
            <label>
                <input
                    className="uk-checkbox"
                    type="checkbox"
                    onChange={this.changeHangler}
                    checked = {this.state.checked}/>
            </label>
        )
    }
}
