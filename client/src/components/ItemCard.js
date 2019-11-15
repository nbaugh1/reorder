import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import OnHandInputForm from './OnHandInputForm'


const ItemCard = ({ name, par, onHand }) => {
    return (
        <Card>
            <Card.Body>
                <Row>
                    <Col>
                        <h3>{name}</h3>
                    </Col>
                    <Col>
                        <OnHandInputForm
                            onHand={onHand}
                            name={name}
                            par={par}
                        />
                    </Col>
                    <Col>
                        <h6>Par: {par}</h6>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default ItemCard