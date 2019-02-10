import React, { Component } from 'react';

class ProuductStat extends Component {

    render() {
        const { product } = this.props;

        return (
            <div className="productStats">
                <h3> Product Status</h3>
                <div><span>Open:</span>{product.open}</div>
                <div><span>High: </span>{product.high}</div>
                <div><span>Low: </span>{product.low}</div>
                <div><span>Volume: </span>{product.volume}</div>
            </div >
        )
    }
}

export default ProuductStat;
