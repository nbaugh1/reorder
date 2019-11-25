import React, { Component } from 'react'
import { connect } from 'react-redux'
import NeededItem from '../components/NeededItem'
import { Button, Form, Row } from 'react-bootstrap'
import { addOrder, getItems, clearItemCounts } from '../actions'


class ReviewOrderContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: ""
        }
    }

    componentDidMount() {
        if (!this.props.itemsLoaded) {
            this.props.getItems();
        }
    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {

        e.preventDefault();
        const items = this.props.items.map(item => `${item.name}: ${item.amount_needed}`)
        const order = { name: e.target.name.value, neededItems: items }
        this.props.addOrder(order, this.props.history)
        
    }

    render() {
        const neededItems = this.props.items.filter(item => item.amount_needed)
        const orderItems = neededItems.map(item => (<NeededItem item={item} key={item.id} />))
        return (
            <div>
                <h4>{orderItems}</h4>
                <Row>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Label htmlFor="order-name">Order Title: </Form.Label>
                        <Form.Control
                            as="input"
                            name="name"
                            type="text"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                        <br />
                        <Button type="submit">
                            Save
                        </Button>
                    </Form>
                </Row>
            </div>
        )
    }
}
const mapStateToProps = store => {
    return {
        items: store.itemsReducer.items
    }
}

export default connect(mapStateToProps, { addOrder, getItems, clearItemCounts })(ReviewOrderContainer)
