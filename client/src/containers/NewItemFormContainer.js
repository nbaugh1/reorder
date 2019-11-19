import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addItem, updateItemName, updateItemPar } from '../actions/index'
import { Form, Button, Col, Row } from 'react-bootstrap'


class NewItemFormContainer extends Component {

    handleChange(e) {
        const { id, value } = e.target;
        e.preventDefault();
        if (id === "name") {
            this.props.updateItemName(value)
        } else if (id === "par") {
            this.props.updateItemPar(value)
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, par } = e.target
        const item = { name: name.value, par: par.value }
        this.props.addItem(item, this.props.history)
    }


    render() {
        return (
            <div className="container">

                <Form id="new-item" onSubmit={this.handleSubmit}>
                    <br />
                    <Row>
                        <Col />
                        <Col>
                            <Form.Group>
                                <Form.Label>Item Name: </Form.Label>
                                <Form.Control
                                    as="input"
                                    type="text"
                                    value={this.props.itemName}
                                    onChange={e => this.handleChange(e)}
                                    id="name"
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Item Par: </Form.Label>
                                <Form.Control
                                    as="input"
                                    type="number"
                                    value={this.props.itemPar}
                                    onChange={e => this.handleChange(e)}
                                    id="par"
                                />
                                <br />
                                <Button type="submit">Save</Button>
                            </Form.Group>
                        </Col>
                        <Col />
                    </Row>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        itemName: store.itemsReducer.itemName,
        itemPar: store.itemsReducer.itemPar
    }
}


export default connect(mapStateToProps, { addItem, updateItemName, updateItemPar })(NewItemFormContainer);
