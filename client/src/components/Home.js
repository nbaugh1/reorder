import React, { Component } from 'react'

export const Home = () => {
    console.log()
    return (
        <div className="card text-center">
            <div className="card-header">
                Order Up
            </div>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text"></p>
                <a href="/items" className="btn btn-danger">Create New Order Request</a><br /><br />
                <a href="/items/new" className="btn btn-danger">Add New Item</a><br /><br />
                <a href="/lists" className="btn btn-danger">View Order History</a><br /><br />
            </div>
            <div className="card-footer text-muted">
                footer goes here
            </div>
        </div>
    )
}

export default Home