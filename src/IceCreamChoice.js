import React from 'react';

export default class IceCreamChoice extends React.Component {

    render() {
        return (
            <div>
                {this.props.iceCreamFlavor}
            </div>
        );
    }
}

