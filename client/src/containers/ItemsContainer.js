import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getItems, updateOnHand, updateCurrentItem } from '../actions/index'
import { Button, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import ItemCard from '../components/ItemCard'

class ItemsContainer extends Component {
    componentDidMount() {
        if (!this.props.itemsLoaded) {
            this.props.getItems();
        }
    }

    handleSubmitOrder = e => {
        e.preventDefault();
    }

    handleChange = (e) => {
        debugger
        // this.props.updateOnHand(e.target.value)
        // this.props.updateCurrentItem(this.props.name)
        debugger
    }

    handleSubmit = e => {
        e.preventDefault();
        const needed = this.props.par - this.props.onHand
        this.props.updateAmountNeeded({
            amountNeeded: needed
        })
        this.props.updateOrder({ [this.props.name]: needed })
    }

    render() {
        if (!this.props.loading) {
            const itemCards = this.props.items.map((item, i) => (
                <ItemCard key={item.id} item={item} handleChange={this.handleChange} updateCurrentItem={this.props.updateCurrentItem} />
            ))
            return (
                <Container>
                    {itemCards}
                    <Link to="/orders/new"><Button variant="secondary" size="lg" block>Review Order</Button></Link>
                </Container>
            )
        } else {
            return (
                <div className="items-list">
                    <h1>Loading...</h1>
                </div>
            )
        }
    }
}

const mapStateToProps = store => {
    return {
        neededItems: store.ordersReducer.neededItems,
        items: store.itemsReducer.items,
        loading: store.itemsReducer.loading,
        itemsLoaded: store.itemsReducer.itemsLoaded,
        currentItem: store.itemsReducer.currentItem
    }
}

export default connect(mapStateToProps, { getItems, updateOnHand, updateCurrentItem })(ItemsContainer);
