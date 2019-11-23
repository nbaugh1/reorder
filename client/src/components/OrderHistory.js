import React, { Component } from 'react'
import { getOrders } from '../actions'
import { connect } from 'react-redux'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class OrderHistory extends Component {
    componentDidMount() {
        if (!this.props.itemsLoaded) {
            this.props.getOrders();
        }
    }

    render() {
        const orderInfo = this.props.orders.map(order => (
            <tr>
                <td>{ order.id }</td>
                <td><Link to={`/orders/${order.id}`}>{ order.name }</Link></td>
                <td>{ order.created_at }</td>
            </tr>
        ))
        return (
            <Table striped bordered hover size="sm">
                <tr>
                    <th>Order No.</th>
                    <th>Name</th>
                    <th>Timestamp</th>
                </tr>
                { orderInfo }
            </Table>
        )
    }
}


const mapStateToProps = store => {
    return {
        orders: store.ordersReducer.orders
    }
}

export default connect(mapStateToProps, { getOrders })(OrderHistory)