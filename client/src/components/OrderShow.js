import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getOrder } from '../actions'

export class OrderShow extends Component {

    componentDidMount(){
        const id = this.props.match.params.id
        this.props.getOrder(id)
    }

    render() {
        debugger
        if (!this.props.loading && this.props.currentOrder){
            const items = this.props.currentOrder.neededItems
            return(
                <h1>{items.join(', ')}</h1>
            ) 
            } else {
        return(
            <div>Loading...</div>
        )}
        
      }
    }

const mapStateToProps = store => {
    return {
        currentOrder: store.ordersReducer.currentOrder,
        loading: store.ordersReducer.loading
    }
}

export default connect(mapStateToProps, { getOrder })(OrderShow)