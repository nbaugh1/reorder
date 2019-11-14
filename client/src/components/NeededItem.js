import React, { Component } from 'react'

class NeededItem extends Component {
    componentDidMount() {
       
    }
    render() {
        const item = this.props.item
        const itemJSON = JSON.stringify(item) 
        debugger
        return(
            <div>
                <h1>{ itemJSON }</h1>
            </div>
        )
    }
}
export default NeededItem