import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Col, Row } from 'react-bootstrap'


const Home = () => {
    return (
        <Row>
        <Col />
        <Card className="home-card">
            <Card.Header>
                <h1>ReOrder</h1>
            </Card.Header>
            <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text"></p>
                <Link to="/items"><Button variant="primary">Create New Order Request</Button></Link><br /><br />
                <Link to="/items/new"> <Button variant="primary">Add New Item</Button></Link><br /><br />
                <Link to="/orders"> <Button variant="primary">Order History</Button></Link><br /><br />

            </div>
            <div className="card-footer">
                
            </div>
        </Card>
        <Col />
        </Row>
    )
}

export default Home