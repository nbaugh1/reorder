import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import OnHandInputForm from './OnHandInputForm'


const ItemCard = ({ name, par, onHand, quantity }) => {
    return (

        <Card bg="dark">
            <Card.Body>
                <Row>
                    <Col>
                        <h6>{name}</h6>
                    </Col>
                    <Col>
                        <OnHandInputForm 
                            onHand={ onHand }
                            name={ name }
                            />
                    </Col>
                    <Col>
                        <h6> {par}</h6>
                    </Col>
                    <Col>
                        <h6> {par}</h6>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )

}

export default ItemCard