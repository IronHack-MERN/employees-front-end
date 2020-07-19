import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className='home'>
                <div className='home-card'>
                    <h1><Link className='navbar-brand' to='/employees' style={{ textDecoration: 'none' }}> All Employees</Link> </h1>
                </div>
                <div className='home-card'>
                    <h1><Link className='navbar-brand' to='/create' style={{ textDecoration: 'none' }}> Create an Employee</Link> </h1>
                </div>
                <div className='home-card'>
                    <h1><Link className='navbar-brand' to='/update' style={{ textDecoration: 'none' }}> Update Employee</Link> </h1>
                </div>
                <div className='home-card'>
                    <h1><Link className='navbar-brand' to='/find' style={{ textDecoration: 'none' }}> Find Employee by id</Link></h1>
                    
                </div>
            </div>
        );
    }
}

export default Home;