import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getItems, updateOnHand, updateCurrentItem } from '../actions/index'
import { Button, Container, CardGroup } from 'react-bootstrap';
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

    render() {
        if (!this.props.loading) {
            debugger
            const itemCards = this.props.items.map((item, i) => (
                <ItemCard key={item.id} item={item} updateCurrentItem={this.props.updateCurrentItem} />
            ))
            return (
                <Container>
                <CardGroup>
                    { itemCards }
                    </CardGroup>
                    <br />
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
