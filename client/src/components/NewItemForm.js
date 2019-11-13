import React, { Component } from 'react'
import { connect } from 'react-redux';


import { addItem } from '../actions';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            par: 0,
            onHand: 0,
            quantity: ''

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

        this.props.addItem(this.state, this.props.history)
    }

    render() {
        return (
            <form id="item-form" onSubmit={this.handleSubmit}>

                <div className="input-field">
                    <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} />
                    <label htmlFor="name">Name</label>
                </div>

                <input type="submit" value="Create Item" className="btn" />
            </form>
        )
    }
}

export default connect(null, { addItem })(Form);