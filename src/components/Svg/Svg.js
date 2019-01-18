import * as React from 'react';
import UIkit from 'uikit';

import './Svg.scss';

export class Svg extends React.Component {
    image = React.createRef();

    componentDidMount() {
        console.dir(this.image);
        UIkit.svg(this.image.current);
    }

    render() {
        const {src, alt} = this.props;
        return (
            <div className="svg-wrapper">
                <img src={src} alt={alt} ref={this.image} />
            </div>
        );
    }
}
