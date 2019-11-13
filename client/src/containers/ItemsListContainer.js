import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getItems } from '../actions/index'
// import ItemCard from '../components/ItemCard'


class ItemsListContainer extends Component {
    componentDidMount() {
        if (!this.props.itemsLoaded) {
            debugger
        }
    }



    render() {
        if (!this.props.loading) {
            return(
                <div className="items-list">
                    <h1>test 1</h1>
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
