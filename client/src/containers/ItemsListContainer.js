import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getItems, updateOnHand, updateCurrentItem } from '../actions/index'
import { Button, Form, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'


class ItemsListContainer extends Component {
    componentDidMount() {
        if (!this.props.itemsLoaded) {
            this.props.getItems();
        }
    }

    handleSubmitOrder = e => {
        e.preventDefault();
    }

    handleChange = (e) => {
        this.props.updateOnHand(e.target.value)
        this.props.updateCurrentItem(this.props.name)
        
    }

    handleSubmit = e => {
        e.preventDefault();
        const needed = this.props.par - this.props.onHand
        this.props.updateAmountNeeded({
            amountNeeded: needed
        })

        this.props.updateOrder({ [this.props.name]: needed })

    }

    render() {
        if (!this.props.loading) {
            const items = this.props.items.map((item, i) => (
                <div className="container" key={i}>
                    <Row>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <h2>{item.name}</h2>
                                    </Col>
                                    <Col>
                                        <h2>{item.name}</h2>
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
                    </Row>
                </div>
            ))
            debugger
            return (
                <div>
                    <h1> {items} </h1>
                    <Link to="/orders/new"><Button variant="secondary" size="lg" block>Review Order</Button></Link>
                </div>
            )
        } else {
            return (
                <div className="items-list">
                    <h1>Loading...</h1>
                </div>
            )
        }
    }
}


const mapStateToProps = store => {
    return {
        neededItems: store.ordersReducer.neededItems,
        items: store.itemsReducer.items,
        loading: store.itemsReducer.loading,
        itemsLoaded: store.itemsReducer.itemsLoaded,
        currentItem: store.itemsReducer.currentItem
    }
}


export default connect(mapStateToProps, { getItems, updateOnHand, updateCurrentItem })(ItemsListContainer);
