import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

//Product Columns
const productDetails = ['id', 'Base Currency', 'Quote Currency', 'Base Min Size', 'Base Max Size', 'Quote Increment'];

class AllProducts extends Component {

    productHeader = () => {
        return (<TableHead>
            <TableRow>
                {productDetails.map(product => <TableCell key={product}>{product}</TableCell>)}
            </TableRow>
        </TableHead>)
    }

    rowClick = (id) => {
        this.props.selectedProduct(id);
    }

    productItems = () => {
        const { products } = this.props;
        return (<TableBody>
            {products.map(product => (
                <TableRow key={product.id} onClick={() => this.rowClick(product.id)}>
                    <TableCell component="th" scope="row">
                        {product.id}
                    </TableCell>
                    <TableCell>{product.base_currency}</TableCell>
                    <TableCell>{product.quote_currency}</TableCell>
                    <TableCell>{product.base_min_size}</TableCell>
                    <TableCell>{product.base_max_size}</TableCell>
                    <TableCell>{product.quote_increment}</TableCell>
                </TableRow>
            ))}
        </TableBody >)
    }

    render() {
        return (
            <div className="products" >
                <h3> All Products (Select the Product to get the Stats)</h3>
                <Table>
                    {this.productHeader()}
                    {this.productItems()}
                </Table>
            </div >
        );
    }
}

export default AllProducts;
