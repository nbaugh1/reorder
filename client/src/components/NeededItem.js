import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

const NeededItem = (props) => {
        return (
            <div>
                <Row>
                    <Col>
                        <h1>{ props.item.name }</h1>
                    </Col>
                    <Col>
                        <h1> { props.item.amount_needed }</h1>
                    </Col>
                </Row>
                
            </div>
        )
}
export default NeededItem