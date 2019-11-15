import React from 'react'
import { Navbar, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <Row>
                <Col>
                    <Link to='/'><Navbar.Brand>ReOrder</Navbar.Brand></Link>
                {/* </Col>
                <Col> */}
                    <Link to='/'><Button>Home</Button></Link>
                </Col>
            </Row>
        </Navbar>

    )
}

export default Nav