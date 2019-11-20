import React, { Component } from 'react'
import { connect } from 'react-redux'
import NeededItem from '../components/NeededItem'
import { Button } from 'react-bootstrap'
import { addOrder, getItems } from '../actions'


class ReviewOrderContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            neededItems: []
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
        this.setState({ neededItems: this.state.neededItems })
        console.log("a")
        this.props.addOrder(this.state, this.props.history)
        console.log("b")

    }

    render() {
        const neededItems = this.props.items.map((item, i) => (
            <NeededItem
                name={item.name}
                amount={item.amount_needed}
            />
        ))

        return (
            <form id="order-review" onSubmit={ this.handleSubmit }>
                <h1>{ neededItems } </h1>
                <label htmlFor="order-name">Order Title: </label>
                <input type="text" name="name" id="order-name" value={ this.state.name } onChange={ this.handleChange } />
                <Button type="submit">
                    Save
                </Button>
            </form>
        )
    }
}
const mapStateToProps = store => {
    return {
        items: store.itemsReducer.items,
        neededItems: store.ordersReducer.neededItems
    }
}

export default connect(mapStateToProps, { addOrder, getItems })(ReviewOrderContainer)
