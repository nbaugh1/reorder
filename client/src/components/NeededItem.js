import React from 'react'
import { Row, Col } from 'react-bootstrap'

const NeededItem = ({item}) => {
        return (
            <div>
                <Row>
                    <Col>
                        <h1>{ item.name }</h1>
                    </Col>
                    <Col>
                        <h1> { item.amount_needed }</h1>
                    </Col>
                </Row>
                
            </div>
        )
}
export default NeededItem