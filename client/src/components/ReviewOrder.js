import React from 'react'
import { Button } from 'react-bootstrap'

export const ReviewOrder = () =>
    const neededItems = this.props.items.filter( item =>  item.amount_needed )
        const orderItems = neededItems.map(item => (<NeededItem item={item} key={item.id} />))
        return (
            <form id="order-review" onSubmit={ this.handleSubmit }>
                <h1>{ orderItems } </h1>
                <label htmlFor="order-name">Order Title: </label>
                <input type="text" name="name" id="order-name" value={ this.state.name } onChange={ this.handleChange } />
                <Button type="submit">
                    Save
                </Button>
            </form>
        )