import React, { Component } from 'react';
import { Col } from 'react-bootstrap'



class OnHandInputForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            onHand: 0,
            amountNeeded: 0,
            itemsNeeded: []
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
        console.log(this.state.onHand)
        console.log(this.props.name)
        this.setState({ amountNeeded: this.props.par - this.state.onHand })

    }

    render() {
        return (
            <form id="onHand-form" onSubmit={this.handleSubmit}>


                <div className="input-field">
                    <label htmlFor="onHand">On Hand</label>
                    <input type="text" name="onHand" id="onHand" value={this.state.onHand} onChange={this.handleChange} />
                </div>
                <input type="submit" value="Submit" className="btn-primary" />
                <Col>
                    <h6>{this.state.amountNeeded}</h6>
                </Col>
            </form>

        )
    }
}

export default OnHandInputForm