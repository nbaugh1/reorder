import React, { Component } from 'react'
import { connect } from 'react-redux'


class ReviewOrder extends Component {
    constructor(props) {
        super(props)
        
    }
    componentDidMount() {
    }
    render () {
        return(
            <h1>test</h1>
        )
    }
}
const mapStateToProps = store => {
    return {
        neededItems: store.ordersReducer.neededItems
    }
}
export default connect(mapStateToProps)(ReviewOrder)
