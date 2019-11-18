import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateOrder } from '../actions'





class OnHandInputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsNeeded: [],
            amountNeeded: 0,
            onHand: 0
        }
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const needed = this.props.par - this.state.onHand
        this.setState({
            amountNeeded: needed
        })
        
        this.props.updateOrder({[this.props.name]: needed})
        
    }
    
    render() {
        return (
            <form id="onHand-form" onSubmit={this.handleSubmit}>
                <div className="input-field">
                    <label htmlFor="onHand">On Hand</label>
                    <input type="text" name="onHand" id="onHand" value={this.state.onHand} onChange={ this.handleChange }/>
                </div>
                <input type="submit" value="Submit" className="btn-primary" />
                <p>Amount Needed: { this.state.amountNeeded }</p>
            </form>
        )
    }
}

const mapStateToProps = store => {
    return {
        neededItems: store.ordersReducer.neededItems
    }
}

export default connect(mapStateToProps, { updateOrder })(OnHandInputForm)