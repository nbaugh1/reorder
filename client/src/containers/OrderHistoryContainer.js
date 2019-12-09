import React, { Component } from 'react'
import { getOrders } from '../actions'
import { connect } from 'react-redux'
import { Table, Form, Button, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class OrderHistoryContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchTerm: "",
            allOrders: [],
            filteredOrders: []
        }
    }

    componentDidMount() {
        this.props.getOrders();
    }

    handleChange = (e) => {
        e.preventDefault()
        const value = e.target.value
        this.setState({
            searchTerm: value
        })
    }

    handleSearch = (e) => {
        e.preventDefault()
        this.filterOrders(this.state.searchTerm)
    }


    filterOrders = (searchTerm) => {
        let filteredOrders = this.props.orders
        filteredOrders = filteredOrders.filter((order) => {
            let orderName = order.name.toLowerCase()
            return orderName.indexOf(searchTerm.toLowerCase()) !== -1
        })
        this.setState({
            filteredOrders
        })
    }

    render() {

        const filteredOrders = this.state.filteredOrders
        const allOrders = this.props.orders
        
        const allOrderInfo = allOrders.map(order => (
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
        const filteredOrderInfo = filteredOrders.map(order => (
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
            <div>

                <Row>
                    <Form inline="true" onSubmit={this.handleSearch}>
                        <Form.Label>Search:</Form.Label>
                        <Form.Control
                            as="input"
                            name="searchTerm"
                            id="search"
                            onChange={this.handleChange}
                            type="text"
                        />
                        <Button type="submit">Search</Button>
                    </Form>
                </Row>
                <h5>Search Results:</h5>
                <Table bordered hover size="sm">
                { filteredOrderInfo }
                </Table>
                <Table bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Order No.</th>
                            <th>Name</th>
                            <th>Timestamp</th>
                        </tr>
                    </thead>
                    { allOrderInfo }
                </Table>
            </div>
        )
    }
}


const mapStateToProps = store => {
    return {
        orders: store.ordersReducer.orders
    }
}

export default connect(mapStateToProps, { getOrders })(OrderHistoryContainer)