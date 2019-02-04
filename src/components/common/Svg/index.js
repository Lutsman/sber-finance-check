import * as React from 'react';
import UIkit from 'uikit';

import './style.scss';

export class Svg extends React.Component {
    image = React.createRef();

    componentDidMount() {
        UIkit.svg(this.image.current);
    }

    render() {
        const {src, alt, ...rest} = this.props;
        return (
            <div className="svg-wrapper">
                <img src={src} alt={alt} ref={this.image} {...rest} />
            </div>
        );
    }
}
