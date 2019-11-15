import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'


const Home = () => {
    return (
        <div className="card text-center">
            <div className="card-header">
                <h1>ReOrder</h1>
            </div>
            <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text"></p>
                <Link to="/items"><Button variant="primary">Create New Order Request</Button></Link><br /><br />
                <Link to="/items/new"> <Button variant="primary">Add New Item</Button></Link><br /><br />
            </div>
            <div className="card-footer">
                
            </div>
        </div>
    )
}

export default Home