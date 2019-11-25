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
            <tbody key={order.id}>
                <tr>
                    <td><Link to={`/orders/${order.id}`}>{order.id}</Link></td>
                    <td><Link to={`/orders/${order.id}`}>{order.name}</Link></td>
                    <td>{new Date(order.created_at).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'numeric',
                        year: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric'
                    })
                    }
                    </td>
                </tr>
            </tbody>
        ))

        return (
            <Table bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Order No.</th>
                        <th>Name</th>
                        <th>Timestamp</th>
                    </tr>
                </thead>
                {orderInfo}
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