import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addItem, updateItemName, updateItemPar } from '../actions/index';
import { Form } from 'react-bootstrap'

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

    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.props, this.props.history)
    }

    render() {
        return (
            <Form id="item-form" onSubmit={this.handleSubmit}>
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
                </Form.Group>
                
            </Form>
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

{/* <form id="item-form" onSubmit={this.handleSubmit}>

<div className="input-field">
    <label htmlFor="name" value="Name: " />
    <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} />
</div>

<div className="input-field">
    <label htmlFor="par">Par: </label>
    <input type="number" name="par" id="par" value={this.state.par} onChange={this.handleChange} />
</div>

<input type="submit" value="Create Item" className="btn-primary" />
</form> */}