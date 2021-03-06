import React, { Component } from 'react'
import { Card, Col, Row, Form, Button, ListGroupItem, ListGroup } from 'react-bootstrap'


class ItemCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            onHand: 0,
            amountNeeded: 0
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value,
        })
        
    }

    handleSubmit = e => {
        e.preventDefault()
        const updatedItem = {
            name: this.props.item.name,
            par: this.props.item.par,
            on_hand: this.state.onHand,
            amount_needed: this.props.item.par - this.state.onHand,
            id: this.props.item.id
        }
        this.setState({
            amountNeeded: updatedItem.amount_needed
        })
        this.props.updateCurrentItem(updatedItem, this.props.history)
    }
    
    render(){
        const {
            id,
            name,
            par
        } = this.props.item
        
        return (
                // <Card>
                // <Card.Body>
                //     <Row>
                //         <Col>
                //             <br />
                //             <h2> { name } </h2>
                //         </Col>
                //         <Col>
                //             <br />
                //             <h2>Par: { par }</h2>
                //         </Col> 
                //         <Col>
                //             <Form id="on-hand" onSubmit={ this.handleSubmit }>
                //                 <Form.Label>On Hand:</Form.Label>
                //                 <Form.Control
                //                     as="input"
                //                     type="number"
                //                     value={ this.state.onHand }
                //                     onChange={ this.handleChange }
                //                     id={ id }
                //                     name="onHand"
                //                 />
                //                 <br />
                //                 <Button type="submit">Save</Button>
                                
                //             </Form>
                //             <br />
                //         </Col>
                //         <Col>
                //             <h2>Amount Needed: { this.state.amountNeeded }</h2>
                //         </Col>
                //     </Row>
                //     </Card.Body>
                // </Card>
                <Card className="item-card">
                    <Card.Body>
                        <ListGroup>
                            <ListGroupItem>Name: { name }</ListGroupItem>
                            <ListGroupItem><h2>Amount Needed: { this.state.amountNeeded }</h2></ListGroupItem>
                            <ListGroupItem><h2>Par: { par }</h2></ListGroupItem>
                            <Form id="on-hand" onSubmit={ this.handleSubmit }>
                                <Form.Label>On Hand:</Form.Label>
                                <Form.Control
                                    as="input"
                                    type="number"
                                    value={ this.state.onHand }
                                    onChange={ this.handleChange }
                                    id={ id }
                                    name="onHand"
                                />
                                <br />
                                <Button type="submit">Save</Button>
                                
                            </Form>
                        </ListGroup>
                    </Card.Body>
                </Card>
        )
    }
}

export default ItemCard

