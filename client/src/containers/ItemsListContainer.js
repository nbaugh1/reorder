import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getItems } from '../actions/index'
import ItemCard from '../components/ItemCard'


class ItemsListContainer extends Component {
    componentDidMount() {
        if (!this.props.itemsLoaded) {
            this.props.getItems();
        }
    }



    render() {
        if (!this.props.loading) {
            const items = this.props.items.map((item, i) => (
                <ItemCard
                    name={ item.name }
                    par={ item.par }
                    onHand={ item.onHand }
                    quantity={ item.quantity }
                    />
            ))
            
            return(
                <div className="items-list">
                    <h1> { items } </h1>
                </div>
            )} else {
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
        items: store.itemsReducer.items,
        loading: store.itemsReducer.loading,
        itemsLoaded: store.itemsReducer.itemsLoaded
    }
}


export default connect(mapStateToProps, { getItems })(ItemsListContainer);
