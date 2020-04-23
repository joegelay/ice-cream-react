import React from 'react';

export default class IceCreamContainer extends React.Component {

    makeIceCreamFlavors = () => (
        ["Rocky Road", "Cookies & Cream", "Chunky Monkey"].map((str, idx) => {
          let callback = () => this.props.setIceCreamFlavor(str)
          return <h3 onClick={callback} key={idx} className="ice-cream-flavor">{str}</h3>
        })
    )

    render() {
        return (
            <div>
                {this.makeIceCreamFlavors()}
            </div>
        );
    }
}

