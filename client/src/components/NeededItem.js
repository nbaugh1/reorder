import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

class NeededItem extends Component {
    componentDidMount() {

    }
    render() {
        const item = this.props.item
        const itemJSON = JSON.stringify(item)
        debugger
        return (
            <div>
                <Row>
                    <Col>
                        <h1>{Object.values(item)}</h1>
                    </Col>
                    <Col>
                        <h1> {Object.keys(item)}</h1>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default NeededItem