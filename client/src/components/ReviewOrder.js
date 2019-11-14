import React, { Component } from 'react'
import { connect } from 'react-redux'
import NeededItem from './NeededItem'


class ReviewOrder extends Component {
    constructor(props) {
        super(props)

    }
    componentDidMount() {
    }

    render() {
        const listItems = this.props.neededItems.map((item) => (
            <NeededItem  item={ item }/>
        ))

        return (
            <h1>{listItems}</h1>
        )
    }
}
const mapStateToProps = store => {
    return {
        neededItems: store.ordersReducer.neededItems
    }
}

export default connect(mapStateToProps)(ReviewOrder)
