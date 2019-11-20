import React from 'react'
import { Card, Col, Row, Form, Button } from 'react-bootstrap'


export const ItemCard = (props) => {
    return (
    <Card id={props.id}>
                <Card.Body>
                    <Row>
                        <Col>
                            <h2>{props.item.name}</h2>
                        </Col>
                        <Col>
                            <h2>Par: {props.item.par}</h2>
                        </Col>
                        <Col>
                            <Form id="on-hand" onSubmit={e => props.handleSubmit(e)}>
                                <Form.Label>On Hand:</Form.Label>
                                <Form.Control
                                    as="input"
                                    type="text"
                                    value={props.item.onHand}
                                    onChange={e => props.onChange(e)}
                                    id={props.item.id}
                                    name="onHand"
                                />
                            </Form>
                        </Col>
                        <Col>
                            <h2>Amount Needed: {props.amountNeeded}</h2>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
    )
}