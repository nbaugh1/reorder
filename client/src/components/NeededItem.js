import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

class NeededItem extends Component {
    
    render() {
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
}
export default NeededItem