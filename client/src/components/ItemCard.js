import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Row, Col, Form, Button } from 'react-bootstrap'
import { updateCurrentItem, updateOnHand} from '../actions' 




class ItemCard extends Component {

    handleChange = (e) => {
        this.props.updateOnHand(e.target.value)
        this.props.updateCurrentItem(this.props.name)
        
    }

    render() {
        return (
            <Card>
                <Card.Body>
                    <Row>
                        <Col>
                            <h2>{this.props.name}</h2>
                        </Col>
                        <Col>
                            <h2>{this.props.onHand}</h2>
                        </Col>
                        <Col>
                            <h6>Par: {this.props.par}</h6>
                        </Col>
                        <Col>
                        <Form id="on-hand" onSubmit={this.handleSubmit}>
                        <Form.Label>On Hand:</Form.Label>
                        <Form.Control
                            as="input"
                            type="text"
                            value={this.props.onHand}
                            onChange={e => this.handleChange(e)}
                            id={this.props.name}
                        />
                        <Button type="submit" variant="primary">Save</Button>
                    </Form>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        )
    }
}

export default connect(null, { updateCurrentItem, updateOnHand })(ItemCard)