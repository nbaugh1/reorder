import React, { Component } from 'react'
import { getOrders } from '../actions'
import { connect } from 'react-redux'

class OrderHistory extends Component {
    componentDidMount() {
        if (!this.props.itemsLoaded) {
            this.props.getOrders();
        }
    }

    render() {
        debugger
        return (
            <div><h6>test</h6></div>
        )
    }
}


const mapStateToProps = store => {
    return {
        orders: store.ordersReducer.orders
    }
}

export default connect(mapStateToProps, { getOrders })(OrderHistory)