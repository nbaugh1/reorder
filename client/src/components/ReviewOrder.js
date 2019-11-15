import React, { Component } from 'react'
import { connect } from 'react-redux'
import NeededItem from './NeededItem'
import { Button } from 'react-bootstrap'
import { addOrder } from '../actions' 


class ReviewOrder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            neededItems: {}
        }

    }
    componentDidMount() {
    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
    }
    
    handleSubmit = e => {
        e.preventDefault();
        this.setState({ neededItems: this.state.neededItems})
        this.props.addOrder(this.state, this.props.history)
    }

    render() {
        
        const listItems = this.props.neededItems.forEach((item) => (
            // <NeededItem  item={ item }/>
            console.log(Object.keys(item), Object.values(item))
        ))

        const listItemAmounts = this.props.neededItems.map((item) => (
            // <NeededItem  item={ item }/>
            Object.values(item)
        ))

        const listItemsNames = this.props.neededItems.map((item) => (
            // <NeededItem  item={ item }/>
            Object.keys(item)

        ))

        return (


            <form id="order-review" onSubmit={this.handleSubmit}>
                <h1>{ listItemsNames } - { listItemAmounts }</h1>
                <label htmlFor="order-name">Order Title: </label>
                <input type="text" name="name" id="order-name" value={this.state.name} onChange={this.handleChange} />

                <Button type="submit">
                    Save
                </Button>
            </form>
        )
    }
}
const mapStateToProps = store => {
    return {
        neededItems: store.ordersReducer.neededItems
    }
}

export default connect(mapStateToProps, { addOrder })(ReviewOrder)
