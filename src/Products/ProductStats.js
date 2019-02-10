import React, { Component } from 'react';

class ProuductStat extends Component {

    render() {
        const { product } = this.props;

        return (
            <div className="productStats">
                <h3> Product Status</h3>
                <div>Open: {product.open}</div>
                <div>High: {product.high}</div>
                <div>Low: {product.low}</div>
                <div>Volume: {product.volume}</div>
            </div >
        )
    }
}

export default ProuductStat;
