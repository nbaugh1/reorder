import React from 'react'
import { Row, Col } from 'react-bootstrap'

const NeededItem = () => {
        return (
            <div>
                <Row>
                    <Col>
                        <h1>{ this.props.name }</h1>
                    </Col>
                    <Col>
                        <h1> { this.props.amount }</h1>
                    </Col>
                </Row>
            </div>
        )
}
export default NeededItem