import React from 'react'
import { Navbar, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <Row>
                <Col>
                    <Link to='/'><Navbar.Brand>ReOrder</Navbar.Brand></Link>
                    <Link to='/items/new'><Button>Add New Item</Button></Link>
                    <Link to='/orders'><Button>Order History</Button></Link>
                </Col>
            </Row>
        </Navbar>

    )
}

export default Nav