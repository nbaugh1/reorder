import React, { Component } from 'react';
import { Col, InputGroup, Button, FormControl } from 'react-bootstrap'


class OnHandInputForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
        console.log(this.state.onHand)
        console.log(this.props.name)
    }

    render() {
        return (
            <form id="onHand-form" onSubmit={this.handleSubmit}>
                <Col s={2} m={2} l={2}>

                    <div className="input-field">
                        <input type="text" name="onHand" id="onHand" value={this.state.onHand} onChange={this.handleChange} />
                        <label htmlFor="onHand">On Hand</label>
                    </div>
                    <input type="submit" value="Submit" className="btn-primary" />
                </Col>
            </form>
        )
    }
}

export default OnHandInputForm