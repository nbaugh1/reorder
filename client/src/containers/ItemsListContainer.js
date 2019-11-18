import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getItems } from '../actions/index'
import ItemCard from '../components/ItemCard'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'


class ItemsListContainer extends Component {
    componentDidMount() {
        if (!this.props.itemsLoaded) {
            this.props.getItems();
        }
    }

    handleSubmitOrder = e => {
        e.preventDefault();
    }

    render() {
        if (!this.props.loading) {
            const items = this.props.items.map((item, i) => (
                <ItemCard
                    name={item.name}
                    par={item.par}
                    onHand={item.onHand}
                    quantity={item.quantity}
                />
            ))
                debugger
            return (
                <form id="order-form" onSubmit={this.handleSubmitOrder}>
                
                
                    <h1> {items} </h1>
                    <Link to="/orders/new"><Button type="submit" variant="secondary" size="lg" block>Review Order</Button></Link>
                </form>
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
        itemsLoaded: store.itemsReducer.itemsLoaded
    }
}


export default connect(mapStateToProps, { getItems })(ItemsListContainer);
