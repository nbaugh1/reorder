import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Row, Col, Form, Button } from 'react-bootstrap'
import { updateCurrentItem, updateOnHand, updateOrder } from '../actions'
import { ItemCard } from '../components/ItemCard'

class ItemCardContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            amountNeeded: 0
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        // this.setState({
        //     [name]: value
        // })
        this.props.updateCurrentItem(this.props.item.name)
        this.props.updateOnHand(value)
        debugger
       
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.updateCurrentItem(this.props.item.name)
        this.props.updateOnHand(this.props.onHand)
    }

    render() {

        let amountNeeded = 0
        if (this.props.onHand === null) {
            amountNeeded = 0
        } else if (this.props.onHand > this.props.item.par) {
            amountNeeded = 0
        } else  if (this.props.onHand < this.props.item.par){
            amountNeeded = this.props.item.par - this.props.onHand
        } else {
            amountNeeded = 0
        }
        return (
            <ItemCard 
                item={ this.props.item }
                handleSubmit={ this.handleSubmit }
                onHand={ this.props.onHand }
                onChange={ this.handleChange }
                amountNeeded={ amountNeeded }    
            />
        )
    }
}

const mapStateToProps = store => {
    return {
        onHand: store.itemsReducer.onHand
    }
}

export default connect(null, { updateCurrentItem, updateOnHand, updateOrder })(ItemCardContainer)